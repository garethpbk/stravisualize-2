import React from 'react';

// import components
import Header from './Header';
import Dashboard from '../Dashboard';
import Footer from './Footer';

// import styled components
import { ContentWrapper, ContentContainer } from './styled/AppStyled';

function App() {
  return (
    <ContentWrapper>
      <Header />
      <ContentContainer>
        <Dashboard />
      </ContentContainer>
      <Footer />
    </ContentWrapper>
  );
}

export default App;
