import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App.js에 App func가 있음 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') // id가 root인것을 찾고, Tag명이 App인걸 inner html로 한다?
);

reportWebVitals();
