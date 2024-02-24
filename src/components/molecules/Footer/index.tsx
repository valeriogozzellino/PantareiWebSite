import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <div className=" flex flex-col items-center bg-bgDegustibus ">
      <h1 className="text-4xl font-bold text-degustibustext mb-4">
        Contact Us
      </h1>
      <div className="flex flex-row items-center">
        <LinkedInIcon />
        <InstagramIcon />
        <FacebookIcon />
        <MailIcon />
        <CallIcon />
      </div>

      <p>
        Pantarei Distribuzione : +39 0000000000 <br />
      </p>
      <p>
        Arianna Monferrino : +39 0000000000 <br />
      </p>
      <p className="mb-10">
        pantarei.distribuzione@pantarei.com <br />
      </p>
    </div>
  );
}
export default Footer;
