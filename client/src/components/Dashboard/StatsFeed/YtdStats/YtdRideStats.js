import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo-hooks';

// import component template
import TotalStatsCard from '../TotalStatsCard';

// load query
const GET_YTD_RIDE_TOTAL_STATS_QUERY = loader('./queries/GET_YTD_RIDE_TOTAL_STATS_QUERY.graphql');

function YtdRideStats(props) {
  const { data, error, loading } = useQuery(GET_YTD_RIDE_TOTAL_STATS_QUERY, {
    variables: { authToken: props.authToken, id: 3001031, type: 'ride', interval: 'ytd' },
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

  console.log(data);
  const {
    athleteStats: {
      ytdRideTotal: { count, distance, elapsedTime, movingTime, elevationGain },
    },
  } = data;

  return (
    <TotalStatsCard
      type="Ride"
      interval="Year-to-Date"
      count={count}
      distance={distance}
      elapsedTime={elapsedTime}
      movingTime={movingTime}
      elevationGain={elevationGain}
    />
  );
}

export default YtdRideStats;
