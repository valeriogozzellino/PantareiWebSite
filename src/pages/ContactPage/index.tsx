import React from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div>
      <h1>Discovery</h1>
      <p>
        This is the discovery page. Click on the links below to navigate to
        other pages.
      </p>
      <div>
        <Link to="/discovery">discovery</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
export default ContactPage;
