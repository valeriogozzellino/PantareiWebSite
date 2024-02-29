import React from "react";
import AppBar from "../../components/molecules/AppBar";
import DecorationSecond from "../../images/decoration2.png";
import Sponsor from "../../images/Sponsor.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DecorationOpenDay from "../../images/decorationOpenDay.png";
import Footer from "../../components/molecules/Footer";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import MapIcon from "@mui/icons-material/Map";
import { useNavigate } from "react-router-dom";
import PantareiLogo from "../../images/PantareiLogo.png";

function HomePage() {
  const slowDown = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    window.scrollTo({
      top: currentScrollPosition + 300,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  return (
    <div className="bg-bgDegustibus text-degustibustext min-h-screen flex   items-center px-10 pt-10 flex-col">
      <div className="w-full md:w-1/2 flex flex-row justify-center items-center">
        <AppBar currentPage={"home"} />
      </div>
      <div className="px-10 pt-10 flex-grow">
        <div className="relative mt-2">
          <div className="text-center z-10 relative">
            <h1 className="text-6xl font-bold mb-3">PANTAREI</h1>
            <h5 className="text-2xl font-bold mb-2">Distribuzione</h5>
            <div className="w-full flex items-start justify-center">
              <img
                src={PantareiLogo}
                alt="Pantarei Logo"
                className="w-20 md:w-1/5 h-15 p-2"
              />
            </div>
          </div>
        </div>
        <img
          src={DecorationSecond}
          alt="decorative"
          className="block md:hidden w-full h-1/2 absolute top-64 left-0 z-0 object-cover"
        />
        <div className="mt-44 md:mt-10 flex flex-row justify-center items-center  z-10 ">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold mb-2 ml-10">Open Tasting Day</h3>
            <p className="text-sm uppercase ml-8 md:ml-6">Lunedì 4 Marzo</p>
            <p className="text-sm uppercase ml-8 md:ml-6">FORO BOARIO</p>
            <div className="flex">
              <LocationOnIcon />
              <p className="text-sm uppercase ml-2">
                Piazza Garibaldi - Nizza Monferrato
              </p>
            </div>
            <div className="flex">
              <AccessTimeIcon />
              <p className="text-sm uppercase ml-2">11:00 - 18:30</p>
            </div>
            <div
              onClick={() => navigate("/piantina-tasting-day")}
              className="flex flex-col items-center text-center border-2 border-degustibustext rounded-2xl">
              <p className="text-base uppercase ml-2">
                <b>Scopri la Piantina del TASTING-DAY</b>
              </p>
              <MapIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-2xl text-center font-bold mt-5 mb-2">
            Scopri le cantine e i vini in degustazione
          </h5>
          <button onClick={slowDown}>
            <KeyboardDoubleArrowDownIcon />
          </button>
        </div>
        <div className="relative flex flex-col items-center mt-28 mb-7">
          <div className="flex flex-col items-center rounded-lg z-10 relative">
            <h3 className="text-2xl mb-1 md:mb-5 md:text-3xl">
              Open Tasting Day
            </h3>
            <p className="text-sm text-center">
              Scopri la <b>lista delle Cantine e dei vini</b> in degustazione
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/Listino-Catalogo-PANTAREI-OPENDAY.pdf`}
              download>
              <button className="mt-0 px-4 py-2 border-4 border-degustibustext text-degustibustext rounded-full md:mt-4">
                Scopri
              </button>
            </a>
          </div>
          <img
            src={DecorationOpenDay}
            alt="decorativeOpenDay"
            className="bottom-52 z-0 relative"
          />
        </div>
        <div className="flex flex-col items-center mt-46 mb-20">
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
