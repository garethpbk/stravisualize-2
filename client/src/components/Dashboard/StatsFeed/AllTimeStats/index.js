import React, { useState } from 'react';

// import components
import AllTimeStatsCardHeader from './AllTimeStatsCardHeader';
import AllTimeRideStats from './AllTimeRideStats';
import AllTimeRunStats from './AllTimeRunStats';

// import styled components
import { StatsCardWrapper } from '../styled';

function AllTimeStats(props) {
  const [activeType, setActiveType] = useState('run');

  const drawActiveStatsCard = () => {
    switch (activeType) {
      case 'run':
        return <AllTimeRunStats authToken={props.authToken} />;
      case 'ride':
        return <AllTimeRideStats authToken={props.authToken} />;
      default:
        return <AllTimeRunStats authToken={props.authToken} />;
    }
  };

  return (
    <StatsCardWrapper>
      <h1>{`All Time ${activeType.charAt(0).toUpperCase()}${activeType.slice(1)} Stats`}</h1>
      <AllTimeStatsCardHeader activeType={activeType} setActiveType={setActiveType} />
      {drawActiveStatsCard(activeType)}
    </StatsCardWrapper>
  );
}

export default AllTimeStats;
