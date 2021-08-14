import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './styles/global';
import { createBrowserHistory } from "history";
import Navbar from './components/Navbar';
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Navbar />
    <App />
    <GlobalStyle />
  </Router>,
  document.getElementById('root')
);
