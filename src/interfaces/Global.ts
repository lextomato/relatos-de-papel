import { CartItem } from "./Cart";

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
}

export interface ProductItemProps {
  book: Book;
}

export interface SearchProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SummaryCardProps {
  address?: string;
  delivery?: string;
  subTotal: number;
  total: number;
  items: CartItem[];
  cartMode?: boolean;
  onRemoveFromCart?: (id: string) => void;
}

export interface BreadcrumbsProps {
  routes: { [key: string]: string };
}
