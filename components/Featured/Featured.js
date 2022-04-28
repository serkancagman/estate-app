import React from "react";
import style from "./style/Featured.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Product from "components/Product/Product";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";
const Featured = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  return (
    <section className={style.featured}>
      <div className="container">
        <div className={style.featuredHeader}>
          <h2 className={style.featuredTitle}>Featured</h2>
          <p className={style.featuredText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            quos, nobis deserunt accusamus dolorem voluptatem qui eaque odio
            iusto, velit placeat? Quae dignissimos at reprehenderit?
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
          {products.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <Product product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="d-flex align-items-center justify-content-center">
          <Link href="/properties">
            <a>
          <button className={style.viewAllBtn}>VIEW ALL APARTMENTS</button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
