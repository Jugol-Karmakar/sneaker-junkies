import React from "react";
import "./Details.css";

const Details = (props) => {
  const { name, image } = props.cart;
  return (
    <div className="product-details">
      <img src={image} alt="" />
      <h4 className="title">{name}</h4>
    </div>
  );
};

export default Details;
