import React from 'react';

// import styled components
import { StatsCardWrapper, StatsCardContainer } from './styled/StatsCardStyled';

const TotalStats = ({ type, interval, count, distance, elapsedTime, movingTime, elevationGain }) => {
  return (
    <StatsCardWrapper>
      <StatsCardContainer>
        <h1>{`${interval} ${type} Stats`}</h1>
        <div>
          <h3>Count</h3>
          <h4>{`${count} ${type}s`}</h4>
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

export default TotalStats;
