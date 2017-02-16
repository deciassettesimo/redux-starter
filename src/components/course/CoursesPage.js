import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coursesActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  // 1. Constructor - init state and bind functions
  constructor(props, context) {
    super(props, context);
  }

  // 3. Render function
  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

// 4. Prop Types
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

// 5. Redux connect functions and export component
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coursesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);