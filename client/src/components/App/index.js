import React, { useState } from 'react';
import { Router } from '@reach/router';
import PosedRouter from './Router';

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
        <PosedRouter>
          {/* <Router primary={false}> */}
          <Dashboard path="/" />
          <Activity path="/activity/:id" />
          {/* </Router> */}
        </PosedRouter>
      </ContentContainer>
      <Footer />
    </ContentWrapper>
  );
}

export default App;
