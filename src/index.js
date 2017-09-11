// console.log("hi");
/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // Provider attaches store to a react container component

import './styles/styles.css'; //Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import App from './components/App';

import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('rct-app')
);
