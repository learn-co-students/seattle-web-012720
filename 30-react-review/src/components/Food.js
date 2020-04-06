import React, { Component } from "react";

class Food extends Component {


  handleClickFood = () => {
    this.props.onActivateFood(this.props.food);
  }

  render() {

    const {name, image} = this.props.food;

    return (
      <div className="col col-md-2">
        <div className="card" onClick={this.handleClickFood}>
        {/* <div
          className="card"
          onClick={() => this.props.onActivateFood(this.props.food)}
        > */}
          {/* IMAGE BELOW */}
          <img src={image} className="card-img-top" />
          <div className="card-body">
            <p>{name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Food;
