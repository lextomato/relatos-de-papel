import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Box, Grid } from "@mui/material";
import fondoAccess from "../assets/fondo-access.png";

const Access: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/books");
    }, 5000); // Redirige después de 5 segundos

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  const handleEnter = () => {
    navigate("/books");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      textAlign="center"
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" gutterBottom>
            Bienvenido a
          </Typography>
          <Typography variant="h2" gutterBottom>
            <strong>Relatos de Papel</strong>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Explora y compra tus libros favoritos
          </Typography>
          <Typography variant="body1" gutterBottom>
            Serás redirigido en {seconds} segundos...
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleEnter}>
            Entrar Ahora
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          container
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={fondoAccess}
            alt="books"
            style={{
              width: "50%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          <img
            src={fondoAccess}
            alt="books"
            style={{
              width: "50%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Access;
