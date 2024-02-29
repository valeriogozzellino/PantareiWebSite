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
        width: "100%",
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
            width: "100%", // Assicura che AspectRatio occupi l'intera larghezza consentita
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
        <Box sx={{ p: 2 }}>
          <Typography level="h2" sx={{ fontSize: "1.25rem" }}>
            {title}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
