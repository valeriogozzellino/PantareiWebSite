import React from "react";
import AppBar from "src/components/molecules/AppBar";
import Footer from "src/components/molecules/Footer";
import informazioniCantine from "../../datas/informazioniCantine.json";
import { CardOrizontal } from "src/components/atoms/CardOrizontal";
import { CarouselComponent } from "src/components/atoms/Carousel";

function Cantine() {
  return (
    <div className="bg-bgDegustibus h-full text-degustibustext flex flex-col items-center">
      <div className=" top-0 left-0 right-0 px-10 pt-10">
        <div className="flex flex-row justify-center items-center">
          <AppBar currentPage={"none"} />
        </div>
        <div className="flex justify-center items-center mt-10 h-full ">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-3">Le Nostre Cantine</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-0">
        <CarouselComponent />
      </div>

      <div className="grid grid-cols-1 p-3 w-full">
        <div className="flex flex-col md:flex-row md:flex-wrap items-center w-full">
          {informazioniCantine.map((cantina) => (
            <CardOrizontal
              key={cantina.id}
              id={cantina.id}
              title={cantina.title}
              image={cantina.image}
              description={cantina.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Cantine;
