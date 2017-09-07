// console.log("hi");
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // Provider attaches store to a react container component

import './styles/styles.css'; //Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

import {loadCourses} from './actions/courseActions';

const store = configureStore();
store.dispatch(loadCourses());
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('rct-app')
);
