import React, { useState, useEffect } from "react";
import { Pagination, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductItem from "../components/ProductItem/ProductItem";
import Breadcrumbs from "../components/Breadcrumbs";
import Search from "../components/Search/Search";
import { useBooks } from "../hooks/useBooks";
import { Book } from "../interfaces/Global";

const Home: React.FC = () => {
  const { books } = useBooks();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  useEffect(() => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const routes = {
    "/books": "Books",
  };

  return (
    <>
      <Breadcrumbs routes={routes} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography sx={{ mt: 2 }} variant="body1">
            Filtros
          </Typography>
          <Search
            label="Título"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography sx={{ mt: 2, mb: 2 }} variant="body1">
            Libros <strong>{books.length}</strong>
          </Typography>
          <Grid container spacing={4}>
            {currentBooks.map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book.id}>
                <ProductItem book={book} />
              </Grid>
            ))}
          </Grid>
          <Grid container justifyContent="center" sx={{ padding: 2 }}>
            <Stack>
              <Pagination
                count={Math.ceil(filteredBooks.length / booksPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ mt: 2 }}
                shape="rounded"
                color="primary"
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
