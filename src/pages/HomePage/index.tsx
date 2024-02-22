import React from "react";
import AppBar from "../../components/molecules/AppBar";
//import Decoration from "../../images/decoration1.png";
import DecorationSecond from "../../images/decoration2.png";
import Sponsor from "../../images/Sponsor.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DecorationOpenDay from "../../images/decorationOpenDay.png";
import Footer from "../../components/molecules/Footer";

function HomePage() {
  return (
    <div className="bg-bgDegustibus  text-degustibustext h-screen">
      <div className="relative h-4/5 " id="topBox">
        <div className="absolute top-0 left-0 right-0 px-10 pt-10 z-10">
          <AppBar currentPage={"home"} />
          <div className="flex justify-center items-center mt-10 h-full ">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-3">PANTAREI</h1>
              <h5 className="text-2xl font-bold mb-10 ">Distribuzione</h5>
            </div>
          </div>
          <div className="flex justify-between items-start mt-32 ">
            <div className="space-y-2">
              <p className="text-sm uppercase ml-6"> Lunedì 4 Marzo</p>
              <p className="text-sm uppercase ml-6">FORO BOARIO</p>
              <div className="flex flex-row items-end">
                <LocationOnIcon />
                <p className="text-sm uppercase">
                  Piazza Garibaldi - Nizza Monferrato
                </p>
              </div>
              <div className="flex flex-row items-end">
                <AccessTimeIcon />
                <p className="text-sm uppercase ml-1">11:00 - 18:30</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center mt-40">
            <img
              src={DecorationOpenDay}
              alt="decorativeOpenDay"
              className="absolute z-0"
            />
            <div className="flex flex-col items-center rounded-lg z-10">
              <h3 className="text-3xl mb-5">Open Tasting Day</h3>
              <p className="text-sm">Scopri il nostro listino</p>
              <button className="mt-4 px-4 py-2 border-2 bottom-5 border-white rounded-full">
                Scopri
              </button>
            </div>
          </div>
        </div>
        <img
          src={DecorationSecond}
          alt="decorative"
          className="w-full h-full absolute top-11 left-0 z-0 object-cover"
        />
      </div>
      <div className="flex  flex-col justify-center bg-bgDegustibus items-center h-4/5 mt-32">
        <div className=" w-full flex ">
          <h5 className="text-2xl mb-2 ml-5">
            <b>Partnership</b>
          </h5>
        </div>
        <img
          style={{ width: "50%" }}
          src={Sponsor}
          alt="decorative"
          className="object-cover"
        />
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
