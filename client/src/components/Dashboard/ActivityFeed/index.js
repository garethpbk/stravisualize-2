import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

// import styled components
import ActivityCard from './ActivityCard';

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

const ActivityFeed = () => {
  const { data, error, loading } = useQuery(GET_ACTIVITY_LIST, { variables: { count: 5 } });

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Activity Feed</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.activityList.map(i => (
          <ActivityCard key={i.id} name={i.name} startDate={i.startDate} distance={i.distance} />
        ))
      )}
    </div>
  );
};

export default ActivityFeed;
