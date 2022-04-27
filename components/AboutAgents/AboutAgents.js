import React from "react";
import style from "./style/AboutAgents.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { agentItems } from "helpers/AgentItems";
import AgentItem from "components/Agents/AgentItem";
const AboutAgents = () => {
  return (
    <section className={style.aboutAgents}>
      <div className="container">
        <div className={style.aboutAgentsHeader}>
          <h2 className={style.aboutAgentsTitle}>Explore Feature Agents</h2>
          <p className={style.aboutAgentsSubTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aut soluta magni repellendus dolorum iure libero quidem quasi,
            voluptatem tempora?
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
          className="mySwiper py-3"
        >
          {agentItems.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                  <div className={style.agentItem}>
                <AgentItem item={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutAgents;
