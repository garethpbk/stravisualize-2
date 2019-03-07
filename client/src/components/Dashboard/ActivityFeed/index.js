import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import components
import ActivityCard from './ActivityCard';

// import styled components
import { DashboardFeedWrapper, DashboardFeedTitle } from '../styled';

// load query
const GET_ACTIVITY_LIST_QUERY = loader('./queries/GET_ACTIVITY_LIST_QUERY.graphql');

const ActivityFeed = () => {
  const { data, error, loading } = useQuery(GET_ACTIVITY_LIST_QUERY, { variables: { count: 5 } });

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
        data.activityList.map(({ id, name, type, subType, startDate, distance, averageSpeed }) => (
          <ActivityCard
            key={id}
            name={name}
            type={type}
            subType={subType}
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
