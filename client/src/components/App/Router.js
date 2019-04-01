import React, { useState } from 'react';
import { Router, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

const transition = { opacity: { duration: 250 }, default: { duration: 250, ease: 'linear', position: 'relative' } };

const randomNumber = max => Math.floor(Math.random() * Math.floor(max));

const RoutesContainer = posed.div({
  enter: { rotateX: 0, rotateY: 0, transition, originX: '20% 40%', originY: '40% 20%', beforeChildren: true },
  preEnter: {
    // rotateX: randomNumber(180),
    // rotateY: randomNumber(180),
    rotateX: 45,
    rotateY: 45,
    originX: '20% 40%',
    originY: '40% 20%',
    transition,
  },
  // exit: { rotateX: randomNumber(360), rotateY: randomNumber(360), transition },
  exit: { rotateX: 90, rotateY: 90, originX: '20% 40%', originY: '40% 20%', transition },
});

const PosedRouter = ({ children, direction }) => {
  return (
    <Location>
      {({ location }) => (
        <PoseGroup preEnterPose="preEnter" preEnterMax={180} exitMax={360}>
          <RoutesContainer key={location.pathname}>
            <Router location={location} basepath="/" primary={false}>
              {children}
            </Router>
          </RoutesContainer>
        </PoseGroup>
      )}
    </Location>
  );
};

export default PosedRouter;
