import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import components
import ActivityCard from './ActivityCard';

// import styled components
import { DashboardFeedWrapper, DashboardFeedTitle } from '../styled';

const GET_ACTIVITY_LIST_QUERY = loader('./queries/GET_ACTIVITY_LIST_QUERY.graphql');

const ActivityFeed = () => {
  const { data, error, loading } = useQuery(GET_ACTIVITY_LIST_QUERY, { variables: { count: 25 } });

  if (error) {
    console.log(error);
  }

  return (
    <DashboardFeedWrapper>
      <DashboardFeedTitle color="twilight" textShadow="glacier">
        Activities
      </DashboardFeedTitle>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.activityList.map(({ id, name, type, startDate, distance, averageSpeed }) => (
          <ActivityCard
            key={id}
            name={name}
            type={type}
            startDate={startDate}
            distance={distance}
            averageSpeed={averageSpeed}
          />
        ))
      )}
    </DashboardFeedWrapper>
  );
};

export default ActivityFeed;
