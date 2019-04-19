import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import component template
import TotalStatsCard from '../TotalStatsCard';

// load query
const GET_ALL_RUN_TOTAL_STATS_QUERY = loader('./queries/GET_ALL_RUN_TOTAL_STATS_QUERY.graphql');

function AllTimeRunStats(props) {
  const { data, error, loading } = useQuery(GET_ALL_RUN_TOTAL_STATS_QUERY, {
    variables: { authToken: props.authToken, id: 3001031, type: 'run', interval: 'all' },
  });

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
    <TotalStatsCard
      type="Run"
      interval="All Time"
      count={count}
      distance={distance}
      elapsedTime={elapsedTime}
      movingTime={movingTime}
      elevationGain={elevationGain}
    />
  );
}

export default AllTimeRunStats;
