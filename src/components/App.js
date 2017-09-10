//This component handels the app template used on every page

import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import RoutingConfig from '../routes';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="container-fluid">
          <Header
            loading={this.props.loading}
          />
          <RoutingConfig/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  // children: PropTypes.object.isRequired
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return{
    loading: state.ajaxCallsInProgress > 0
  };
}

// export default App;
export default connect(mapStateToProps)(App);
