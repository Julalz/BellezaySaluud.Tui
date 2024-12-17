import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componentes/pages/Home/Home";
import Services from "./componentes/pages/Servicios/Services";
import Donde_estamos from "./componentes/pages/Donde_estamos/Donde_estamos";
import Contactanos from "./componentes/pages/Contactanos/Contáctanos";
import Conocenos from "./componentes/pages/Conocenos/Conocenos";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/donde-estamos" element={<Donde_estamos />} />
        <Route path="/conocenos" element={<Conocenos />} />
      </Routes>
    </Router>
  );
}

export default App;
