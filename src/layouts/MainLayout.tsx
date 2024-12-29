import React from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      className="layout-container"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />

      <Container sx={{ flex: 1, paddingY: 1 }}>{children}</Container>

      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          background: "#000000",
          color: "white",
        }}
      >
        <p>&copy; 2024 Relatos de Papel</p>
      </footer>
    </div>
  );
};

export default MainLayout;
