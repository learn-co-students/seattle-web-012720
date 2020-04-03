import React, { Component } from "react";

class Market extends Component {
  constructor() {
    console.log("%cMARKET CONSTRUCTED", "color:red;");
    super();
    this.state = {
      marketTrend: 0
    };
  }

  componentDidMount() {
    console.log("%cMARKET MOUNTED", "color:red;");
  }

  changeMarket = () => {
    this.setState(
      prevState => {
        let change = Math.random().toFixed(2) * 5;
        if (Math.random() > 0.5) {
          change *= -1;
        }
        return {
          marketTrend: (
            parseFloat(prevState.marketTrend) + parseFloat(change)
          ).toFixed(2)
        };
      },
      () => this.handleCloseMarket()
    );
  };

  handleCloseMarket = () => {
    this.props.onAdjustValue(100 + parseFloat(this.state.marketTrend));
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.props.onRunTimer();
    }, 1000)
  }

  // componentDidUpdate() {
  //   console.log("THERE WAS AN UPDATE");
  //   this.setState({
  //     marketTrend: this.state.marketTrend + 1
  //   });
  // }

  // shouldComponentUpdate(props, nextState) {
  //   return nextState.marketTrend == this.state.marketTrend+1;
  // }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.handleCloseMarket()
  }

  render() {
    console.log("%cMARKET RENDERED", "color:red;");

    return (
      <div
        className={`container ${
          this.state.marketTrend >= 0 ? "positive" : "negative"
        }`}
        style={{ color: "white" }}
      >
        <h2 onClick={this.changeMarket}>STOCK TICKER</h2>
        <h5>
          Stocks are {this.state.marketTrend >= 0 ? "rising" : "dropping"} by{" "}
          {this.state.marketTrend}%
        </h5>
      </div>
    );
  }
}

export default Market;
