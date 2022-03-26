import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartAdd, setCartAdd } = props;

  const handelClear = () => {
    setCartAdd([]);
  };

  const handelRandom = () => {
    const random = Math.floor(Math.random() * cartAdd.length + 1);
    const randomNum = cartAdd[random];
    setCartAdd([randomNum]);
  };

  return (
    <div className="cart">
      <h3 className="order-title">Order Summary</h3>
      {cartAdd.slice(0, 5).map((cart) => (
        <div className="product-details">
          <img src={cart.image} />
          <h4>{cart.name}</h4>
        </div>
      ))}

      <div className="select-btn">
        <buttonn onClick={handelRandom} className="choose-btn">
          Choose For 1
        </buttonn>
        <button onClick={handelClear} className="again-btn">
          Choose Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
