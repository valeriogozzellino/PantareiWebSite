import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa i componenti delle pagine
import HomePage from "./pages/HomePage";
import Cantine from "./pages/Cantine";
import Cantina from "./pages/Cantina";
import PiantinaTastingDay from "./pages/PiantinaTastingDay";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cantine" element={<Cantine />} />
          <Route path="/cantina/:id" element={<Cantina />} />
          <Route
            path="/piantina-tasting-day"
            element={<PiantinaTastingDay />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
