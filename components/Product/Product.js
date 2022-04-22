import React from "react";
import productImage from "assets/featured-2.jpg";
import style from "./style/Product.module.css";
import Image from "next/image";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { Rate } from "antd";
const Product = () => {
  return (
    <article className={style.productWrapper}>
      <div className={style.productInner}>
        <div className={style.product}>
          <div className={style.productImageArea}>
            <Image
              src={productImage}
              alt="product"
              className={style.productImage}
            />
            <div className={style.productImageOverlay}>
              <div className="d-flex justify-content-start align-items-center">
                <span className={style.productType}> RENT </span>
                <span className={style.productType}> SALE </span>
                <span className={style.productType}> FEATURED </span>
                <span className={style.productType}> NEW </span>
              </div>
            </div>
            <div className={style.productPrice}>
              <span className={style.productPriceText}>$1,000</span>
            </div>
          </div>
          <div className={style.productInfo}>
            <h4 className={style.productAddress}> 123 Main St. </h4>
            <h2 className={style.productTitle}> Modern Apartment With Pool </h2>
            <p className={style.productWidthTitle}>
              {" "}
              Apartment: <span className={style.productWidth}> 75 sq</span>{" "}
            </p>
            <div className={style.productFeatureArea}>
              <div className={style.productFeature}>
                <BiBed className={style.productFeatureIcon} />{" "}
                <span className={style.productFeatureText}> 2 Bedrooms</span>
              </div>
              <div className={style.productFeature}>
                <BiBath className={style.productFeatureIcon} />{" "}
                <span className={style.productFeatureText}> 2 Baths</span>
              </div>
              <div className={style.productFeature}>
                <BiCar className={style.productFeatureIcon} />{" "}
                <span className={style.productFeatureText}> 2 Car Capacity</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.productBottom}>
          <div className="d-flex justify-content-between align-items-center">
            <Rate disabled defaultValue={4} />
            <button className={style.productButton}> View Details </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
