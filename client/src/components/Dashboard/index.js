import React from 'react';

// import components
import ActivityFeed from './ActivityFeed';
import StatsFeed from './StatsFeed';

// import styled components
import { DashboardWrapper } from './styled';

const Dashboard = ({ authToken }) => (
  <DashboardWrapper>
    <ActivityFeed authToken={authToken} />
    <StatsFeed authToken={authToken} />
  </DashboardWrapper>
);

export default Dashboard;
