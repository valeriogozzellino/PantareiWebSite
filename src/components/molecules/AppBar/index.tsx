import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { DrawerMenu } from "../../atoms/DrawerMenu";
import { useNavigate } from "react-router-dom"; // Aggiunto l'import di useNavigate per la navigazione
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../../style/global.css";

function AppBar({ currentPage }: { currentPage: "home" | "none" }) {
  const navigate = useNavigate(); // Aggiunto l'hook useNavigate per la navigazione
  const scrollBottom = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo({
      top: currentScrollPosition + 1200,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full">
      {currentPage === "home" && (
        <div
          onClick={() => scrollBottom()}
          className="bg-degustibustext flex flex-col justify-center mb-0 text-white text-center h-14 w-full overflow-hidden">
          <p className="scroll-text font-bold  mt-3 w-full">
            10% DI SCONTO SE ORDINI ENTRO 24h - 10% DI SCONTO SE ORDINI ENTRO
            24h -10% DI SCONTO SE ORDINI ENTRO 24h - 10% DI SCONTO SE ORDINI
            ENTRO 24h - 10% DI SCONTO SE ORDINI ENTRO 24h - 10% DI SCONTO SE
            ORDINI ENTRO 24h
          </p>
        </div>
      )}
      <div
        style={{
          width: "100%",
        }}
        className="flex flex-row items-center justify-stretch content-between top-10 md:h-24 ">
        {currentPage === "none" && (
          <div className="flex flex-row h-24 ">
            <button className="h-24" onClick={() => navigate(-1)}>
              <ArrowBackIcon className="h-24" />
            </button>
            <button className="ml-5" onClick={() => navigate("/")}>
              <HomeIcon />
            </button>
          </div>
        )}
        <DrawerMenu />
      </div>
    </div>
  );
}
export default AppBar;
