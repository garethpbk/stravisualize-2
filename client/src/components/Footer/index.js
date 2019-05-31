import React from 'react';

// import styled components
import { FooterWrapper, FooterContainer } from './styled';

// import svg
import { ReactComponent as PoweredByStrava } from '../../assets/strava/powered-by-strava-vert-white.svg';

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <p>
        © {new Date().getFullYear()}{' '}
        <a href="https://gareth.cool" target="_blank" rel="noopener noreferrer">
          gareth bk
        </a>
      </p>
      <PoweredByStrava />
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
