import Header from "../../header/Header";
import ServicesCards from "../../shared/services/services-cards";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nails from "../../../../public/icons/nails.svg";
import removerHair from "../../../../public/icons/depilacion.png";
import facial from "../../../../public/icons/proteccion-de-la-piel.png";

import "./services.css";

function Services() {
  return (
    <>
      <Header />

      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        // virtualTranslate={true}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <ServicesCards
              cardImg={nails}
              cardTitle={"Uñas"}
              cardText={"esto es una prueba"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <ServicesCards
            cardImg={removerHair}
            cardTitle={"Depilación"}
            cardText={"esto es una prueba"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesCards
            cardImg={facial}
            cardTitle={"Facial"}
            cardText={"esto es una prueba"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesCards
            cardImg={nails}
            cardTitle={"Masaje"}
            cardText={"esto es una prueba"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesCards
            cardImg={nails}
            cardTitle={"Corporales"}
            cardText={"esto es una prueba"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesCards
            cardImg={nails}
            cardTitle={"Médico estetico"}
            cardText={"esto es una prueba"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Services;
