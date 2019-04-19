import React from 'react';

// import styled components
import { StatsCardHeader, StatsCardTab } from '../styled';

// import svg
import { ReactComponent as RunIcon } from '../../../../assets/icons/run-icon.svg';
import { ReactComponent as CycleIcon } from '../../../../assets/icons/cycle-icon.svg';

const AllTimeStatsCardHeader = ({ activeType, setActiveType }) => (
  <StatsCardHeader>
    <StatsCardTab active={activeType === 'run' ? true : false} onClick={() => setActiveType('run')}>
      <RunIcon />
    </StatsCardTab>
    <StatsCardTab active={activeType === 'ride' ? true : false} onClick={() => setActiveType('ride')}>
      <CycleIcon />
    </StatsCardTab>
  </StatsCardHeader>
);

export default AllTimeStatsCardHeader;
