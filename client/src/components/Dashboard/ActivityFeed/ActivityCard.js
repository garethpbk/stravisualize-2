import React from 'react';
import { Link } from '@reach/router';

// import styled components
import { ActivityCardWrapper, ActivityCardContainer, ActivityCardTop, ActivityCardBottom } from './styled';

// import svg
import { ReactComponent as RunIcon } from '../../../assets/icons/run-icon.svg';
import { ReactComponent as TreadmillIcon } from '../../../assets/icons/treadmill-icon.svg';
import { ReactComponent as CycleIcon } from '../../../assets/icons/cycle-icon.svg';

const ActivityCard = ({ id, name, type, subType, startDate, distance, averageSpeed, visible }) => {
  // if (!visible) {
  //   return null;
  // }

  return (
    <Link to={`activity/${id}`}>
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
    </Link>
  );
};

export default ActivityCard;
