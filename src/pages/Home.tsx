import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Pagination,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductItem from "../components/ProductItem/ProductItem";
import Breadcrumbs from "../components/Breadcrumbs";
import Search from "../components/Search/Search";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import { Book } from "../interfaces/Global";
import { useFilteredBooks } from "../hooks/useFilteredBooks";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const Home: React.FC = () => {
  const [filterOptions, setFilterOptions] = useState({
    category: "",
    title: "",
  });
  const { books, aggs, loading, error } = useFilteredBooks(filterOptions);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setFilterOptions((prev) => ({ ...prev, title: searchTerm }));
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  useEffect(() => {
    // En este ejemplo simplemente asignamos los libros recibidos
    setFilteredBooks(books);
    setCurrentPage(1); // opcional: reiniciar la página cuando cambian los datos
  }, [books]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePageChange = (_: React.ChangeEvent<any>, value: number) => {
    setCurrentPage(value);
  };

  // Función para limpiar todos los filtros
  const handleClearFilters = () => {
    setFilterOptions({ category: "", title: "" });
    setSearchTerm("");
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const routes = {
    "/books": "Books",
  };

  if (loading) return <p>Cargando libros...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Breadcrumbs routes={routes} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="body1">Filtros</Typography>
            <Tooltip title="Limpiar filtros">
              <IconButton
                onClick={handleClearFilters}
                color="warning"
                size="small"
              >
                <CleaningServicesIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Search
            label="Título"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Typography sx={{ mt: 2 }} variant="h6" color="primary">
            Categorías
          </Typography>
          {/* Renderizamos los botones de categorías si aggs está definido */}
          {aggs &&
            Array.isArray(aggs) &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            aggs.map((agg: any) => (
              <CategoryButton
                key={agg.key}
                categoryName={agg.key}
                count={agg.count}
                onClick={() =>
                  setFilterOptions((prev) => ({ ...prev, category: agg.key }))
                }
              />
            ))}
          {/* También puedes visualizar los datos de agregación para depuración */}
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
