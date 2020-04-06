import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushi: [],
    currentSushi: [],
    emptyPlates: [],
    wallet: 1000
  };

  componentDidMount = () => {
    this.fetchSushi();
  };

  isSushiEaten = sushi => {
    return this.state.emptyPlates.includes(sushi);
  };

  getNextSushi = () => {
    this.setState(
      prev => {
        return {
          allSushi: [
            ...prev.allSushi.slice(4),
            // ...prev.currentSushi.filter(sushi => !this.isSushiEaten(sushi))
            ...prev.currentSushi
          ],
          currentSushi: prev.allSushi.slice(0, 4)
        };
      },
      () => console.log(`There are ${this.state.allSushi.length} uneaten sushi in the kitchen, waiting for you`)
    );
  };

  eatSushi = sushi => {
    if (sushi.price <= this.state.wallet && !this.isSushiEaten(sushi)) {
      this.setState(prev => {
        return {
          emptyPlates: [...prev.emptyPlates, sushi],
          wallet: prev.wallet - sushi.price
        };
      });
    }
  };

  fetchSushi = () => {
    fetch(API)
      .then(res => res.json())
      .then(allSushi => {
        this.setState(
          {
            allSushi
          },
          this.getNextSushi
        );
      });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          onGetNextSushi={this.getNextSushi}
          isSushiEaten={this.isSushiEaten}
          sushi={this.state.currentSushi}
          onEatSushi={this.eatSushi}
          customerName="Hal"
        />
        <Table plates={this.state.emptyPlates} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;
