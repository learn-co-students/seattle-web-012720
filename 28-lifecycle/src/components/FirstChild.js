import React from 'react'

class FirstChild extends React.Component {
  constructor() {
    console.log("%cFIRST CHILD CONSTRUCTED", "color:blue;");

    super();
    this.state = {
      information: true
    };
  }

  componentDidMount() {
    console.log("%cFIRST CHILD MOUNTED", "color:blue;");
  }

  // shouldComponentUpdate(nextProps, state) {
  //     return nextProps.myValue%10 == 0;
  // }

  render() {
    console.log("%cFIRST CHILD RENDERED", "color:blue;");

    return (
      <div>
        <h2>FIRST CHILD</h2>
        <h3>{this.props.myValue}</h3>
      </div>
    );
  }
}

export default FirstChild