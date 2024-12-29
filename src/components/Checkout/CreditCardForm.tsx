import React from "react";
import {
  Box,
  Typography,
  OutlinedInput,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import ContactlessOutlinedIcon from "@mui/icons-material/ContactlessOutlined";
import { yellow } from "@mui/material/colors";
import { CreditCardFormProps } from "../../interfaces/Checkout";

const CreditCardForm: React.FC<CreditCardFormProps> = ({
  cardNumber,
  handleCardNumberChange,
  cvv,
  handleCvvChange,
  expiryDate,
  handleExpirationDateChange,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#000000",
          color: "white",
          p: 2,
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle2">Tarjeta de Crédito</Typography>
          <CreditCardRoundedIcon sx={{ color: "text.secondary" }} />
        </Box>
        <Box>
          <SimCardRoundedIcon
            sx={{
              fontSize: { xs: 48, sm: 56 },
              transform: "rotate(90deg)",
              color: yellow[800],
            }}
          />
          <ContactlessOutlinedIcon
            sx={{
              fontSize: { xs: 48, sm: 56 },
              color: "white",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel htmlFor="card-number" sx={{ color: "grey" }} required>
              Número de tarjeta
            </FormLabel>
            <OutlinedInput
              sx={{ color: "white" }}
              id="card-number"
              autoComplete="card-number"
              placeholder="0000 0000 0000 0000"
              required
              size="small"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </Box>
          <Box sx={{ maxWidth: "20%" }}>
            <FormLabel htmlFor="cvv" sx={{ color: "grey" }} required>
              CVV
            </FormLabel>
            <OutlinedInput
              sx={{ color: "white" }}
              id="cvv"
              autoComplete="CVV"
              placeholder="123"
              required
              size="small"
              value={cvv}
              onChange={handleCvvChange}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <FormLabel htmlFor="card-name" sx={{ color: "grey" }} required>
              Nombre en la tarjeta
            </FormLabel>
            <OutlinedInput
              sx={{ color: "white" }}
              id="card-name"
              autoComplete="card-name"
              placeholder="John Smith"
              required
              size="small"
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <FormLabel
              htmlFor="card-expiration"
              sx={{ color: "grey" }}
              required
            >
              Fecha de expiración
            </FormLabel>
            <OutlinedInput
              sx={{ color: "white" }}
              id="card-expiration"
              autoComplete="card-expiration"
              placeholder="MM/YY"
              required
              size="small"
              value={expiryDate}
              onChange={handleExpirationDateChange}
            />
          </Box>
        </Box>
      </Box>
      <FormControlLabel
        control={<Checkbox name="saveCard" />}
        label="Recordar tarjeta para futuras compras"
      />
    </Box>
  );
};

export default CreditCardForm;
