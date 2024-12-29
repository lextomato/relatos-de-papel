import React from "react";
import {
  Drawer,
  IconButton,
  Typography,
  Button,
  Divider,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import SummaryCard from "../SummaryCard/SummaryCard";
import { CartProps } from "../../interfaces/Cart";
import { useCartContext } from "../../context/CartContext";

const Cart: React.FC<CartProps> = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCartContext();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div
        style={{ width: window.innerWidth < 600 ? "100vw" : 500, padding: 16 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Carrito</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <SummaryCard
          address=""
          delivery=""
          subTotal={subTotal}
          total={subTotal}
          items={cart}
          cartMode
          onRemoveFromCart={removeFromCart}
        />
        <Divider sx={{ my: 2 }} />
        {cart.length > 0 && (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="outlined" fullWidth onClick={clearCart}>
              Vaciar Carrito
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#000000", color: "white" }}
              fullWidth
              onClick={handleCheckout}
            >
              Proceder al Pago
            </Button>
          </Box>
        )}
      </div>
    </Drawer>
  );
};

export default Cart;
