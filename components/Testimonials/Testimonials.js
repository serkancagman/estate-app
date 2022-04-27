import React from "react";
import style from "./style/Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import personImg from "assets/agents/agents-1.jpg";
import personImg2 from "assets/agents/agents-2.jpg";
import personImg3 from "assets/agents/agents-3.jpg";
import personImg4 from "assets/agents/agents-4.jpg";
import TestimonialItem from "./TestimonialItem";
const Testimonials = () => {
  return (
    <section className={style.testimonials}>
      <div className="container">
        <div className={style.testimonialsHeader}>
          <h2 className={style.testimonialsTitle}>What our customers say</h2>
          <p className={style.testimonialsSubTitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            adipisci praesentium natus minus! Eligendi error recusandae, quidem
            saepe a quam!
          </p>
        </div>
        <Swiper
          slidesPerView={4}
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
            <TestimonialItem
              imgUrl={personImg}
              job="Developer"
              title="John Doe"
              rate={5}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              imgUrl={personImg2}
              title="Michael Scott"
              rate={3}
              job="Sales Manager"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              imgUrl={personImg3}
              job="Customer Service"
              title="Pam Besley"
              rate={4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              job="Human Resource"
              imgUrl={personImg4}
              title="Jim Halpert"
              rate={5}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
