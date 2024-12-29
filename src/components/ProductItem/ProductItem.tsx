import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./productItem.css";
import { ProductItemProps } from "../../interfaces/Global";

const ProductItem: React.FC<ProductItemProps> = ({ book }) => {
  const navigate = useNavigate();

  const handleBookClick = (id: string) => {
    navigate(`/books/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Button
      onClick={() => handleBookClick(book.id)}
      sx={{ padding: 0, textAlign: "left", textTransform: "none" }}
    >
      <Card className="product-item">
        <div className="product-item__image">
          <CardMedia
            component="img"
            height="300"
            image={book.image}
            alt={book.title}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
            className="product-item__price"
          >
            ${book.price}
          </Typography>
        </div>
        <CardContent className="product-item__content">
          <Typography gutterBottom variant="body2" component="div">
            {book.title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {book.author}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
};

export default ProductItem;
