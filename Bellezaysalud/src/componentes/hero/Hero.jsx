import Button from "../shared/boton/button";
import Cards from "../shared/Cards/Cards";
import img1 from "../../../public/img/VITAMINAS_POST.png";
import img2 from "../../../public/img/anniversary (Post de Instagram) (2).png";
import img3 from "../../../public/img/anniversary (Post de Instagram) (1).png";
import "./hero.css";

function Hero() {
  return (
    <body>
      <section className="body-container1">
        <h1>Servicios más destacados en nuestro Centro de Tui</h1>
        <div className="body_elements">
          <Cards
            text="Vitaminas"
            img={img1}
            alt="Vitaminas"
            bottom={<Button text={"¿Reservamos?"} />}
          />
          <Cards
            text={"Extensiones de Pestañas"}
            img={img3}
            alt={"Extensiones de Pestañas"}
            bottom={<Button text={"¿Reservamos?"} />}
          />

          <Cards
            text={"Corporal detox indiba"}
            img={img2}
            alt={"corporal detox"}
            bottom={<Button text={"¿Reservamos?"} />}
          />

          <Cards />

          <Cards
            text={"Corporal detox indiba"}
            img={img2}
            alt={"corporal detox"}
            bottom={<Button text={"¿Reservamos?"} />}
          />
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
