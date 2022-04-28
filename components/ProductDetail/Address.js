import React from "react";
import style from "./style/ProductDetail.module.css";
const Address = ({ product }) => {
  return (
    <div className={style.addressBox}>
      <div className={style.addressBoxInner}>
        <h3 className={style.addressBoxTitle}>Address</h3>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className={style.addressBoxItem}>
              <h6 className={style.addressBoxItemTitle}>Country</h6>
              <p className={style.addressBoxItemText}>{product.country}</p>
            </div>
            <div className={style.addressBoxItem}>
              <h6 className={style.addressBoxItemTitle}>City</h6>
              <p className={style.addressBoxItemText}>{product.city}</p>
            </div>
            <div className={style.addressBoxItem}>
              <h6 className={style.addressBoxItemTitle}>State</h6>
              <p className={style.addressBoxItemText}>{product.state}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className={style.addressBoxItem}>
              <h6 className={style.addressBoxItemTitle}>Street</h6>
              <p className={style.addressBoxItemText}>{product.street}</p>
            </div>
            <div className={style.addressBoxItem}>
              <h6 className={style.addressBoxItemTitle}>Zip Code</h6>
              <p className={style.addressBoxItemText}>{product.zipCode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
