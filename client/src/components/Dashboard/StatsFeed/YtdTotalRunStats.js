import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import component template
import TotalStats from './TotalStats';

// load query
const GET_YTD_RUN_TOTAL_STATS_QUERY = loader('./queries/GET_YTD_RUN_TOTAL_STATS_QUERY.graphql');

const YtdTotalRunStats = () => {
  const { data, error, loading } = useQuery(GET_YTD_RUN_TOTAL_STATS_QUERY, {
    variables: { id: 3001031, type: 'run', interval: 'ytd' },
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
      ytdRunTotal: { count, distance, elapsedTime, movingTime, elevationGain },
    },
  } = data;

  return (
    <TotalStats
      type="Run"
      interval="Year-to-Date"
      count={count}
      distance={distance}
      elapsedTime={elapsedTime}
      movingTime={movingTime}
      elevationGain={elevationGain}
    />
  );
};

export default YtdTotalRunStats;
