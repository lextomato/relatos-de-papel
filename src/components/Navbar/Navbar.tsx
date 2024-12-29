import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Cart from "../Cart/Cart";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { useCartContext } from "../../context/CartContext";

const Navbar: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCartContext();

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <AppBar className="navbar" position="sticky" color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            component={Link}
            to="/"
            sx={{ padding: 0, marginRight: 1 }}
          >
            <img src={Logo} alt="logo" className="navbar__logo" />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Relatos de papel
          </Typography>
          <IconButton component={Link} to="/" color="inherit">
            <HomeOutlinedIcon className="icon__color" fontSize="large" />
          </IconButton>
          <IconButton component={Link} to="/books" color="inherit">
            <BookOutlinedIcon className="icon__color" fontSize="large" />
          </IconButton>
          <IconButton color="inherit" onClick={toggleCart}>
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartOutlinedIcon
                className="icon__color"
                fontSize="large"
              />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <PersonOutlineOutlinedIcon
              className="icon__color"
              fontSize="large"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Cart open={cartOpen} onClose={toggleCart} />
    </>
  );
};

export default Navbar;
