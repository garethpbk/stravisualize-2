import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import ActivityCard from './ActivityCard';

const PosedCard = posed.div({
  open: {
    opacity: 1,
    x: 0,
    applyAtStart: { display: 'block' },
    delay: ({ i }) => i * 50,
  },
  closed: {
    opacity: 0,
    x: -100,
    applyAtEnd: { display: 'none' },
  },
});

const ActivityCardFeed = ({ activityList, state }) => (
  <PoseGroup>
    {activityList.map(({ id, name, type, subType, startDate, distance, averageSpeed }, i) => (
      <PosedCard key={`${id}-posed`} pose={state[type.toLowerCase()][subType] ? 'open' : 'closed'} i={i}>
        <ActivityCard
          key={id}
          id={id}
          name={name}
          type={type}
          subType={subType}
          startDate={startDate}
          distance={distance}
          averageSpeed={averageSpeed}
          visible={state[type.toLowerCase()][subType]}
        />
      </PosedCard>
    ))}
  </PoseGroup>
);

export default ActivityCardFeed;
