import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Swipeer({ images }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.img} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
