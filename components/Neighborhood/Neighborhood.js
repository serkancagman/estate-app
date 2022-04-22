import Image from "next/image";
import React from "react";
import style from "./style/Neighborhood.module.css";
import neighImg from "assets/neighborhood/neighborhood-1.jpg";
import neighImg2 from "assets/neighborhood/neighborhood-2.jpg";
import neighImg3 from "assets/neighborhood/neighborhood-3.jpg";
import neighImg4 from "assets/neighborhood/neighborhood-4.jpg";
import neighImg5 from "assets/neighborhood/neighborhood-5.jpg";
import neighImg6 from "assets/neighborhood/neighborhood-6.jpg";
const Neighborhood = () => {
  return (
    <section className={style.neighborhood}>
      <div className="container">
        <div className={style.neighborhoodWrapper}>
          <div className={style.neighborhoodHeader}>
            <h2 className={style.neighborhoodTitle}>
              Find The Neighborhood For You
            </h2>
            <p className={style.neighborhoodText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium maxime quas sunt, in, laborum nemo quibusdam voluptatem
              doloribus aspernatur sapiente voluptatibus deserunt tempora!
              Necessitatibus, modi.
            </p>
          </div>
          <div className="row g-3">
            <div className="col-md-6 col-12 col-lg-4">
              <div className={style.neighborhoodItem}>
                <div className={style.neighborhoodItemImgArea}>
                  <Image
                    src={neighImg}
                    layout="responsive"
                    alt="neighborhood"
                    className={style.neighborhoodItemImg}
                  />
                </div>
                <div className={style.neighborhoodItemContent}>
                  <h3 className={style.neighborhoodItemTitle}>New York</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div className={style.neighborhoodItem}>
                <div className={style.neighborhoodItemImgArea}>
                  <Image
                    src={neighImg2}
                    alt="neighborhood"
                    layout="responsive"
                    className={style.neighborhoodItemImg}
                  />
                </div>
                <div className={style.neighborhoodItemContent}>
                  <h3 className={style.neighborhoodItemTitle}>Amsterdam</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div className={style.neighborhoodItem}>
                <div className={style.neighborhoodItemImgArea}>
                  <Image
                    src={neighImg3}
                    alt="neighborhood"
                    layout="responsive"
                    className={style.neighborhoodItemImg}
                  />
                </div>
                <div className={style.neighborhoodItemContent}>
                  <h3 className={style.neighborhoodItemTitle}>Istanbul</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div className={style.neighborhoodItem}>
                <div className={style.neighborhoodItemImgArea}>
                  <Image
                    src={neighImg4}
                    alt="neighborhood"
                    layout="responsive"
                    className={style.neighborhoodItemImg}
                  />
                </div>
                <div className={style.neighborhoodItemContent}>
                  <h3 className={style.neighborhoodItemTitle}>Tokyo</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div className={style.neighborhoodItem}>
                <div className={style.neighborhoodItemImgArea}>
                  <Image
                    src={neighImg5}
                    alt="neighborhood"
                    layout="responsive"
                    className={style.neighborhoodItemImg}
                  />
                </div>
                <div className={style.neighborhoodItemContent}>
                  <h3 className={style.neighborhoodItemTitle}>California</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div className={style.neighborhoodItem}>
                <div className={style.neighborhoodItemImgArea}>
                  <Image
                    src={neighImg6}
                    alt="neighborhood"
                    layout="responsive"
                    className={style.neighborhoodItemImg}
                  />
                </div>
                <div className={style.neighborhoodItemContent}>
                  <h3 className={style.neighborhoodItemTitle}>Pekin</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
          <button className={style.viewAllBtn}>VIEW ALL APARTMENTS</button>
        </div>
        </div>
       
      </div>
      <div className={style.fadeBackground}></div>
    </section>
  );
};

export default Neighborhood;
