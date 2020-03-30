import React from "react";
import StudentsBrowser from "./components/StudentsBrowser"


class App extends React.Component {

    state = {
        students: ["Clarion", "Jonny", "Joe", "Aiden", "Zeb", "David"],
        students2: ["Diana", "Chris", "Matt", "Lief"]
    }

  render() {
    return (
      <div>
        <h1>Hello 012720 from App Component</h1>
        <StudentsBrowser studentList={this.state.students} />
        <StudentsBrowser studentList={this.state.students2} />  
      </div>
    );
  }
}

export default App;
