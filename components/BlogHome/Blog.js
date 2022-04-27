import React from "react";
import style from "./style/Blog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Product from "components/Product/Product";
import blogImage from "assets/blog/blog-1.jpg";
import blogImage2 from "assets/blog/blog-2.jpg";
import blogImage3 from "assets/blog/blog-3.jpg";
import personImage from "assets/blog/person-1.jpg";
import personImage2 from "assets/blog/person-2.jpg";
import personImage3 from "assets/blog/person-3.jpg";
import BlogItem from "./BlogItem";
const Blog = () => {
  return (
    <section className={style.blog}>
      <div className="container">
        <div className={style.blogHeader}>
          <h2 className={style.blogTitle}>Articles and Blogs</h2>
          <p className={style.blogText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
            debitis odit, maiores vel quia laboriosam aspernatur atque fuga
            vitae obcaecati in nostrum sit molestias magnam.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper blogSwiper"
        >
          <SwiperSlide>
            <BlogItem
              imgUrl={blogImage}
              stateType="APARTMENT"
              title="Redfin Unveils the Best Canadian  Cities for Biking"
              owner="Alex Morgan"
              date="19 January"
              personImg={personImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              imgUrl={blogImage2}
              stateType="HOUSES"
              title="Apartio Helps Get Your Dream & Luxury Space Alexa"
              owner="Nia Watson"
              date="29 January"
              personImg={personImage2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              imgUrl={blogImage3}
              stateType="COMMERCIAL"
              title=" Housing Markets That Changed the  Most This Decade"
              owner="MILANA KURTZ"
              date="25 January"
              personImg={personImage3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              imgUrl={blogImage2}
              stateType="HOUSES"
              title="Apartio Helps Get Your Dream & Luxury Space Alexa"
              owner="Nia Watson"
              date="29 January"
              personImg={personImage2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              imgUrl={blogImage3}
              stateType="COMMERCIAL"
              title=" Housing Markets That Changed the  Most This Decade"
              owner="MILANA KURTZ"
              date="25 January"
              personImg={personImage3}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
