import React, { Component } from "react";

const INITIAL_STATE = {
  studentName: "",
  enrolled: true
};

class StudentForm extends Component {
  state = INITIAL_STATE;

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddStudent(this.state);
    this.setState(INITIAL_STATE);
  };

  handleChange = event => {
    // console.log(event.target.value);
    // if (event.target.value.includes("1")) {
    //   alert("No numbers!");
    // } else {
    this.setState({
      [event.target.name]: event.target.value
    });
    // }
  };

  render() {
    return (
      <div>
        <h3>Add a new student</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="label-class" htmlFor="studentName">
            New Student Name:
          </label>
          <input
            type="text"
            name="studentName"
            value={this.state.studentName}
            onChange={this.handleChange}
            placeholder="please enter a name"
          />
          <button type="submit">Add Student</button>
        </form>
      </div>
    );
  }
}

export default StudentForm;
