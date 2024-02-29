import React from "react";
// import { useNavigate } from "react-router-dom"; // 'redirect' non è una funzione di 'react-router-dom', si dovrebbe utilizzare 'useNavigate'
import HomeIcon from "@mui/icons-material/Home";
import { DrawerMenu } from "../../atoms/DrawerMenu";
import { useNavigate } from "react-router-dom"; // Aggiunto l'import di useNavigate per la navigazione
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function AppBar({ currentPage }: { currentPage: "home" | "none" }) {
  const navigate = useNavigate(); // Aggiunto l'hook useNavigate per la navigazione
  return (
    <div
      style={{ width: "100%" }}
      className="flex flex-row items-center justify-stretch content-between top-10">
      {currentPage === "none" && (
        <div className="flex flex-row">
          <button onClick={() => window.history.back()}>
            <ArrowBackIcon />
          </button>
          <button className="ml-5" onClick={() => navigate("/")}>
            <HomeIcon />
          </button>
        </div>
      )}
      <DrawerMenu />
    </div>
  );
}
export default AppBar;
