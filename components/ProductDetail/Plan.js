import React from "react";
import style from "./style/ProductDetail.module.css";
import planImage from "assets/productdetail/plan.png";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
import Image from "next/image";
const Plan = ({ product }) => {
  return (
    <div className={style.planBox}>
      <div className={style.planBoxInner}>
        <div className={style.planBoxHeader}>
          <h3 className={style.planBoxTitle}>Plan</h3>
          <div className={style.productDetailFeature}>
            <div className={style.productDetailFeatureItem}>
              <BiBed className={style.productDetailFeatureIcon} />
              <span className={style.productDetailFeatureText}>
                {product.rooms} Bedrooms
              </span>
            </div>
            <div className={style.productDetailFeatureItem}>
              <BiBath className={style.productDetailFeatureIcon} />
              <span className={style.productDetailFeatureText}>
                {product.bathrooms} Bathrooms
              </span>
            </div>
            <div className={style.productDetailFeatureItem}>
              <BiCar className={style.productDetailFeatureIcon} />
              <span className={style.productDetailFeatureText}>
                {product.parkCapacity} Park Capacity
              </span>
            </div>
          </div>
        </div>
        <div className={style.planBoxImage}>
        <Image src={planImage} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Plan;
