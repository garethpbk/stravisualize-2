import React from 'react';

// import styled components
import { ActivityCardWrapper, ActivityCardTop, ActivityCardBottom } from './styled/ActivityCardStyled';

const ActivityCard = ({ name, startDate, distance }) => (
  <ActivityCardWrapper>
    <ActivityCardTop>
      <h2 className="name">{name}</h2>
      <h2 className="date">{startDate}</h2>
    </ActivityCardTop>
    <ActivityCardBottom>
      <h3>{distance}</h3>
    </ActivityCardBottom>
  </ActivityCardWrapper>
);

export default ActivityCard;
