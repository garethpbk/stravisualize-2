import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { ThemeProvider } from 'styled-components';
import theme from './util/theme';

// import typefaces
import 'typeface-bangers';
import 'typeface-oswald';
import 'typeface-rubik';

// import components
import GlobalStyle from './components/styled/GlobalStyle';
import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:6969',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <App />
      </>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
