import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  changeType = newType => {
    this.setState({
      filters: { type: newType }
    });
  };

  adoptPet = petId => {
    this.setState(prevState => {
      return {
        pets: prevState.pets.map(currentPet => {
          console.log("Now evaluating " + currentPet.name);
          if (currentPet.id !== petId) {
            return currentPet;
          } else {
            console.log("Found " + currentPet.name + " and adopting them");
            //BELOW AND EXAMPLE OF HOW THIS WOULD WORK TO UPDATE THE BACKEND IF IT WERE REAL
            // fetch("/api/pets/adopt", {method:"POST"}, headers, body:{pet_id: currentPet.id})
            return { ...currentPet, isAdopted: true };
          }
        })
      };
    });
  };

  fetchPets = () => {
    const PETS_API = "/api/pets";
    const FILTER_TYPE = this.state.filters.type;
    fetch(`${PETS_API}${FILTER_TYPE !== "all" ? "?type=" + FILTER_TYPE : ""}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        });
      });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changeType}
                onFindPets={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
