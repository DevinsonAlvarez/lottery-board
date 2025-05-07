import "swiper/css";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="swiper-container">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} loop>
        <SwiperSlide>
          {Array(5)
            .fill(undefined)
            .map((_, i) => (
              <div className="animals-card">slide {i + 1}</div>
            ))}
        </SwiperSlide>
        <SwiperSlide>
          {Array(5)
            .fill(undefined)
            .map((_, i) => (
              <div className="animals-card">slide {i + 6}</div>
            ))}
        </SwiperSlide>
        <SwiperSlide>
          {Array(5)
            .fill(undefined)
            .map((_, i) => (
              <div className="animals-card">slide {i + 11}</div>
            ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
