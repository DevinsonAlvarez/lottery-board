import "swiper/css";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import AnimalsSlide from "./AnimalsSlide";

export default function Slider() {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Autoplay, Mousewheel]}
        autoplay={{ delay: 10000 }}
        speed={1000}
        loop
        mousewheel={true}
      >
        <SwiperSlide>
          <AnimalsSlide />
        </SwiperSlide>
        <SwiperSlide>
          <AnimalsSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
