import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

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
    this.setState({course: course})
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
    this.props.dispatch(courseActions.createCourse(this.state.course));// NOT GOOD WAY
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
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
function mapStateToProps(state, ownProps) {
  return{
    courses: state.courses //reducer
  };
}


export default connect(mapStateToProps)(CoursesPage);
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // Ommiting mapDispatchToProps inject dispatch to props
