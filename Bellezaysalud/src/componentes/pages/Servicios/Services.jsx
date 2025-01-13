import React from "react";
import Header from "../../header/Header";
import ServicesCards from "../../shared/services/services-cards";

import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import nails from "../../../../public/icons/nails.svg"


import "./services.css";

function Services() {
  return (
    <>
      <Header />
      <div className="services-slider">
        <Swiper
          spaceBetween={20} 
          slidesPerView={4} 
          navigation={true} 
          pagination={{ clickable: true }} 
        >
      
          <SwiperSlide>
              <ServicesCards cardImg={nails} cardTitle={"Prueba1"} cardText={"esto es una prueba"}/>
          </SwiperSlide>
          <SwiperSlide >
            <ServicesCards cardTitle={"Prueba2"} cardText={"esto es una prueba"}/>
          </SwiperSlide>
          <SwiperSlide >
            <ServicesCards cardTitle={"Prueba3"} cardText={"esto es una prueba"}/>
          </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
}

export default Services;
