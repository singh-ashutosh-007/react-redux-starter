import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: {title: ""}
    };

    this.onTitleChange  = this.onTitleChange.bind(this);
    this.onClickSave    = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    // alert(`Saving ${this.state.course.title}`);
    // this.props.dispatch(courseActions.createCourse(this.state.course));// NOT GOOD WAY
    this.props.actions.createCourse(this.state.course);// GOOD WAY
  }

  courseRow(course, index) {
    return (
      <div key={index}> {course.title} </div>
    );
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired, // required when Ommiting mapDispatchToProps
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  // createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return{
    courses: state.courses //reducer
  };
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators({reducer}, dispatch)
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}


// export default connect(mapStateToProps)(CoursesPage); // Ommiting mapDispatchToProps inject dispatch to props
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
