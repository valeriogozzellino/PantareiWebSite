import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface CardCantinaProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const CardCantina: React.FC<CardCantinaProps> = ({
  id,
  title,
  image,
  description,
}) => {
  const navigate = useNavigate();
  const imageSrc = `${process.env.PUBLIC_URL}/loghiCantine/${id}.png`;
  const redirectCantina = () => {
    navigate(`/cantina/${id}`);
  };
  return (
    <Card
      onClick={redirectCantina}
      sx={{
        display: "flex",
        height: "300px", // Aumenta l'altezza qui
        minWidth: "300px", // Aumenta la larghezza minima qui
        flexDirection: "row", // Assicurati che sia impostato su row per avere contenuti affiancati
        width: "100%", // Opzionale: se vuoi che la card si espanda fino a occupare lo spazio disponibile
      }}>
      <Box sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "50%" }} // Aumenta la larghezza dell'immagine, ad esempio al 50% della card
        image={imageSrc}
        alt={title}
      />
    </Card>
  );
};
