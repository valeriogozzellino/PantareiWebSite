import React from "react";
import { useNavigate } from "react-router-dom"; // 'redirect' non è una funzione di 'react-router-dom', si dovrebbe utilizzare 'useNavigate'
import PantareiLogo from "../../../images/PantareiLogo.png";
function AppBar({ currentPage }: { currentPage: "mappa" | "home" }) {
  const navigate = useNavigate(); // Aggiunto l'hook useNavigate per la navigazione

  const renderPage = (
    pageClicked: "mappa" | "photoGallery" | "contatti" | "home"
  ) => {
    switch (pageClicked) {
      case "mappa":
        navigate("/mappa");
        break;
      case "photoGallery":
        navigate("/photoGallery");
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
    <div className="flex justify-center content-between top-10">
      <div className="mr-16" onClick={() => renderPage("home")}>
        <img src={PantareiLogo} alt="Pantarei Logo" className="w-10 h-15" />
      </div>
      {currentPage === "home" ? (
        <div
          className="mr-16 flex items-center"
          onClick={() => renderPage("mappa")}>
          <p className="text-xs uppercase">Mappa delle Cantine</p>
        </div>
      ) : (
        <div
          className="mr-16  flex items-center"
          onClick={() => renderPage("home")}>
          <p className="text-xs uppercase">Home</p>
        </div>
      )}
      <div
        className="mr-16  flex items-center"
        onClick={() => renderPage("contatti")}>
        <p className="text-xs uppercase">Photo Gallery</p>
      </div>
      <div
        className=" flex items-center"
        onClick={() => renderPage("contatti")}>
        <p className="text-xs uppercase">Contatti</p>
      </div>
    </div>
  );
}
export default AppBar;
