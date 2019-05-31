import React from 'react';
import posed, { PoseGroup } from 'react-pose';

// import styled components
import { ActivityCardWrapper, ActivityCardContainer, ActivityCardTop, ActivityCardBottom } from './styled';

// import svg
import { ReactComponent as RunIcon } from '../../../assets/icons/run-icon.svg';
import { ReactComponent as TreadmillIcon } from '../../../assets/icons/treadmill-icon.svg';
import { ReactComponent as CycleIcon } from '../../../assets/icons/cycle-icon.svg';

const PosedCard = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 250,
    transition: { y: { type: 'tween', duration: 250, ease: 'easeInOut' }, default: { duration: 250 } },
  },
  exit: { y: 50, opacity: 0, transition: { type: 'tween', duration: 250, ease: 'easeInOut' } },
});

const ActivityCard = ({ name, type, subType, startDate, distance, averageSpeed, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <PoseGroup>
      <PosedCard key="card">
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
      </PosedCard>
    </PoseGroup>
  );
};

export default ActivityCard;
