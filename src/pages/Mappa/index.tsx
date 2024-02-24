import React from "react";
import AppBar from "src/components/molecules/AppBar";
import { CardWine } from "src/components/atoms/CardWine";
import MappaEuropea from "../../images/mappaEuropa.png";
import Footer from "src/components/molecules/Footer";
import informazioniCantine from "../../datas/informazioniCantine.json";
import { CardCantina } from "src/components/atoms/CardCantine";

function Mappa() {
  return (
    <div className="bg-bgDegustibus h-full text-degustibustext flex flex-col items-center">
      <div className=" top-0 left-0 right-0 px-10 pt-10">
        <AppBar currentPage={"mappa"} />
        <div className="flex justify-center items-center mt-10 h-full ">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-3">Le Nostre Cantine</h1>
          </div>
        </div>
        <div className="flex justify-center border-0">
          <img src={MappaEuropea} alt="placeholder" className="w-3/4 h-3/4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 w-2/3 ">
        {informazioniCantine.map((cantina, index) => (
          <div className="flex flex-col items-center">
            <CardCantina
              key={index}
              id={cantina.id}
              title={cantina.title}
              image={cantina.image}
              description={cantina.description}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Mappa;
