import React from "react";
import AppBar from "src/components/molecules/AppBar";
import Footer from "src/components/molecules/Footer";
function PiantinaTastingDay() {
  const imageSrc = `${process.env.PUBLIC_URL}/piantina-tastingday.png`;
  const pdfSrc = `${process.env.PUBLIC_URL}/PiantinaTastingDay.pdf`;
  const iconSrc = `${process.env.PUBLIC_URL}/icons/hand-touch.png`;
  return (
    <div className="bg-bgDegustibus h-full text-degustibustext flex flex-col items-center">
      <div className=" top-0 left-0 right-0 px-10 pt-10">
        <div className="flex flex-row justify-center items-center">
          <AppBar currentPage={"none"} />
        </div>
        <div className="flex justify-center items-center mt-10 h-full ">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-3">
              Piantina Tasting Day 2024{" "}
            </h1>
            <h3 className="text-2xl font-bold mb-16">
              Foro Boario, Lunedì 4 Marzo 2024
            </h3>
            <div className="flex flex-col justify-center items-center">
              <h5 className="text-xl font-bold">
                Clicca sulla mappa per vederla a schermo intero
              </h5>
              <img
                src={iconSrc}
                className="w-36 h-36"
                alt="Piantina Tasting Day"
              />
            </div>
          </div>
        </div>
      </div>

      <a href={pdfSrc} download>
        <div className="flex justify-center border-0 mb-10">
          <img src={imageSrc} alt="Piantina Tasting Day" />
        </div>
      </a>

      <Footer />
    </div>
  );
}
export default PiantinaTastingDay;
