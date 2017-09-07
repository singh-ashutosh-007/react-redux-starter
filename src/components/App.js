//This component handels the app template used on every page

import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import RoutingConfig from '../routes';
class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="container-fluid">
          <Header/>
          <RoutingConfig/>
        </div>
      </Router>
    );
  };
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
