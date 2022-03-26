import React from "react";
import "./Details.css";

const Details = (props) => {
  const { name, image } = props.cart;
  return (
    <div className="product-details">
      <img src={image} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Details;
