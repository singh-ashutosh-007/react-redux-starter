import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.updateCourseState  = this.updateCourseState.bind(this);
    this.saveCourse         = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id != nextProps.course.id){
      //Necessary to populate form when existing course load directly
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect_to_courses());
  }

  redirect_to_courses(){
    this.context.router.history.push('/courses');
  }


  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange = {this.updateCourseState}
        onSave = {this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  //myProp: ProtoTypes.string.isRequired
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// you need to specify the context type so that it
// is available within the component
ManageCoursePage.contextTypes = {
  // history: React.PropTypes.shape({
  //   push: React.PropTypes.func.isRequired
  // })
  router: PropTypes.object.isRequired
};
function getCourseById(courses, id){
  const course = courses.filter(course => course.id == id);
  if (course) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  const courseId = ownProps.match.params.id; // from the path
  if (courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }

  const authorFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(courseActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
