import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, image, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <p>Rating : {ratings}</p>
      </div>
    </div>
  );
};

export default Product;
