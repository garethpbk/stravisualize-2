import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

// import styled components
import { ContentWrapper, ContentContainer } from './styled/AppStyled';

const GET_ACTIVITY_LIST = gql`
  query GET_ACTIVITY_LIST($count: Int!) {
    activityList(count: $count) {
      id
      name
      startDate
      distance
    }
  }
`;

function App() {
  const [count, setCount] = useState(5);

  const { data, error, loading } = useQuery(GET_ACTIVITY_LIST, { variables: { count } });

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    console.log(error);
  }

  return (
    <ContentWrapper>
      <ContentContainer>
        <h1>Stravisualize</h1>
        <ul>
          {data.activityList.map(i => (
            <li key={i.id}>{`${i.name}, ${i.startDate}, ${i.distance}`}</li>
          ))}
        </ul>
        <button onClick={() => setCount(count + 1)}>More!</button>
      </ContentContainer>
    </ContentWrapper>
  );
}

export default App;
