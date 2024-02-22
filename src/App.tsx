import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa i componenti delle pagine
import HomePage from "./pages/HomePage";
import Mappa from "./pages/Mappa";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mappa" element={<Mappa />} />
          <Route path="/contatti" element={<ContactPage />} />
        </Routes>
        <div></div>
      </div>
    </Router>
  );
}

export default App;
