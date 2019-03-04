import React from 'react';

// import components
import ActivityFeed from './ActivityFeed';
import StatsFeed from './StatsFeed';

// import styled components
import { DashboardWrapper } from './styled';

const Dashboard = () => (
  <DashboardWrapper>
    <ActivityFeed />
    <StatsFeed />
  </DashboardWrapper>
);

export default Dashboard;
