import React from 'react';
import { Router } from '@reach/router';

// import components
import Header from './Header';
import Dashboard from '../Dashboard';
import Activity from '../Activity';
import Footer from './Footer';

// import styled components
import { ContentWrapper, ContentContainer } from './styled/AppStyled';

function App() {
  return (
    <ContentWrapper>
      <Header />
      <ContentContainer>
        <Router primary={false}>
          <Dashboard path="/" />
          <Activity path="/activity/:id" />
        </Router>
      </ContentContainer>
      <Footer />
    </ContentWrapper>
  );
}

export default App;
