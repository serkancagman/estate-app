import React from "react";
import style from "./style/Options.module.css";
import optionImage from "assets/options/overview-1.png";
import optionImage2 from "assets/options/overview-2.png";
import optionImage3 from "assets/options/overview-3.png";
import Image from "next/image";
const Options = () => {
  return (
    <section className={style.options}>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4 col-md-12">
            <div className={style.optionInner}>
              <div className="d-flex flex-column justify-content-between align-items-start">
                ,
                <Image src={optionImage} alt="option" />
                <h3 className={style.optionTitle}> Buy A Property</h3>
                <p className={style.optionDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur numquam aspernatur adipisci! Dolorem quia, beatae
                  voluptatibus tempore tempora aliquam impedit!
                </p>
                <button className={style.optionButton}>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-"> 
          <div className={style.optionInner}>
              <div className="d-flex flex-column justify-content-between align-items-start">
                ,
                <Image src={optionImage2} alt="option" />
                <h3 className={style.optionTitle}> Sell A Property</h3>
                <p className={style.optionDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur numquam aspernatur adipisci! Dolorem quia, beatae
                  voluptatibus tempore tempora aliquam impedit!
                </p>
                <button className={style.optionButton}>Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-">
          <div className={style.optionInner}>
              <div className="d-flex flex-column justify-content-between align-items-start">
                ,
                <Image src={optionImage3} alt="option" />
                <h3 className={style.optionTitle}> Rent A Property</h3>
                <p className={style.optionDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur numquam aspernatur adipisci! Dolorem quia, beatae
                  voluptatibus tempore tempora aliquam impedit!
                </p>
                <button className={style.optionButton}>Learn More</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Options;
