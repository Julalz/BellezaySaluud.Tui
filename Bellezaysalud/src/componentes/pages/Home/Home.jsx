import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Cards from "../../shared/Cards/Cards";
import Button from "../../shared/boton/button";
import img1 from "../../../../public/img/VITAMINAS_POST.png";
import img2 from "../../../../public/img/anniversary (Post de Instagram) (2).png";
import img3 from "../../../../public/img/anniversary (Post de Instagram) (1).png";

import "./home.css";

function Home() {
  return (
    <body>
      <Header />
      <section className="body-container1">
        <h1>Servicios más destacados en Nuestro centro de estetica en Tui</h1>
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

          <Cards
            text={"Corporal detox indiba"}
            img={img2}
            alt={"corporal detox"}
            bottom={<Button text={"¿Reservamos?"} />}
          />

          <Cards
            text={"Corporal detox indiba"}
            img={img2}
            alt={"corporal detox"}
            bottom={<Button text={"¿Reservamos?"} />}
          />
        </div>
      </section>
      <section className="body-container2">
        <h2 className="text-section2">¿Quién es Mila Covelo?</h2>
        <div className="who-is-mila-container">
          <img
            src="../../../../public/img/Mila.png"
            alt="Mila Belleza y Salud"
          ></img>
          <p>
            Hola soy Mila Covelo, Directora del Centro Belleza y Salud en Tui.
            Mi pasión por la belleza y el bienestar me ha acompañado durante más
            de 20 años, guiándome en la maravillosa tarea de ayudar a las
            personas a sentirse seguras y radiantes en su propia piel. Desde muy
            joven, supe que quería dedicarme a este mundo, y a lo largo de mi
            carrera he aprendido que la belleza no es solo lo que vemos, sino
            cómo nos sentimos.
          </p>
        </div>
      </section>
      <section className="body-container3">
        <div className="who-is-mila-container3">
          <img
            src="../../../../public/img/Mila Covelo (1).png"
            alt="Dr pablo giommarini"
          ></img>
          <p>
            Doctor Pablo Giommarini, Licenciado en medicina en 1997 y
            especializado en ginecología desde 2001, con una extensa formación
            en distintos campos de la medicina estética, llevo muchos años
            trabajando para devolverte la confianza en ti misma, acompañándote
            en el proceso con una atención personalizada.
          </p>
        </div>
      </section>
      <section className="body-container4">
        <div className="who-is-mila-container4">
          <img
            src="../../../../public/img/Mila Covelo.png"
            alt="Alejandra Quintero"
          ></img>
          <p>
            Alejandra Quintero es una profesional con más de dos años de
            experiencia como profesora de extensiones de pestañas, destacada
            también por su expertise en micropigmentación de cejas, laminado de
            cejas y cejas con henna. Su conocimiento y pasión por la estética la
            han llevado a especializarse en estos tratamientos, ofreciendo a sus
            estudiantes y clientes un servicio altamente profesional y
            detallado. Gracias a su formación y experiencia, Alejandra ha
            logrado destacarse en el campo de la belleza, ayudando a realzar la
            mirada de muchas personas
          </p>
        </div>
      </section>

      <Footer />
    </body>
  );
}
export default Home;
