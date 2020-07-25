import { createGlobalStyle } from 'styled-components';

import background from '../assets/backgroundHeader.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: url(${background}) no-repeat center top;
    background-color: #FBF5FF;
  }

  body, input, button, select, option {
    font-family: 'Poppins', sans-serif;
    color: #333;

    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
