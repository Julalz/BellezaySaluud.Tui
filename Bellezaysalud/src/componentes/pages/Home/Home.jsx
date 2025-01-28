import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Cards from "../../shared/Cards/Cards";
import Button from "../../shared/boton/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swipeer from "../../swiper/Slider";
import images from "../../../importaciones/images";
import "./home.css";

function Home() {
  return (
    <body>
      <Header />
      <section className="body-container1">
        <h1>Servicios más destacados en Nuestro centro de estetica en Tui</h1>
        <div className="body_elements">
          <Cards text="Vitaminas" img={images[2].img} alt={images[2].alt} />
          <Cards
            text={"Extensiones de Pestañas"}
            img={images[1].img}
            alt={images[1].alt}
          />

          <Cards
            text={"Corporal detox indiba"}
            img={images[0].img}
            alt={images[0].alt}
          />

          <Cards
            text={"Corporal detox indiba"}
            img={images[0].img}
            alt={images[0].alt}
          />

          <Cards
            text={"Corporal detox indiba"}
            img={images[0].img}
            alt={images[0].alt}
          />
        </div>
      </section>
      <div className="div-confianza-section2">
        <h2>Confianza y belleza</h2>
        <p>todo en un solo lugar</p>
        <div className="vertical-line"></div>
        <Button
          text={"Pedir cita"}
          url={
            "https://www.treatwell.es/establecimiento/belleza-y-salud-salon-de-belleza/"
          }
        />
      </div>
      <section className="body-container2">
        <div className="who-is-mila-container">
          <div>
            <img
              src="../../../../public/img/Mila.png"
              alt="Mila Belleza y Salud"
            />
            <p className="text-vertical-mila">Mila Covelo</p>
          </div>
          <div>
            <p>
              Da el primer paso hacia una experiencia de belleza única <br />
              <span>no esperes más</span>
            </p>
            <p>
              Mila Covelo explora el mundo en busca de soluciones innovadoras
              que han hecho de nuestra marca la más destacada. Un equipo de
              expertos estudia tus necesidades para ofrecerte tratamientos a
              medida que brillen con tu estilo único y belleza natural
            </p>
            <div className="horizontal-line"></div>
          </div>
        </div>
      </section>
      <section className="body-container3">
        <div>
          <h2>
            Belleza y Salud nació hace 30 años con el objetivo de brindar
            bienestar y cuidado integral
          </h2>
          <p>
            Acompañarte a lo largo de los años, para que vivas cada etapa de la
            vida sintiéndote mejor que nunca
          </p>
          <img
            className="Higiene-facial"
            src="../../../../public/img/DSC02675.jpg"
            alt="Higiene facial"
          />
        </div>
        <div>
          <img
            className="img-container3"
            src="../../../../public/img/DSC02748.png"
            alt="30 años de Belleza y Salud"
          />
          <Button text={"Conocenos"} url={"/conocenos"} />
        </div>
      </section>
      <div className="horizontal-line"></div>
      <div className="body-container4">
        <h2>Buscas algún producto en especial</h2>
      </div>

      <Swipeer images={images} />

      <Footer />
    </body>
  );
}
export default Home;
