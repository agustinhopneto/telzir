import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';

import logo from './assets/logo.svg';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <header>
        <img src={logo} alt="Telzir" />
      </header>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
