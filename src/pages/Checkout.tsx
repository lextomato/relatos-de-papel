import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  TextField,
  Grid,
  Typography,
  Divider,
  Button,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import AddressCard from "../components/Checkout/AdressCard/AddressCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeliveryCard from "../components/Checkout/DeliveryCard/DeliveryCard";
import SummaryCard from "../components/SummaryCard/SummaryCard";
import CreditCardForm from "../components/Checkout/CreditCardForm";
import { Address, Delivery } from "../interfaces/Checkout";
import { useCartContext } from "../context/CartContext";

const Checkout: React.FC = () => {
  const addresses: Address[] = [
    {
      address: "123 Calle Falsa, Springfield, USA",
      phone: "123-456-7890",
      label: "Casa",
    },
    {
      address: "456 Avenida Siempre Viva, Shelbyville, USA",
      phone: "987-654-3210",
      label: "Trabajo",
    },
    {
      address: "789 Boulevard de los Sueños, Capital City, USA",
      phone: "555-555-5555",
      label: "Otro",
    },
  ];

  const deliveries: Delivery[] = [
    {
      name: "Gratis",
      description: "Envío regular",
      time: "Entrega en 5 días",
    },
    {
      name: "$4.00",
      description: "Envío rápido",
      time: "Entrega en 1 día",
    },
  ];

  const { cart, clearCart } = useCartContext();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [selectedShipping, setShipping] = useState("");

  const [openDialogAddress, setOpen] = React.useState(false);
  const [formAddress, setFormAddress] = useState({
    address: "",
    phone: "",
    label: "",
  });
  const [editMode, setEditMode] = useState(false);

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [total, setTotal] = useState(subTotal);

  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleClickOpenDialogAddress = (address?: Address | null) => {
    if (address) {
      setEditMode(true);
      setFormAddress({
        address: address.address,
        phone: address.phone,
        label: address.label,
      });
    } else setEditMode(false);
    setOpen(true);
  };

  const handleCloseDialogAddress = () => {
    formAddress.address = "";
    formAddress.phone = "";
    formAddress.label = "";
    setOpen(false);
  };

  const steps = ["Dirección", "Envío", "Pago"];

  const handleSelectAddress = (address: Address) => {
    setSelectedAddress(address.address);
  };

  const handleSelectDelivery = (delivery: Delivery) => {
    setShipping(delivery.name);
    setTotal(delivery.name === "Gratis" ? subTotal : subTotal + 4);
  };

  const handleEditAddress = (address: Address) => {
    handleClickOpenDialogAddress(address);
    console.log(`Edit address: ${address}`);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handlePayment();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handlePayment = () => {
    alert("¡Pago realizado exitosamente!");
    clearCart();
    navigate("/books");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSaveAddress = () => {
    console.log(formAddress);
    setOpen(false);
  };

  const isDisabled =
    (activeStep === 0 && !selectedAddress) ||
    (activeStep === 1 && !selectedShipping);

  const routes = {
    "/books": "Books",
  };

  return (
    <>
      <Breadcrumbs routes={routes} />
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }} gutterBottom>
        Pago
      </Typography>
      <Stepper
        activeStep={activeStep}
        sx={{ p: 4, backgroundColor: "#FDF0E0", borderRadius: 2, mb: 2 }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mb: 2 }}>
        {activeStep === 0 && (
          <>
            <Grid container spacing={1}>
              {addresses.map((address) => (
                <Grid item xs={12} sm={12} md={12} key={address.address}>
                  <AddressCard
                    address={address.address}
                    phone={address.phone}
                    label={address.label}
                    selected={selectedAddress === address.address}
                    onSelect={() => handleSelectAddress(address)}
                    onEdit={() => handleEditAddress(address)}
                    onDelete={() => console.log("Delete address")}
                  />
                </Grid>
              ))}
            </Grid>
            <Divider
              variant="middle"
              sx={{ "&::before, &::after": { borderColor: "#000000" } }}
            >
              <IconButton onClick={() => handleClickOpenDialogAddress(null)}>
                <AddCircleIcon fontSize="large" sx={{ color: "#000000" }} />
              </IconButton>
            </Divider>
            <Box display="flex" justifyContent="center">
              <Typography variant="body2" sx={{ color: "#000000" }}>
                Añadir nueva dirección
              </Typography>
            </Box>
          </>
        )}
        {activeStep === 1 && (
          <>
            <Grid container spacing={1}>
              {deliveries.map((delivery) => (
                <Grid item xs={12} sm={12} md={12} key={delivery.name}>
                  <DeliveryCard
                    name={delivery.name}
                    description={delivery.description}
                    time={delivery.time}
                    selected={selectedShipping === delivery.name}
                    onSelect={() => handleSelectDelivery(delivery)}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {activeStep === 2 && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SummaryCard
                address={selectedAddress ?? ""}
                delivery={selectedShipping ?? ""}
                subTotal={subTotal}
                total={total}
                items={cart}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <CreditCardForm
                cardNumber={cardNumber}
                handleCardNumberChange={handleCardNumberChange}
                cvv={cvv}
                handleCvvChange={handleCvvChange}
                expiryDate={expiryDate}
                handleExpirationDateChange={handleExpiryDateChange}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#000000", mt: "auto" }}
                onClick={handlePayment}
              >
                Pagar
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
      <Box justifyContent="center" display="flex">
        {activeStep !== 0 && (
          <Button variant="outlined" sx={{ mr: 2 }} onClick={handleBack}>
            Atrás
          </Button>
        )}
        {activeStep !== steps.length - 1 && (
          <Button
            disabled={isDisabled}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Siguiente
          </Button>
        )}
      </Box>

      <Dialog open={openDialogAddress} onClose={handleCloseDialogAddress}>
        <DialogTitle>{editMode ? "Editar" : "Añadir"} Dirección</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para añadir una nueva dirección, por favor ingrese los datos a
            continuación.
          </DialogContentText>
          <TextField
            autoFocus
            required
            value={formAddress.address}
            name="address"
            onChange={handleInputChange}
            margin="dense"
            label="Dirección"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ ".MuiInputBase-root": { borderRadius: 3 } }}
          />
          <TextField
            required
            value={formAddress.phone}
            name="phone"
            onChange={handleInputChange}
            margin="dense"
            label="Teléfono"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ ".MuiInputBase-root": { borderRadius: 3 } }}
          />
          <TextField
            required
            value={formAddress.label}
            name="label"
            onChange={handleInputChange}
            margin="dense"
            label="Etiqueta"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ ".MuiInputBase-root": { borderRadius: 3 } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogAddress}>Cancelar</Button>
          <Button onClick={handleSaveAddress} variant="contained" type="submit">
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Checkout;
