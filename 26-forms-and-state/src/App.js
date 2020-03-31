import React from "react";
import StudentsBrowser from "./components/StudentsBrowser";
import StudentForm from "./components/StudentForm";

class App extends React.Component {
  state = {
    students: [
      { studentName: "Kailana", enrolled: true },
      { studentName: "Jack", enrolled: true }
    ],
    safeBool: true
  };

  addStudent = student => {
    //   alert(student)
    console.log("adding student");
    // this.state.students.push(student)

    this.setState({ students: [...this.state.students, student] });

    // this.setState(
    //   prevState => {
    //     return {
    //       students: [student, ...prevState.students]
    //     };
    //   },
    //   () => console.log(this.state)
    // );
  };

  render() {
    return (
      <div>
        <h1>Hello 012720 from App Component</h1>
        <StudentForm onAddStudent={this.addStudent} />
        <StudentsBrowser studentList={this.state.students} />
      </div>
    );
  }
}

export default App;
