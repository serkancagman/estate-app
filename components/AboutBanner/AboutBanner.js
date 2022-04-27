import React from "react";
import style from "./style/AboutBanner.module.css";
import Image from "next/image";
import imageOne from "assets/aboutbanner/about-1.jpg";
import imageTwo from "assets/aboutbanner/about-2.jpg";
import imageThree from "assets/aboutbanner/about-3.jpg";
import imageFour from "assets/aboutbanner/about-4.jpg";
const AboutBanner = () => {
  return (
    <section className={style.aboutBanner}>
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-lg-6 col-md-12">
            <div className="row g-3">
              <div className="col-6">
                <div className={style.aboutBannerImageWrapper}>
                  <Image
                    src={imageOne}
                    alt="about-1"
                    width={500}
                    height={500}
                    className={style.aboutImg}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className={style.aboutBannerImageWrapper}>
                  <Image
                    src={imageTwo}
                    alt="about-2"
                    width={500}
                    height={500}
                    className={style.aboutImg}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className={style.aboutBannerImageWrapper}>
                  <Image
                    src={imageThree}
                    alt="about-3"
                    width={500}
                    height={500}
                    className={style.aboutImg}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className={style.aboutBannerImageWrapper}>
                  <Image
                    src={imageFour}
                    alt="about-4"
                    width={500}
                    height={500}
                    className={style.aboutImg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className={style.aboutBannerContent}>
              <h2 className={style.aboutBannerTitle}>
                Our Motive is to Provide Best for All and Fulfill their Desire
              </h2>
              <p className={style.aboutBannerDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate id doloremque, sunt omnis dignissimos nemo nulla
                mollitia, accusamus nesciunt eum quaerat quos temporibus
                sapiente exercitationem.
              </p>

              <div className={style.aboutBannerSloganArea}>
                <p className={style.aboutBannerSlogan}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam ullam facere reiciendis alias odio illum velit nihil
                  ex labore quo.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam ullam facere reiciendis.
                </p>
                <span className={style.aboutBannerSloganSign}>
                  Founder & CEO -{" "}
                  <span className={style.aboutBannerSloganName}>John Doe</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
