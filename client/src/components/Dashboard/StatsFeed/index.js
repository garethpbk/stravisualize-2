import React from 'react';

// import components
import AllTotalRunStats from './AllTotalRunStats';

// import styled components
import { DashboardFeedWrapper, DashboardFeedTitle } from '../styled';

const StatsFeed = () => {
  return (
    <DashboardFeedWrapper>
      <DashboardFeedTitle color="dawn" textShadow="podium">
        Stats
      </DashboardFeedTitle>
      <div>
        <AllTotalRunStats />
      </div>
    </DashboardFeedWrapper>
  );
};

export default StatsFeed;
