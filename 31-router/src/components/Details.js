import React from "react";
// import {Link} from 'react-router-dom'

class Details extends React.Component {

getGlasses = () => {
    const id = this.props.match.params.id;
    let foundGlasses ={image: "", style: "", maker: ""}
    for (let glasses of this.props.glasses) {
        if (glasses.id == id) {
            foundGlasses = glasses
        }
    }
    return foundGlasses
}

handleBackToGlasses = () => {
  console.log("marty, we're going back");
  this.props.history.push("/glasses");
}

  render() {
    // setTimeout(() => {
    //   this.props.history.push("/manager")
    // }, 2500)
    const {image, style, maker} = this.getGlasses()
    return (
      <>
        {" "}
        <img className="card-img-top" src={image} />
        <div classNamer="card-body">
          <h3>{style}</h3>
          <h4>{maker}</h4>
        </div>
        {/* <Link to="/glasses"><button>Back to Glasses</button></Link> */}
        <button onClick={this.handleBackToGlasses}>Back to Glasses</button>
      </>
    );
  }
}

export default Details;
