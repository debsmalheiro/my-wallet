// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// hooks
import {ThemeProvider} from './hooks/theme';
import {AuthProvider} from './hooks/auth';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <App />
      </AuthProvider>
    </ThemeProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
