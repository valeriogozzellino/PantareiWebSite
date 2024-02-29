import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Assicurati di importare gli stili di Bootstrap

export const CarouselComponent = () => {
  const images = [
    {
      src: `${process.env.PUBLIC_URL}/imagesCarousel/cantina_domenico_clerico.png`,
      id: "cantina_domenico_clerico",
      caption: "Domenico Clerico",
    },
    {
      src: `${process.env.PUBLIC_URL}/imagesCarousel/cantine_bocchino.png`,
      id: "cantine_bocchino",
      caption: "Cantine Bocchino",
    },
    {
      src: `${process.env.PUBLIC_URL}/imagesCarousel/lallier_cantina.png`,
      id: "lallier_cantina",
      caption: "Lallier",
    },
  ];

  return (
    <Carousel interval={3000} pause="hover">
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <div className="h-1/2 flex flex-col justify-center items-center">
            <img
              className="m-0 mb-0 "
              src={image.src}
              alt={`Slide ${image.caption}`}
              style={{ width: "auto", height: "auto", objectFit: "cover" }}
            />
          </div>
          <Carousel.Caption>
            <h3 className="text-degustibustext">{image.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
