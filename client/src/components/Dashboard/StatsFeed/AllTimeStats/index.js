import React, { useState } from 'react';

// import components
import AllTimeStatsCardHeader from './AllTimeStatsCardHeader';
import AllTimeRideStats from './AllTimeRideStats';
import AllTimeRunStats from './AllTimeRunStats';

// import styled components
import { StatsCardWrapper } from '../styled';

function AllTimeStats() {
  const [activeType, setActiveType] = useState('run');

  const drawActiveStatsCard = () => {
    switch (activeType) {
      case 'run':
        return <AllTimeRunStats />;
      case 'ride':
        return <AllTimeRideStats />;
      default:
        return <AllTimeRunStats />;
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
