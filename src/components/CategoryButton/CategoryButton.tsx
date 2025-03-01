import React from "react";
import { Chip } from "@mui/material";
import "./CategoryButton.css";

interface CategoryButtonProps {
  categoryName: string;
  count: number;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  categoryName,
  count,
  onClick,
}) => {
  return (
    <Chip
      label={`${categoryName} (${count})`}
      onClick={onClick}
      color="primary"
      clickable
      className="category-badge"
      sx={{ margin: 0.5 }}
    />
  );
};

export default CategoryButton;
