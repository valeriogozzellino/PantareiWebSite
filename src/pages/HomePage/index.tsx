import React from "react";
import AppBar from "../../components/molecules/AppBar";
import DecorationSecond from "../../images/decoration2.png";
import Sponsor from "../../images/Sponsor.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DecorationOpenDay from "../../images/decorationOpenDay.png";
import Footer from "../../components/molecules/Footer";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function HomePage() {
  const slowDown = () => {
    console.log("ciaooo");
    // Ottiene l'attuale posizione di scorrimento verticale della pagina
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    // Scorre la pagina di un paio di pixel verso il basso dalla posizione attuale
    window.scrollTo({
      top: currentScrollPosition + 500, // Aggiunge 2 pixel alla posizione attuale
      behavior: "smooth", // Mantiene lo scorrimento fluido
    });
  };

  return (
    <div className="bg-bgDegustibus text-degustibustext min-h-screen flex flex-col">
      <AppBar currentPage={"home"} />
      <div className="px-10 pt-10 flex-grow">
        <div className="relative mt-10">
          <div className="text-center z-10 relative">
            <h1 className="text-6xl font-bold mb-3">PANTAREI</h1>
            <h5 className="text-2xl font-bold mb-10">Distribuzione</h5>
          </div>
        </div>
        <img
          src={DecorationSecond}
          alt="decorative"
          className="w-full absolute top-14 left-0 z-0 object-cover"
          style={{ height: "calc(100% - 2.5rem)" }} // Adjust the height as necessary
        />
        <div className="flex justify-between items-start mt-40 z-10">
          <div className="space-y-2">
            <p className="text-sm uppercase ml-6">Lunedì 4 Marzo</p>
            <p className="text-sm uppercase ml-6">FORO BOARIO</p>
            <div className="flex items-center">
              <LocationOnIcon />
              <p className="text-sm uppercase ml-2">
                Piazza Garibaldi - Nizza Monferrato
              </p>
            </div>
            <div className="flex items-center">
              <AccessTimeIcon />
              <p className="text-sm uppercase ml-2">11:00 - 18:30</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-2xl font-bold mt-5 mb-2">
            Scarica il nostro listino
          </h5>
          <button className="border-2" onClick={slowDown}>
            <KeyboardDoubleArrowDownIcon />
          </button>
        </div>
        <div className="relative flex flex-col items-center mb-7">
          <img
            src={DecorationOpenDay}
            alt="decorativeOpenDay"
            className=" top-60 z-0 relative"
          />
          <div className="flex flex-col items-center rounded-lg z-10 relative">
            <h3 className="text-3xl mb-5">Open Tasting Day</h3>
            <p className="text-sm">Scopri la lista delle Cantine</p>
            <a
              href={`${process.env.PUBLIC_URL}/Listino-Catalogo-PANTAREI.pdf`}
              download>
              <button className="mt-4 px-4 py-2 border-4 border-white rounded-full">
                Scopri
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mt-60 mb-20">
          <h5 className="text-2xl mb-2">
            <b>Partnership</b>
          </h5>
          <img
            src={Sponsor}
            alt="Sponsor"
            style={{ width: "50%" }}
            className="object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
