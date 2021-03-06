// <ul>
//  <li>Clarion</li>
//  <li>Jonny</li>
//  <li>Joe</li>
// </ul>
import React from "react";
import Student from './Student'

class StudentsBrowser extends React.Component {
  renderStudents = () => {
    return this.props.studentList.map(student => {
        return <Student student={student}/>
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

export default StudentsBrowser;
