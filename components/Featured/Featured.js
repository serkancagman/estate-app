import React from "react";
import style from "./style/Featured.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Product from "components/Product/Product";
import "swiper/css/navigation";
const Featured = () => {
  return (
    <section className={style.featured}>
      <div className="container">
        <div className={style.featuredHeader}>
          <h2 className={style.featuredTitle}>Featured</h2>
          <p className={style.featuredText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            dolor ut quam aliquet.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper featuredSwiper"
        >
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Featured;
