import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((prev) => [...prev, item]);

  const removeFromCart = (itemToRemove) =>
    setCart((prev) => prev.filter((item) => item.name !== itemToRemove.name));

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
