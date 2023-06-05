import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@fontsource-variable/oswald';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/passion-one/400.css';
import '@fontsource/passion-one/700.css';
import 'react-tooltip/dist/react-tooltip.css';
import ResetStyle from './styles.js/ResetStyle.jsx';
import GlobalStyle from './styles.js/GlobalStyle.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);