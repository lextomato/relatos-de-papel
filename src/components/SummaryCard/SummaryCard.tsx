import React from "react";
import "./SummaryCard.css";
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SummaryCardProps } from "../../interfaces/Global";

const SummaryCard: React.FC<SummaryCardProps> = ({
  address = "",
  delivery = "",
  subTotal,
  total,
  items,
  cartMode = false,
  onRemoveFromCart = () => {},
}) => {
  return (
    <Card variant="outlined" className="summary-card">
      <CardContent className="summary-card__content">
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Resumen del Pedido
        </Typography>
        {items.length === 0 && (
          <Typography variant="body1">
            No hay productos en el carrito
          </Typography>
        )}
        <List>
          {items.map((item) => (
            <ListItem key={item.id} sx={{ py: 0.5, px: 0 }}>
              <Card variant="outlined" className="summary-card__item">
                <CardContent className="summary-card__item-content">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="summary-card__item-image"
                  />
                  <ListItemText
                    primary={item.title}
                    secondary={`${item.author}`}
                    sx={{ maxWidth: "50%" }}
                    secondaryTypographyProps={{
                      style: { color: "#FDF0E0", fontSize: 12 },
                    }}
                  />
                  <Typography variant="body2">
                    <strong>{item.quantity}</strong> x ${item.price}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", ml: "auto" }}
                  >
                    ${item.price * item.quantity}
                  </Typography>

                  {cartMode && (
                    <IconButton
                      edge="end"
                      sx={{ color: "#FDF0E0" }}
                      onClick={() => onRemoveFromCart(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />

        {address && (
          <>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Dirección
            </Typography>
            <Typography sx={{ pl: 2 }}>{address}</Typography>
            <Divider sx={{ my: 2 }} />
          </>
        )}

        {delivery && (
          <>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Método de envío
            </Typography>
            <Typography sx={{ pl: 2 }}>{delivery}</Typography>
            <Divider sx={{ my: 2 }} />
          </>
        )}

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
            SubTotal
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>${subTotal}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" gutterBottom>
            Envío
          </Typography>
          <Typography sx={{ pl: 2 }}>
            ${delivery === "Gratis" || !delivery ? 0 : 4}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Total
          </Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
            ${total}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
