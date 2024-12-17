import { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header-container ${isScrolled ? "fixed" : ""}`}>
      <img
        src="../../../public/img/LOGO BELLEZA.png"
        alt="Belleza y Salud Tui"
      />

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav>
        <ul className={`ul-header-container ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/conocenos">Conócenos</Link>
          </li>
          <li>
            <Link to="/contactanos">Contáctanos</Link>
          </li>
          <li>
            <Link to="/reservar-cita">Reserva tu cita</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
