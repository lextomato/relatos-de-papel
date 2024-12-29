import { ReactNode } from "react";
import { Book } from "./Global";

export interface CartItem {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartContextProps {
  cart: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  clearCart: () => void;
}

export interface CartProps {
  open: boolean;
  onClose: () => void;
}

export interface CartProviderProps {
  children: ReactNode;
}
