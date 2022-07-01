import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CatProvider } from './contexts/CatContext';
import { PlayerProvider } from './contexts/PlayerContext';
import { GlobalStyles } from './styles/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayerProvider>
      <CatProvider>
        <GlobalStyles />
        <App />
      </CatProvider>
    </PlayerProvider>
  </React.StrictMode>
);
