import React, { createContext } from "react";
import useCart from "../hooks/useCart";
import { CartContextProps, CartProviderProps } from "../interfaces/Cart";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
