import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, image, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h4>Price : {price}</h4>
        <p>Rating : {ratings}</p>
      </div>
      <button className="cart-btn">
        <p className="cart-text">Add To Cart</p>
        <FontAwesomeIcon
          className="icon"
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
