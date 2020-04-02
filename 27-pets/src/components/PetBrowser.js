import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    return this.props.pets.map(currentPet => {
      return <Pet key={currentPet.id} pet={currentPet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    // console.log("%cPetBrowser render method", "color:green;")
    // console.log(this.props.pets)
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
