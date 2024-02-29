import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <div className="flex flex-col items-center bg-bgDegustibus">
      <div className="border-1 border-degustibustext w-full" />
      <h1 className="text-4xl font-bold text-degustibustext mb-4 mt-4">
        Contact Us
      </h1>
      <div className="flex flex-row items-center">
        <a
          className="no-underline text-degustibustext"
          href="https://www.linkedin.com/">
          <LinkedInIcon />
        </a>
        <a
          className="no-underline text-degustibustext"
          href="https://www.instagram.com/">
          <InstagramIcon />
        </a>
        <a
          className="no-underline text-degustibustext"
          href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
        <a
          className="no-underline text-degustibustext"
          href="mailto:pantarei.distribuzione@pantarei.com">
          <MailIcon />
        </a>
        <a
          className="no-underline text-degustibustext"
          href="tel:+393758407364">
          <CallIcon />
        </a>
      </div>

      <p>
        Pantarei Distribuzione:{" "}
        <a
          className="no-underline text-degustibustext"
          href="tel:+393758407364">
          +39 3758407364{" "}
        </a>{" "}
        <br />
      </p>
      <p>
        Arianna Monferrino:{" "}
        <a
          className="no-underline text-degustibustext"
          href="tel:+393298451553">
          +39 3298451553
        </a>{" "}
        <br />
      </p>
      <p className="mb-4">
        <a
          className="no-underline text-degustibustext"
          href="mailto:pantarei.distribuzione@pantarei.com">
          pantarei.distribuzione@pantarei.com
        </a>
        <br />
      </p>
      <p className="text-center">
        Copyright © Pantarei Distribuzione SRL 2024.
      </p>
    </div>
  );
}

export default Footer;
