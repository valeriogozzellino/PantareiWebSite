import React from "react";
import { useNavigate } from "react-router-dom"; // 'redirect' non è una funzione di 'react-router-dom', si dovrebbe utilizzare 'useNavigate'
import PantareiLogo from "../../../images/PantareiLogo.png";
import { DrawerMenu } from "../../atoms/DrawerMenu";

function AppBar({ currentPage }: { currentPage: "cantine" | "home" }) {
  const navigate = useNavigate(); // Aggiunto l'hook useNavigate per la navigazione

  const renderPage = (
    pageClicked: "cantine" | "piantina-tasting-day" | "contatti" | "home"
  ) => {
    switch (pageClicked) {
      case "cantine":
        navigate("/cantine");
        break;
      case "piantina-tasting-day":
        navigate("/piantina-tasting-day");
        break;
      case "home":
        navigate("/");
        break;
      case "contatti":
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex items-center justify-stretch content-between space-x-4 top-10">
      <div
        className="w-1/2 flex items-start justify-center"
        onClick={() => renderPage("home")}>
        <img src={PantareiLogo} alt="Pantarei Logo" className="w-10 h-15" />
      </div>
      <DrawerMenu />
      {/* {currentPage === "home" ? (
        <div
          className="w-2/4 flex items-center justify-center"
          onClick={() => renderPage("cantine")}>
          <p className="text-xs text-center uppercase md:text-base">
            <b>Le noste Cantine</b>
          </p>
        </div>
      ) : (
        <div
          className=" w-2/4 flex items-center justify-center"
          onClick={() => renderPage("home")}>
          <p className="text-xs uppercase md:text-base">
            <b>Home</b>
          </p>
        </div>
      )}
      <div
        className="w-2/4  flex items-center justify-center"
        onClick={() => renderPage("piantina-tasting-day")}>
        <p className="text-xs text-center uppercase md:text-base">
          <b>Piantina Tasting Day</b>
        </p>
      </div>
      <div
        className=" w-1/4 flex items-center justify-center"
        onClick={() => renderPage("contatti")}>
        <p className="text-xs uppercase md:text-base">
          <b>Contatti</b>
        </p>
      </div>
      */}
    </div>
  );
}
export default AppBar;
