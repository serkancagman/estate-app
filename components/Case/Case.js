import React from "react";
import style from "./style/Case.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import CaseItem from "./CaseItem";
import caseImg from "assets/case/case-study-1.jpg";
import caseImg2 from "assets/case/case-study-2.jpg";
import caseImg3 from "assets/case/case-study-3.jpg";
const Case = () => {
  return (
    <section className={style.case}>
      <div className="container">
        <div className={style.caseHeader}>
          <h2 className={style.caseTitle}>Case</h2>
          <p className={style.caseText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
            distinctio corrupti dolore dicta, aperiam quisquam quibusdam
            perferendis pariatur, natus ipsam earum iusto, hic itaque!
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            279: {
              slidesPerView: 1,
            },
            420: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <CaseItem imageUrl={caseImg} titleName="Apartment" />
          </SwiperSlide>
          <SwiperSlide>
            <CaseItem imageUrl={caseImg2} titleName="Modern Home" />
          </SwiperSlide>
          <SwiperSlide>
            <CaseItem imageUrl={caseImg3} titleName="Modern Villa" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Case;
