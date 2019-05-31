import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (authToken) {
      const saveIsTrue = props.location.search.search('saveToLocalStoragetrue');

      if (saveIsTrue !== -1) {
        localStorage.setItem('stravisualizeToken', authToken);
      }
    }
  }, [authToken]);

  useEffect(() => {
    if (!authCode) {
      const tokenSavedToLocalStorage = localStorage.getItem('stravisualizeToken');

      if (tokenSavedToLocalStorage) {
        setAuthToken(tokenSavedToLocalStorage);
      }
    }
  }, [authToken]);

  if (!authCode && !authToken) return <Authorize location={props.location} setAuthCode={setAuthCode} />;

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
