import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () => {
    return props.sushi.map(thisSushi => {
      return (
        <Sushi
          key={thisSushi.id}
          sushi={thisSushi}
          onEatSushi={props.onEatSushi}
          eaten={props.isSushiEaten(thisSushi)}
        />
      );
    });
  }

  return (
    <Fragment>
      <div className="belt">
    {/* <h1>Welcome {props.customerName}</h1> */}
        {
        renderSushi()
        }
        <MoreButton onGetNextSushi={props.onGetNextSushi} />
      </div>
    </Fragment>
  );
}

// SushiContainer.displayName="ConveyorBelt"

// SushiContainer.defaultProps = {
//   customerName: "John"
// }

// SushiContainer.propTypes = {
//   sushi: PropTypes.number
// }

export default SushiContainer