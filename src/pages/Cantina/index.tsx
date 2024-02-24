import React from "react";
import AppBar from "src/components/molecules/AppBar";
import Footer from "src/components/molecules/Footer";
import informazioniCantine from "../../datas/informazioniCantine.json";
import { useParams } from "react-router-dom";

const Cantina = () => {
  const { id } = useParams<{ id: string }>();
  if (id === undefined) {
    // Gestisci il caso in cui l'id non è fornito
    return <div>ID non fornito.</div>;
  }

  const idNumerico = parseInt(id, 10);

  if (isNaN(idNumerico)) {
    // Gestisci il caso in cui l'id non è un numero valido
    return <div>ID non valido.</div>;
  }

  const cantina = informazioniCantine.find(
    (cantina) => cantina.id === idNumerico
  );

  if (!cantina) {
    // Gestisci il caso in cui la cantina non è trovata
    return <div>Cantina non trovata.</div>;
  }

  const imageSrc = `${process.env.PUBLIC_URL}/loghiCantine/${id}.png`;
  return (
    <div className="bg-bgDegustibus h-full text-degustibustext flex flex-col items-center">
      <div className=" top-0 left-0 right-0 px-10 pt-10">
        <AppBar currentPage={"mappa"} />
        <div>
          {cantina ? (
            <>
              <div className="flex justify-center items-center mt-10 h-full ">
                <div className="text-center">
                  <h1 className="text-6xl font-bold mb-3">{cantina.title}</h1>
                </div>
              </div>
              <div className="flex justify-center border-0">
                <img src={imageSrc} alt="placeholder" className="w-3/4 h-3/4" />
              </div>
            </>
          ) : (
            <div>Nessuna cantina trovata</div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Cantina;
