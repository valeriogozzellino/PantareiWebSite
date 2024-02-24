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
      sx={{ display: "flex", height: "200px", minWidth: "200px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100px" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={imageSrc}
        alt="Live from space album cover"
      />
    </Card>
  );
};
