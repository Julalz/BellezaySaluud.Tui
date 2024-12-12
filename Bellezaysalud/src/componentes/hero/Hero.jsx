import Button from "../shared/boton/button";
import "./hero.css";

function Hero() {
  return (
    <body>
      <section className="body-container1">
        <h1>Servicios más destacados en nuestro Centro de Tui</h1>
        <div className="body_elements">
          <div className="services-card">
            <img
              src="../../../public/img/anniversary (Post de Instagram) (1).png"
              alt="Extensiones de Pestañas"
            />
            <h2>Extensiones de Pestañas</h2>
            <Button text={"¿Quiéres Reservar?"} />
          </div>
          <div className="services-card">
            <img
              src="../../../public/img/anniversary (Post de Instagram) (2).png"
              alt="corporal detox"
            />
            <h2>Corporal detox indiba</h2>
            <Button text={"Agenda tu cita ahora"} />
          </div>
          <div className="services-card">
            <img src="../../../public/img/VITAMINAS_POST.png" alt="vitaminas" />
            <h2>Vitaminas</h2>
            <Button text={"Rejuvenece tu piel"} />
          </div>
        </div>
      </section>
      <section className="body-container2">
        <div className="who-is-mila-container">
          <img
            src="../../../public/img/VITAMINAS_POST.png"
            alt="Mila Belleza y Salud"
          ></img>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              eaque ipsam quam dolore, iusto ab aut officiis voluptates facere,
              inventore deserunt eveniet, quibusdam odit voluptatibus
              exercitationem fugiat sunt? Et, nesciunt.
            </p>
          </div>
        </div>
      </section>
      <section className="body-container3">
        <div className="who-is-mila-container2">
          <img
            src="../../../public/img/VITAMINAS_POST.png"
            alt="Mila Belleza y Salud"
          ></img>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              eaque ipsam quam dolore, iusto ab aut officiis voluptates facere,
              inventore deserunt eveniet, quibusdam odit voluptatibus
              exercitationem fugiat sunt? Et, nesciunt.
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Hero;
