import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
// import store from "./store";
import showResults from "./showResults";
import WizardForm from "./WizardForm";

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import toastr from 'toastr';
import { Link, withRouter } from 'react-router-dom';


class WizardFormPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      // course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
  }

  render() {
    return (
      <div style={{ padding: 15 }}>
        <h2>Wizard Example</h2>
        <WizardForm onSubmit={showResults} />
        <Values form="wizard" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(courseActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardFormPage);
// export default WizardFormPage;
