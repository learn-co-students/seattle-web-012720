import React from "react";
import Student from './Student';
import { connect } from "react-redux"; 

class StudentsBrowser extends React.Component {
  renderStudents = () => {
    return this.props.studentList.map((student, index) => {
        return <Student key={index} student={student}/>
    })
  };

  render() {
    return (
      <ul>
        {this.renderStudents()}
      </ul>
    );
  }
}

// StudentsBrowser.defaultProps = {
//   studentList: []
// }

const mapStateToProps = state => {
  return {
    studentList: state.student.data
  }
}

export default connect(mapStateToProps)(StudentsBrowser);
