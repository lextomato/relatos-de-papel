import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { BreadcrumbsProps } from "../interfaces/Global";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ routes }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 0 }}>
      <Link underline="hover" color="inherit" component={RouterLink} to="/">
        Access
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {routes[to] || value}
          </Typography>
        ) : (
          <Link
            underline="hover"
            color="inherit"
            component={RouterLink}
            to={to}
            key={to}
          >
            {routes[to] || value}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
