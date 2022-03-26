import React from "react";
import Details from "../Details/Details";
import "./Cart.css";

const Cart = (props) => {
  const { cartAdd } = props;

  const cartClearHandel = () => {
    console.log("clicked");
  };

  return (
    <div className="cart">
      <h3 className="order-title">Order Summary</h3>
      {cartAdd.map((cart) => (
        <Details cart={cart} key={cart.id}></Details>
      ))}

      <div className="select-btn">
        <button className="choose-btn">Choose 1 For Me</button>
        <button onClick={cartClearHandel} className="again-btn">
          Choose Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
