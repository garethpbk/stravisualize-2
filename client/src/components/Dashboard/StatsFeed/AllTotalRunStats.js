import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import query
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
    <div>
      <h1>All Time Run Stats</h1>
      <h3>{`Count: ${count} runs`}</h3>
      <h3>{`Distance: ${distance} miles`}</h3>
    </div>
  );
};

export default AllTotalRunStats;
