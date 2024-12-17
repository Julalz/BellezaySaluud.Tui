import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componentes/pages/Home/Home";
import Services from "./componentes/pages/Servicios/Services";
import Donde_estamos from "./componentes/pages/Donde_estamos/Donde_estamos";
import Contactanos from "./componentes/pages/Contactanos/Contáctanos";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="/Servicios" element={<Contactanos />} />
        <Route path="/Servicios" element={<Donde_estamos />} />
      </Routes>
    </Router>
  );
}

export default App;
