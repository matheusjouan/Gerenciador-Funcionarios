import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './context';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);
export default App;
