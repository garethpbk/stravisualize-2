import React, { useState } from 'react';
// import { Router } from '@reach/router';
import PosedRouter from './Router';

// import components
import Activity from '../Activity';
import Authorize from '../Authorize';
import Dashboard from '../Dashboard';
import Footer from '../Footer';
import GetToken from '../GetToken';
import Header from '../Header';

// import styled components
import { AppContentWrapper, AppContentContainer } from './styled';

function App(props) {
  const [authCode, setAuthCode] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  if (!authCode) return <Authorize location={props.location} setAuthCode={setAuthCode} />;

  if (!authToken) return <GetToken authCode={authCode} setAuthToken={setAuthToken} />;

  return (
    <AppContentWrapper>
      <Header />
      <AppContentContainer>
        <PosedRouter>
          {/* <Router primary={false}> */}
          <Dashboard authToken={authToken} path="/" />
          <Activity authToken={authToken} path="/activity/:id" />
          {/* </Router> */}
        </PosedRouter>
      </AppContentContainer>
      <Footer />
    </AppContentWrapper>
  );
}

export default App;
