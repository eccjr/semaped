import React, {useState} from "react";
import "./equipe.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Navigation } from "swiper";
import { SwiperItem } from "./swiper-item";
import { FreeMode, Scrollbar } from "swiper";


const jsonData = require('./equipe.json'); 
export function Equipe(){

  const [integrantes, _] = useState(jsonData.equipe)

  return(
    <section className="equipe" id="equipe">
      <div className="equipe_box"> 
        <h1>Equipe organizadora</h1>

        <Swiper
          slidesPerView={2}
          spaceBetween={100}
          // slidesPerGroup={4}
          // loop={true}
          scrollbar={true}
          navigation={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation, Scrollbar, FreeMode]}
          className="mySwiper"          
          breakpoints={{
            // when window width is >= 640px
            320:{
              navigation:{
                enabled: false
              }
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 5,
              
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
          {integrantes.map(integrante => (
          <SwiperSlide>
            <SwiperItem 
              foto={integrante.foto}
              nome={integrante.nome}
              cargo={integrante.cargo}
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}