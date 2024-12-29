import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Rating,
  InputBase,
} from "@mui/material";
import "./PublishReview.css";

const PublishReview: React.FC = () => {
  const [review, setReview] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review:", review);
    console.log("Author:", author);
    setReview("");
    setAuthor("");
  };

  return (
    <Container
      sx={{ py: 4, backgroundColor: "#FDF0E0", mt: 6, borderRadius: 2 }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Publicar una Reseña
      </Typography>
      <Box className="publish-review" mt={2}>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <Rating
              name="simple-controlled"
              size="large"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
          <Box mb={2}>
            <Typography sx={{ mt: 2 }} variant="body1">
              Título de reseña
            </Typography>
            <div className="publish-review__input">
              <InputBase
                placeholder="Excelente libro.."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="publish-review__input-base"
              />
            </div>
          </Box>
          <Box mb={2}>
            <Typography sx={{ mt: 2 }} variant="body1">
              Reseña
            </Typography>
            <div className="publish-review__input">
              <InputBase
                placeholder="Me gusto la tematica.."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="publish-review__input-base"
                multiline
                rows={4}
              />
            </div>
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ textTransform: "none", px: 10 }}
            >
              Publicar
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default PublishReview;
