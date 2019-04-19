import React, { useState } from 'react';

// import components
import YtdStatsCardHeader from './YtdStatsCardHeader';
import YtdRideStats from './YtdRideStats';
import YtdRunStats from './YtdRunStats';

// import styled components
import { StatsCardWrapper } from '../styled';

function YtdStats(props) {
  const [activeType, setActiveType] = useState('run');

  const drawActiveStatsCard = () => {
    switch (activeType) {
      case 'run':
        return <YtdRunStats authToken={props.authToken} />;
      case 'ride':
        return <YtdRideStats authToken={props.authToken} />;
      default:
        return <YtdRunStats authToken={props.authToken} />;
    }
  };

  return (
    <StatsCardWrapper>
      <h1>{`Year-to-Date ${activeType.charAt(0).toUpperCase()}${activeType.slice(1)} Stats`}</h1>
      <YtdStatsCardHeader activeType={activeType} setActiveType={setActiveType} />
      {drawActiveStatsCard(activeType)}
    </StatsCardWrapper>
  );
}

export default YtdStats;
