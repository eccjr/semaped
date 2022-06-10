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
    <section className="equipe">
      <div className="equipe_box"> 
        <h1>Equipe organizadora</h1>

        <Swiper
          slidesPerView={4}
          //spaceBetween={100}
          slidesPerGroup={4}
          // loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
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