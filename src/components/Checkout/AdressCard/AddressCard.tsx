import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Radio,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./AddressCard.css";
import { AddressCardProps } from "../../../interfaces/Checkout";

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  phone,
  label,
  selected,
  onSelect,
  onEdit,
  onDelete,
}) => {
  return (
    <Card
      variant="outlined"
      className="address-card"
      sx={{
        borderColor: selected ? "primary.main" : "grey.300",
      }}
    >
      <CardContent className="address-card__content">
        <Box className="address-card__content-input">
          <Radio
            checked={selected}
            onChange={onSelect}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
        </Box>
        <Box sx={{ minWidth: 350, mr: 2 }}>
          <Typography variant="body1">{address}</Typography>
          <Typography variant="body1">Telefono: {phone}</Typography>
        </Box>
        <Chip label={label} color="primary" />
        <Grid container spacing={2} className="address-card__actions">
          <Grid item>
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
