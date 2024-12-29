import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes";
import "./App.css";
import { BooksProvider } from "./context/BooksContext";
import { CartProvider } from "./context/CartContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <BooksProvider>
        <Router>
          <MainLayout>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </MainLayout>
        </Router>
      </BooksProvider>
    </CartProvider>
  );
};

export default App;
