import React from "react";
import { Link } from "react-router-dom";
import TopAppBar from "src/components/molecules/TopAppBar";

function Paio() {
  return (
    <div className="p-8  ">
      <TopAppBar />
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Discovery Wine</h1>
      <div className="flex justify-center border-0">
        <img
          src="https://via.placeholder.com/800x400"
          alt="placeholder"
          className="w-1/2 h-auto"
        />
      </div>
      <p className="mb-8">
        This is the home page. Click on the links below to navigate to other
        pages.
      </p>
      <div className="mb-4">
        <Link
          to="/discovery"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
          Discovery
        </Link>
      </div>
      <div>
        <Link
          to="/contact"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
          Contact
        </Link>
      </div>
    </div>
  );
}
export default Paio;
