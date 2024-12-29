import React from "react";
import { Card, CardContent, Typography, Radio, Box, Chip } from "@mui/material";
import "./DeliveryCard.css";
import { DeliveryCardProps } from "../../../interfaces/Checkout";

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  name,
  description,
  time,
  selected,
  onSelect,
}) => {
  return (
    <Card
      variant="outlined"
      className="delivery-card"
      sx={{
        borderColor: selected ? "primary.main" : "grey.300",
      }}
    >
      <CardContent className="delivery-card__content">
        <Box className="delivery-card__content-input">
          <Radio
            checked={selected}
            onChange={onSelect}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
        </Box>
        <Box sx={{ minWidth: 100, mr: 2 }}>
          <Typography variant="body1">{name}</Typography>
        </Box>
        <Box sx={{ minWidth: 100, mr: 2 }}>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <Chip label={time} color="primary" sx={{ ml: "auto" }} />
      </CardContent>
    </Card>
  );
};

export default DeliveryCard;
