import Image from "next/image";
import React from "react";
import style from "./style/Solution.module.css";
import solutionImage from "assets/solution/solution-1.png";
const Solution = () => {
  return (
    <section className={style.solution}>
      <div className="container">
        <div className="row g-3 align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className={style.solutionImg}>
              <Image src={solutionImage} alt="solution" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className={style.solutionContent}>
              <h2 className={style.solutionTitle}>
                Find Best Property Solution For #Rent #Sell and #Buy
              </h2>
              <p className={style.solutionText}>
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin
                lorem quis bibendum auctor nisi elit consequat ipsum nec
                sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
                cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
                tellus a odio tincidunt auctor a ornare odio.
              </p>
              <p className={style.solutionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className={style.solutionBtn}> CONTACT US NOW </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
