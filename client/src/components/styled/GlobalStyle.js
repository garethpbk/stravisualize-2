import { createGlobalStyle } from 'styled-components';

// import theme helpers
import { getColor } from '../../util/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Rubik, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html, body {
    height: 100%;
    
    font-family: Rubik, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.4;

    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    //background-color: ${getColor('light')};
    background-color: #f0f0f0;
  }

  #root {
    height: 100%;
  }

  image, svg {
    max-width: 100%;
  }

  button, input {
    font-family: Rubik, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

export default GlobalStyle;
