import React from "react";
import { Grid } from "@mui/material";
import ProductItem from "./ProductItem/ProductItem";
import { Book } from "../interfaces/Global";

const recommendedBooks: Book[] = [
  {
    id: "1",
    title: "El Quijote",
    author: "Miguel de Cervantes",
    price: 20,
    image: "https://dummyimage.com/300x350",
  },
  {
    id: "2",
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    price: 25,
    image: "https://dummyimage.com/300x350",
  },
  {
    id: "3",
    title: "La Odisea",
    author: "Homero",
    price: 15,
    image: "https://dummyimage.com/300x350",
  },
  {
    id: "4",
    title: "1984",
    author: "George Orwell",
    price: 18,
    image: "https://dummyimage.com/300x350",
  },
];

const RecommendedBooks: React.FC = () => {
  return (
    <>
      <h2>Libros recomendados</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Grid container spacing={4}>
            {recommendedBooks.map((book) => (
              <Grid item xs={12} sm={6} md={3} key={book.id}>
                <ProductItem book={book} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RecommendedBooks;
