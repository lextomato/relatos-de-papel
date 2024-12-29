import React from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs";
import LatestReviews from "../components/LatestReviews/LatestReviews";
import RecommendedBooks from "../components/RecommendedBooks";
import PublishReview from "../components/PublishReview/PublishReview";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useBooks } from "../hooks/useBooks";
import { useCartContext } from "../context/CartContext";

const BookDetail: React.FC = () => {
  const { books } = useBooks();
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCartContext();

  const book = books.find((b) => b.id === id);

  if (!book) {
    return <Typography variant="h4">Libro no encontrado</Typography>;
  }

  const handleAddToCart = () => {
    addToCart(book);
  };

  const routes = {
    "/books": "Books",
  };

  return (
    <>
      <Breadcrumbs routes={routes} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="450"
              image={book.image}
              alt={book.title}
            />
          </Card>
        </Grid>
        <Grid position="relative" item xs={12} md={6}>
          <CardContent>
            <Tooltip title="Guardar en favoritos" placement="top" arrow>
              <IconButton
                size="large"
                color="primary"
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 0,
                }}
              >
                <FavoriteBorderOutlinedIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Typography variant="h4" gutterBottom>
              {book.title}
            </Typography>
            <Chip
              label="Aventura"
              sx={{ backgroundColor: "#c3fdd5", color: "#007c26", mr: 1 }}
            />
            <Chip
              label="Ficción"
              sx={{ backgroundColor: "#c3fdd5", color: "#007c26", mr: 1 }}
            />

            <Typography
              variant="h3"
              sx={{ fontWeight: "bold" }}
              color="text.primary"
              gutterBottom
            >
              ${book.price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Autor: {book.author}
            </Typography>
            <Typography variant="body1" paragraph>
              {/* Aquí puedes agregar una descripción del libro */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
              fullWidth
            >
              Añadir al Carrito
            </Button>
          </CardContent>
        </Grid>
      </Grid>
      <LatestReviews />
      <RecommendedBooks />
      <PublishReview />
    </>
  );
};

export default BookDetail;
