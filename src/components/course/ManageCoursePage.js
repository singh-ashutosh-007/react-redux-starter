import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context){
    super(props, context);
    // this.state = {};
  }

  render() {
    return (
      <div className="class-name">
        <h1> Manage Course</h1>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  //myProp: ProtoTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return { state, ownProps };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(courseActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
