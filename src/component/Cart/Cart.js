import React from "react";
import Details from "../Details/Details";
import "./Cart.css";

const Cart = (props) => {
  const { cartAdd } = props;

  return (
    <div className="cart">
      <h3 className="order-title">Order Summary</h3>
      {cartAdd.map((cart) => (
        <Details cart={cart} key={cart.id}></Details>
      ))}

      <div className="select-btn">
        <button className="choose-btn">Choose For 1</button>
        <button className="again-btn">Choose Again</button>
      </div>
    </div>
  );
};

export default Cart;
