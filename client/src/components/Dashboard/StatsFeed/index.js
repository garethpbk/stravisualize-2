import React from 'react';

// import components
import AllTimeStats from './AllTimeStats';
import YtdStats from './YtdStats';

// import styled components
import { DashboardFeedWrapper, DashboardFeedTitle } from '../styled';

const StatsFeed = ({ authToken }) => {
  return (
    <DashboardFeedWrapper>
      <DashboardFeedTitle color="dawn" textShadow="podium">
        Stats
      </DashboardFeedTitle>
      <AllTimeStats authToken={authToken} />
      <YtdStats authToken={authToken} />
    </DashboardFeedWrapper>
  );
};

export default StatsFeed;
