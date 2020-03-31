import React from 'react'

// class Student extends React.Component {
//     render() {
//        return  <li>{this.props.student}</li>
//     }
// }

const Student = (props) => {
    return <li>{props.student.studentName}</li>;
}

export default Student