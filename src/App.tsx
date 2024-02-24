import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa i componenti delle pagine
import HomePage from "./pages/HomePage";
import Mappa from "./pages/Mappa";
import Cantina from "./pages/Cantina";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mappa" element={<Mappa />} />
          <Route path="/cantina/:id" element={<Cantina />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
