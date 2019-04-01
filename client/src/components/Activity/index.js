import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import components
import Map from './Map';

// import styled components
import { ActivityContent, ActivityDate, ActivityHeader, ActivityName } from './styled';

const GET_ACTIVITY_QUERY = loader('./queries/GET_ACTIVITY_QUERY.graphql');

function Activity(props) {
  const { data, error, loading } = useQuery(GET_ACTIVITY_QUERY, { variables: { id: props.id } });

  if (loading) return '<h1>Loading...</h1>';

  if (error) return `Error!: ${error}`;

  console.log(data);

  const {
    activity: { averageHeartrate, averageSpeed, calories, distance, movingTime, name, startDate },
  } = data;

  return (
    <div>
      <ActivityHeader>
        <ActivityName>{name}</ActivityName>
        <ActivityDate>{startDate}</ActivityDate>
      </ActivityHeader>
      <Map activity={data.activity} />
      <ActivityContent>
        <div>{distance} miles</div>
        <div>{movingTime}</div>
        <div>{calories}</div>
        <div>{averageSpeed} min/mile</div>
        <div>{averageHeartrate} avg bpm</div>
      </ActivityContent>
    </div>
  );
}

export default Activity;
