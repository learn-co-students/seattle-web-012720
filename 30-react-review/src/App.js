import React, { Component } from "react";
import "./App.css";
import Buffet from "./components/Buffet";
import Plate from "./components/Plate";
import FOOD_ITEMS from "./FOOD.js";

class App extends Component {
  state = {
    buffetFood: FOOD_ITEMS.food, //this resolves to an array of objects with "name" and "image" props
    plateFood: [],
    nextId: 1
  };

  // componentDidMount() {

  // }

  addFoodToPlate = newFood => {
    this.setState(prev => {
      return {
        plateFood: [...prev.plateFood, {...newFood, id:prev.nextId}],
        nextId: prev.nextId+1
      }
    })
  }

  eatFood = eatenFood => {
    this.setState(prev => {
      return {
        plateFood: prev.plateFood.filter((thisFood) => thisFood !== eatenFood),
      };
    })
  }

  render() {
    return (
      <div className="App">
        <h3>Welcome to the All-You-Can-Eat Buffet</h3>
        <Buffet food={this.state.buffetFood} onActivateFood={this.addFoodToPlate}/>
        <Plate food={this.state.plateFood} onActivateFood={this.eatFood}/>
      </div>
    );
  }
}

export default App;
