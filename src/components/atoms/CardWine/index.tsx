import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ImmagineAzienda from "../../../images/immagineAzienda.png";

// Definizione dell'interfaccia delle props
interface CardWineProps {
  title: string;
  image: string;
  description: string;
}

export const CardWine: React.FC<CardWineProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#fed7aa" }}>
      <CardHeader title={title} />
      <CardMedia
        component="img"
        height="194"
        image={image ? image : ImmagineAzienda}
        alt="azienda"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
