import React, { Fragment } from "react";

const Sushi = props => {
  const { img_url, name, price } = props.sushi;

  const handleEatSushi = () => {
    props.onEatSushi(props.sushi);
  };

  return (
    <div className="sushi">
      {/* Tell me if this sushi has been eaten! */

      props.eaten ? (
        <div className="no-plate"></div>
      ) : (
        <div className="plate" onClick={handleEatSushi}>
          <img src={img_url} width="100%" />
        </div>
      )}
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
