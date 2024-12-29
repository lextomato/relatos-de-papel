import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import "./LatestReviews.css";

const LatestReviews: React.FC = () => {
  const reviews = [
    {
      rating: 5,
      title: "¡Producto excelente!",
      content: "Me encanta este producto. ¡Ha cambiado mi vida!",
      author: "Juan Pérez",
      date: "2023-10-01",
      avatar: "https://via.placeholder.com/50",
    },
    {
      rating: 4,
      title: "Muy bueno",
      content: "Este producto es muy bueno, pero hay margen de mejora.",
      author: "Ana García",
      date: "2023-09-15",
      avatar: "https://via.placeholder.com/50",
    },
    {
      rating: 3,
      title: "Regular",
      content:
        "Es un producto regular. No está mal, pero tampoco es excelente.",
      author: "Luis Martínez",
      date: "2023-08-20",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <>
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <StarTwoToneIcon key={index} />
          ) : (
            <StarBorderIcon key={index} sx={{ color: "#8e8e8e" }} />
          )
        )}
      </>
    );
  };

  return (
    <Box className="latest-reviews" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Últimas reseñas
      </Typography>
      <Grid container spacing={2}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <div className="latest-reviews__item">
              <div className="latest-reviews__rating">
                {renderStars(review.rating)}
              </div>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                className="latest-reviews__title"
              >
                {review.title}
              </Typography>
              <Typography variant="body2" className="latest-reviews__text">
                {review.content}
              </Typography>
              <Box className="latest-reviews__author" sx={{ mt: 2 }}>
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="latest-reviews__avatar"
                />
                <div>
                  <Typography
                    variant="body2"
                    className="latest-reviews__author"
                  >
                    {review.author}
                  </Typography>
                  <Typography variant="body2" className="latest-reviews__date">
                    {new Date(review.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </div>
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestReviews;
