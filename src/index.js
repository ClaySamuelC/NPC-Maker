import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import {tables} from './dict.js';
import {rollTable} from './roller.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

tables.forEach((table) => {
  console.log(table.title + ': ' + rollTable(table));
});

reportWebVitals();
