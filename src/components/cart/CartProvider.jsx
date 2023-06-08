import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const indexToRemove = prevItems.findIndex(
        (item) => item.id === productId
      );

      if (indexToRemove === -1) {
        return prevItems;
      }

      const updatedItems = [...prevItems];
      updatedItems.splice(indexToRemove, 1);
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartSize = cartItems.length;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    updateCartItems,
    cartSize,
    setCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
