import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioNombre from "./FormularioNombre.tsx";
import PaginaSaludo from "./PaginaSaludo.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioNombre />} />
        <Route path="/:nombre" element={<PaginaSaludo />} />
      </Routes>
    </Router>
  );
};

export default App;
