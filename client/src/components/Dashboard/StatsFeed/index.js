import React from 'react';

// import components
// import YtdTotalRunStats from './YtdTotalRunStats';
import AllTimeStats from './AllTimeStats';

// import styled components
import { DashboardFeedWrapper, DashboardFeedTitle } from '../styled';

const StatsFeed = () => {
  return (
    <DashboardFeedWrapper>
      <DashboardFeedTitle color="dawn" textShadow="podium">
        Stats
      </DashboardFeedTitle>
      <AllTimeStats />
      {/* <YtdTotalRunStats /> */}
    </DashboardFeedWrapper>
  );
};

export default StatsFeed;
