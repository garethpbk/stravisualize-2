import React from 'react';

// import components
import AllTotalRunStats from './AllTotalRunStats';
import YtdTotalRunStats from './YtdTotalRunStats';

// import styled components
import { DashboardFeedWrapper, DashboardFeedTitle } from '../styled';

const StatsFeed = () => {
  return (
    <DashboardFeedWrapper>
      <DashboardFeedTitle color="dawn" textShadow="podium">
        Stats
      </DashboardFeedTitle>
      <AllTotalRunStats />
      <YtdTotalRunStats />
    </DashboardFeedWrapper>
  );
};

export default StatsFeed;
