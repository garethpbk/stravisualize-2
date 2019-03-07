import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import styled components
import { StatsCardWrapper, StatsCardContainer } from './styled/StatsCardStyled';

// load query
const GET_ALL_RUN_TOTAL_STATS_QUERY = loader('./queries/GET_ALL_RUN_TOTAL_STATS_QUERY.graphql');

const AllTotalRunStats = () => {
  const { data, error, loading } = useQuery(GET_ALL_RUN_TOTAL_STATS_QUERY, { variables: { id: 3001031, type: 'run' } });

  if (error) {
    console.log(error);
  }

  if (loading) {
    console.log('loading...');

    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const {
    athleteStats: {
      allRunTotal: { count, distance, elapsedTime, movingTime, elevationGain },
    },
  } = data;

  return (
    <StatsCardWrapper>
      <StatsCardContainer>
        <h1>All Time Run Stats</h1>
        <div>
          <h3>Count</h3>
          <h4>{count} runs</h4>
        </div>
        <div>
          <h3>Distance</h3>
          <h4>{distance} miles</h4>
        </div>
        <div>
          <h3>Total Time</h3>
          <h4>{elapsedTime}</h4>
        </div>
        <div>
          <h3>Moving Time</h3>
          <h4>{movingTime}</h4>
        </div>
        <div>
          <h3>Elevation Gain</h3>
          <h4>{elevationGain} feet</h4>
        </div>
      </StatsCardContainer>
    </StatsCardWrapper>
  );
};

export default AllTotalRunStats;
