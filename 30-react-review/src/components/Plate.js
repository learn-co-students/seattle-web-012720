import React, { Component } from "react";
import Food from "./Food";

class Plate extends Component {

  renderFood = () => {
    return this.props.food.map(thisFood => {
      return <Food food={thisFood} key={thisFood.id} onActivateFood={this.props.onActivateFood}/> 
    })
  }

  render() {
    return (
      <div className="container jumbotron">
        <h4>PLATE CONTENTS</h4>
        <div className="row">{this.renderFood()}</div>
      </div>
    );
  }
}

export default Plate;
