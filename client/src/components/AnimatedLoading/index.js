import React from 'react';

// import styled components
import { AnimatedLetter } from '../styled';
import { AnimatedLoadingContent } from './styled';

const AnimatedLoading = () => (
  <AnimatedLoadingContent>
    <h1>
      <AnimatedLetter delay={0}>L</AnimatedLetter>
      <AnimatedLetter delay={1}>O</AnimatedLetter>
      <AnimatedLetter delay={2}>A</AnimatedLetter>
      <AnimatedLetter delay={3}>D</AnimatedLetter>
      <AnimatedLetter delay={4}>I</AnimatedLetter>
      <AnimatedLetter delay={5}>N</AnimatedLetter>
      <AnimatedLetter delay={6}>G</AnimatedLetter>
    </h1>
  </AnimatedLoadingContent>
);

export default AnimatedLoading;
