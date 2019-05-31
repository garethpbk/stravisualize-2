import React from 'react';

// import styled components
import { AnimatedLetter } from '../styled';
import { AnimatedTitleLink } from './styled';

const AnimatedTitle = () => (
  <AnimatedTitleLink to="/">
    <h1>
      <AnimatedLetter delay={0}>S</AnimatedLetter>
      <AnimatedLetter delay={1}>t</AnimatedLetter>
      <AnimatedLetter delay={2}>r</AnimatedLetter>
      <AnimatedLetter delay={3}>a</AnimatedLetter>
      <AnimatedLetter delay={4}>v</AnimatedLetter>
      <AnimatedLetter delay={5}>i</AnimatedLetter>
      <AnimatedLetter delay={6}>s</AnimatedLetter>
      <AnimatedLetter delay={7}>u</AnimatedLetter>
      <AnimatedLetter delay={8}>a</AnimatedLetter>
      <AnimatedLetter delay={9}>l</AnimatedLetter>
      <AnimatedLetter delay={10}>i</AnimatedLetter>
      <AnimatedLetter delay={11}>z</AnimatedLetter>
      <AnimatedLetter delay={12}>e</AnimatedLetter>
    </h1>
  </AnimatedTitleLink>
);

export default AnimatedTitle;
