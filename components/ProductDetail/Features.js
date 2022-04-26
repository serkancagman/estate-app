import React from "react";
import style from "./style/ProductDetail.module.css";
import {BsCheck} from "react-icons/bs";
const Features = ({product}) => {
  return (
    <div className={style.featuresBox}>
      <div className={style.featuresBoxInner}>
        <h3 className={style.featuresBoxTitle}>Features</h3>
        <div className="row g-3">
          {
              product.features.map((feature, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-6" key={index}>
                    <div className={style.featuresBoxItem}>
                        <div className={style.featuresBoxIconWrpper}>
                            <BsCheck className={style.featuresBoxIcon}/>
                        </div>
                      <h6 className={style.featuresBoxItemTitle}>{feature}</h6>
                      
                    </div>
                  </div>
                );
              }
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Features;
