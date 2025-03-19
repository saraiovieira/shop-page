"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const saveCartToLocalStorage = (cart) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );

      const existingItem = updatedCart[existingItemIndex];

      if (existingItem) {
        const updatedItem = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        updatedCart[existingItemIndex] = updatedItem;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const updateItemQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === productId
      );

      let updatedItem = { ...updatedCart[updatedItemIndex] };
      updatedItem.quantity += quantity;

      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};