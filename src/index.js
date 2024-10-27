// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Si vous avez des styles globaux supplémentaires
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
