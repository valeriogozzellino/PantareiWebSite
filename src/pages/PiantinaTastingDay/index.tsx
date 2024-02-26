import React from "react";
import AppBar from "src/components/molecules/AppBar";
import Footer from "src/components/molecules/Footer";
function PiantinaTastingDay() {
  const imageSrc = `${process.env.PUBLIC_URL}/piantina-tastingday.png`;
  return (
    <div className="bg-bgDegustibus h-full text-degustibustext flex flex-col items-center">
      <div className=" top-0 left-0 right-0 px-10 pt-10">
        <div className="flex flex-row justify-center items-center">
          <AppBar currentPage={"cantine"} />
        </div>
        <div className="flex justify-center items-center mt-10 h-full ">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-3">
              Piantina Tasting Day 2024{" "}
            </h1>
            <h3 className="text-2xl font-bold mb-16">
              Foro Boario, Lunedì 4 Marzo 2024
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-0 mb-10">
        <img src={imageSrc} alt="Piantina Tasting Day" />
      </div>

      <Footer />
    </div>
  );
}
export default PiantinaTastingDay;
