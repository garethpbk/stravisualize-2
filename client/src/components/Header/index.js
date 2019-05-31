import React from 'react';

// import components
import AnimatedTitle from '../AnimatedTitle';

// import styled components
import { HeaderWrapper, HeaderContainer } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <AnimatedTitle />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
