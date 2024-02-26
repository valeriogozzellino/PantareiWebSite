import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Assicurati di importare gli stili di Bootstrap

export const CarouselComponent = () => {
  const imageSrc1 = `${process.env.PUBLIC_URL}/imagesCarousel/cantina_domenico_clerico.png`;
  const imageSrc2 = `${process.env.PUBLIC_URL}/imagesCarousel/cantine_bocchino.png`;
  const imageSrc3 = `${process.env.PUBLIC_URL}/imagesCarousel/lallier_cantina.png`;

  return (
    <Carousel interval={3000} pause="hover">
      {[imageSrc1, imageSrc2, imageSrc3].map((src, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block " // Rende l'immagine responsive mantenendo le proporzioni
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: "auto" }} // Assicura che tutte le immagini abbiano la stessa altezza massima
          />
          <Carousel.Caption>
            <h3>
              {[`Domenico Clerico`, `Cantine Bocchino`, `Lallier`][index]}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
