import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import WineBarIcon from "@mui/icons-material/WineBar";
import MapIcon from "@mui/icons-material/Map";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export const DrawerMenu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const drawerItems = [
    <p className="mb-0 md:text-3xl">
      <b>HomePage</b>
    </p>,
    <p className="mb-0 md:text-3xl">
      <b>Cantine alla degustazione</b>
    </p>,
    <p className="mb-0 md:text-3xl">
      <b>Piantina Tasting Day</b>
    </p>,
    <a
      href={`${process.env.PUBLIC_URL}/Listino-Catalogo-PANTAREI.pdf`}
      download
      className="no-underline text-degustibustext md:text-3xl">
      <b>Listino Completo</b>
    </a>,
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const renderPage = (index: number) => {
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/cantine");
        break;
      case 2:
        navigate("/piantina-tasting-day");
        break;
      case 3:
        //dowload del listino completo
        break;
      default:
        break;
    }
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        "@media (min-width: 1001px)": {
          width: 600,
        },
      }}
      role="presentation"
      className="text-degustibustext bg-bgDegustibus h-full flex flex-col justify-start items-center"
      onClick={toggleDrawer(false)}>
      <div className="h-20 mt-5 flex flex-col justify-center">
        <h3 className="text-center text-3xl md:text-5xl">Open Tasting day</h3>
      </div>
      <List>
        {drawerItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className="mb-3 h-9 md:h-32 mt-3 ">
            <ListItemButton
              className="border-2 border-degustibustext "
              onClick={() => renderPage(index)}>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <WineBarIcon />}
                {index === 2 && <MapIcon />}
                {index === 3 && <InventoryIcon />}
              </ListItemIcon>
              <ListItemText
                primary={item}
                className="flex flex-col w-1/2 justify-center mb-0"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="flex flex-row items-end justify-end w-full">
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="text-degustibustext" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
