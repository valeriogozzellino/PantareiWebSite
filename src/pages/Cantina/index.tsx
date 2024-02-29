import React from "react";
import AppBar from "src/components/molecules/AppBar";
import Footer from "src/components/molecules/Footer";
import informazioniCantine from "../../datas/informazioniCantine.json";
import { useParams } from "react-router-dom";
import { useResetScroll } from "../../components/atoms/useResetScroll";

const Cantina = () => {
  useResetScroll();

  const { id } = useParams<{ id: string }>();
  if (id === undefined) {
    return <div>ID non fornito.</div>;
  }

  const idNumerico = parseInt(id, 10);

  if (isNaN(idNumerico)) {
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
        <div className="w-full flex flex-row justify-center">
          <div className="w-full md:w-1/2 ">
            <AppBar currentPage={"none"} />
          </div>
        </div>
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
              <div className="flex justify-center items-center mt-10 h-full ">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-3">Informazioni</h1>
                  <p>{cantina.description}</p>
                </div>
              </div>
              {/* <div>
                <h1 className="text-4xl font-bold mb-3">Vini</h1>
                <div className="flex justify-center items-center mt-10 h-full ">
                  <div className="text-center">
                    {cantinaWines.length > 0 ? (
                      <div className="grid grid-cols-3 gap-4">
                        {cantinaWines.map((wine) => (
                          <CardWine
                            key={wine.id}
                            id={wine.id}
                            title={wine.nome}
                            image={ImmagineAzienda}
                            description={wine.descrizione}
                          />
                        ))}
                      </div>
                    ) : (
                      <div>Nessun vino trovato</div>
                    )}
                  </div>
                </div>
              </div> */}
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
