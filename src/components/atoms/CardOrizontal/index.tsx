import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";

interface CardOrizontalProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const CardOrizontal: React.FC<CardOrizontalProps> = ({
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%", // Larghezza su dispositivi mobili
        "@media (min-width: 1001px)": {
          width: "50%", // Larghezza su tablet e dispositivi più grandi
        },
        "@media (min-width: 1701px)": {
          width: "25%", // Larghezza su desktop più grandi
        },
      }}>
      <Card
        onClick={redirectCantina}
        variant="outlined"
        size="sm"
        orientation="horizontal"
        sx={{
          margin: 1,
          gap: 1,
          minWidth: { xs: "100%", sm: 400 },
          height: "auto",
        }}>
        <AspectRatio
          sx={{
            width: "70%", // Assicura che AspectRatio occupi l'intera larghezza consentita
            overflow: "hidden", // Nasconde l'overflow invece di mostrarlo
          }}
          ratio="16/9" // Imposta un rapporto di aspetto comune per le immagini
        >
          <img
            src={imageSrc}
            srcSet={imageSrc}
            alt="logoCantina"
            style={{ width: "100%", height: "100%", objectFit: "cover" }} // Assicura che l'immagine copra l'area disponibile senza distorsioni
          />
        </AspectRatio>
        <Box sx={{ p: 0, width: "30%" }}>
          <Typography level="h2" sx={{ fontSize: "1.25rem" }}>
            {title}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
