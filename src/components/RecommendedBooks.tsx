import React from "react";
import { Grid } from "@mui/material";
import ProductItem from "./ProductItem/ProductItem";
import { Book } from "../interfaces/Global";
import { useBooks } from "../hooks/useBooks";

const RecommendedBooks: React.FC = () => {
  const { books } = useBooks();
  const recommendedBooks: Book[] = books
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

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
