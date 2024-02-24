// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";

// // Definizione dell'interfaccia delle props
// interface CardWineProps {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
// }

// export const CardWine: React.FC<CardWineProps> = ({
//   id,
//   title,
//   image,
//   description,
// }) => {
//   const navigate = useNavigate();
//   const imageSrc = `${process.env.PUBLIC_URL}/loghiCantine/${id}.png`;

//   const redirectCantina = () => {
//     navigate(`/cantina/${id}`);
//   };

//   return (
//     <Card
//       onClick={redirectCantina}
//       sx={{
//         maxWidth: 345,
//         height: 200,
//         backgroundColor: "#fed7aa",
//         cursor: "pointer",
//         transition: "transform 0.3s ease-in-out",
//         "&:hover": {
//           transform: "translateY(-10px)",
//         },
//       }}>
//       <CardHeader
//         title={title}
//         titleTypographyProps={{ variant: "body2" }} // Rendi il font del titolo più piccolo
//       />
//       <CardMedia component="img" height="194" image={imageSrc} alt="azienda" />
//     </Card>
//   );
// };
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CardWineProps {
  id: number;
  title: string;
  image: string;
  description: string;
}
export const CardWine: React.FC<CardWineProps> = ({
  id,
  title,
  image,
  description,
}) => {
  const imageSrc = `${process.env.PUBLIC_URL}/loghiCantine/${id}.png`;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageSrc} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
