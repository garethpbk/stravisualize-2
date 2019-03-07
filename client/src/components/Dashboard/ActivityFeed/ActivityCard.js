import React from 'react';

// import styled components
import {
  ActivityCardWrapper,
  ActivityCardContainer,
  ActivityCardTop,
  ActivityCardBottom,
} from './styled/ActivityCardStyled';

// import svg
import { ReactComponent as RunIcon } from '../../../assets/icons/run-icon.svg';
import { ReactComponent as TreadmillIcon } from '../../../assets/icons/treadmill-icon.svg';
import { ReactComponent as CycleIcon } from '../../../assets/icons/cycle-icon.svg';

const ActivityCard = ({ name, type, subType, startDate, distance, averageSpeed }) => (
  <ActivityCardWrapper>
    <ActivityCardContainer>
      {type === 'Run' ? (
        subType === 'outside' ? (
          <RunIcon />
        ) : (
          <TreadmillIcon />
        )
      ) : type === 'Ride' ? (
        <CycleIcon />
      ) : null}
      {/* {type === 'Run' ? <RunIcon /> : type === 'Ride' ? <CycleIcon /> : null} */}
      <div>
        <ActivityCardTop>
          <h2>{name}</h2>
          <h2>{startDate}</h2>
        </ActivityCardTop>
        <ActivityCardBottom>
          <h3>{`${distance} miles`}</h3>
          <h3>{`${averageSpeed} / mi`}</h3>
        </ActivityCardBottom>
      </div>
    </ActivityCardContainer>
  </ActivityCardWrapper>
);

export default ActivityCard;
