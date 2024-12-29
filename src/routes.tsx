import { RouteObject } from "react-router-dom";
import Access from "./pages/Access";
import Home from "./pages/Home";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

export const ROUTES = {
  ACCESS: "/",
  HOME: "/books",
  ABOUT: "/about",
  BOOK_DETAIL: "/books/:id",
  CHECKOUT: "/checkout",
  NOT_FOUND: "*",
};

export const routes: RouteObject[] = [
  {
    path: ROUTES.ACCESS,
    element: <Access />,
  },
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
  },
  {
    path: ROUTES.BOOK_DETAIL,
    element: <BookDetail />,
  },
  {
    path: ROUTES.CHECKOUT,
    element: <Checkout />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];
