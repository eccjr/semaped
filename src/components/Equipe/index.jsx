import React from "react";
import "./equipe.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { SwiperItem } from "./swiper-item";

export function Equipe(){
  return(
    <section className="equipe" id="equipe">
      <div className="equipe_box"> 
        <h1>Equipe organizadora</h1>

        <Swiper
          slidesPerView={2}
          spaceBetween={100}
          // slidesPerGroup={4}
          // loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            600: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            // when window width is >= 480px
            720: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            900: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
        >
          <SwiperSlide><SwiperItem /></SwiperSlide>
          <SwiperSlide><SwiperItem /></SwiperSlide>
          <SwiperSlide><SwiperItem /></SwiperSlide>
          <SwiperSlide><SwiperItem /></SwiperSlide>
          <SwiperSlide><SwiperItem /></SwiperSlide>
          <SwiperSlide><SwiperItem /></SwiperSlide>
          <SwiperSlide><SwiperItem /></SwiperSlide>
          <SwiperSlide><SwiperItem /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}