import React from "react";
import style from "./style/ProductDetail.module.css";
const ProductTags = () => {
  return (
    <div className={style.productTags}>
      <div className={style.productTagsInner}>
        <h6 className={style.productTagsTitle}>Tag Cloud</h6>
        <div className="d-flex align-items-center flex-wrap">
          <span className={style.productTagsItem}>Apartment</span>
          <span className={style.productTagsItem}>Building</span>
          <span className={style.productTagsItem}>Rental</span>
          <span className={style.productTagsItem}>Modern House</span>
          <span className={style.productTagsItem}>Premium</span>
        </div>
      </div>
    </div>
  );
};

export default ProductTags;
