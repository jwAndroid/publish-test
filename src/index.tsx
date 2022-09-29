import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { theme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
