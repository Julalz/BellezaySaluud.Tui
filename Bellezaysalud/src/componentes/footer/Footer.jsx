import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <section className="ul-footer-container">
          <ul>
            <li>
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes 10:00 a 10:00 </p>
            </li>
            <li>
              <h3>Conócenos</h3>
              <p>Reservar Cita</p>
              <p>Extensiones de Pestañas</p>
              <p>Chocoloterapia</p>
              <p>Depilación Láser</p>
            </li>
            <li>
              <h3>Contáctanos</h3>
              <p>💌Bellezaysalud@bellezaysalud.com</p>
              <p>📞696 24 00 34</p>
            </li>
            <div>
              <img src="" alt="" />
            </div>
          </ul>
        </section>
        <section className="img-footer-logo">
          <ul>
            <img
              src="../../../public/img/LOGO BELLEZA.png"
              alt="Centro de Estetica Belleza y Salud"
            ></img>
          </ul>
        </section>
      </footer>
      <div className="copy">
        <p> Copyright&copy; 2024 Todos los derechos reservados</p>
      </div>
    </>
  );
}

export default Footer;
