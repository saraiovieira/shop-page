"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  market_prices: {
    full_price: number;
  };
  productPackaging: {
    url: string;
  };
}

interface CartContextValue {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export default function CartProvider({
  children,
}: CartProviderProps): React.ReactNode {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const saveCartToLocalStorage = (cart: CartItem[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.id === productId
      );

      if (existingItemIndex !== -1) {
        if (updatedCart[existingItemIndex].quantity > 1) {
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: updatedCart[existingItemIndex].quantity - 1,
          };
        } else {
          updatedCart.splice(existingItemIndex, 1);
        }
      }
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
