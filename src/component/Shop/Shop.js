import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartAdd, setCartAdd] = useState([]);
  useEffect(() => {
    fetch("shopping.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCartAdd = [...cartAdd, product];
    setCartAdd(newCartAdd);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            addToCart={addToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cartAdd={cartAdd}></Cart>
      </div>
    </div>
  );
};

export default Shop;
