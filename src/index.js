// console.log("hi");
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './styles/styles.css'; //Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

render(
  <App />, document.getElementById('rct-app')
);
