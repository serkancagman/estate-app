import React from "react";
import style from "./style/Banner.module.css";
import bannerImage from "assets/banner/banner-1.jpg";
import Image from "next/image";
import Filterbar from "components/Filterbar/Filterbar";

const Banner = () => {
  return (
    <section className={style.banner}>
      <div className="container">
        <div className={style.bannerInner}>
          <div className="row g-3">
            <div className="col-lg-6 col-md-12">
              <div className={style.bannerContent}>
                <h2 className={style.bannerTitle}>
                  Looking For a Home? Enjoy The Finest Homes
                </h2>
                <p className={style.bannerText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente amet voluptatibus voluptate at necessitatibus maxime,
                  veritatis quidem accusamus omnis fugit! Excepturi rem unde
                  ullam doloremque.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={style.bannerImageWrapper}>
                <Image
                  src={bannerImage}
                  alt="banner"
                 fill="responsive"
                  className={style.bannerImage}
                />
              </div>
            </div>
          </div>
          <div className={style.bannerFade}></div>
          <Filterbar />
        </div>
      </div>
    </section>
  );
};

export default Banner;
