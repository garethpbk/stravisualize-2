import React from 'react';

// import components
import Dashboard from '../Dashboard';

// import styled components
import { ContentWrapper, ContentContainer } from './styled/AppStyled';

function App() {
  return (
    <ContentWrapper>
      <ContentContainer>
        <Dashboard />
      </ContentContainer>
    </ContentWrapper>
  );
}

export default App;
