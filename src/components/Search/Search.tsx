import React from "react";
import { InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { SearchProps } from "../../interfaces/Global";

const Search: React.FC<SearchProps> = ({ label, value, onChange }) => {
  return (
    <>
      <Typography sx={{ mt: 2 }} variant="h6" color="primary">
        {label}
      </Typography>
      <div className="search">
        <div className="search__icon-wrapper">
          <SearchIcon sx={{ color: "rgb(124, 124, 124)" }} />
        </div>
        <InputBase
          placeholder="Buscar.."
          value={value}
          onChange={onChange}
          className="search__input-base"
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </>
  );
};

export default Search;
