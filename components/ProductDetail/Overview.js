import React from "react";
import style from "./style/ProductDetail.module.css";
import {AiFillHome} from 'react-icons/ai'
import {BiArea, BiBath, BiBed, BiCar} from 'react-icons/bi'
const Overview = ({product}) => {
  return (
    <div className={style.overview}>
      <div className={style.overviewInner}>
        <h3 className={style.overviewTitle}> Overview </h3>
        <div className={style.overviewContent}>
          <div className={style.overviewItem}>
                <AiFillHome className={style.overviewIcon}/>
                <p className={style.overviewText}>Type</p>
                <p className={style.overviewValue}>{product.advertType}</p>
          </div>
          <div className={style.overviewItem}>
                <BiArea className={style.overviewIcon}/>
                <p className={style.overviewText}>Area</p>
                <p className={style.overviewValue}>{product.area} SqFt</p>
          </div>
          <div className={style.overviewItem}>
                <BiBed className={style.overviewIcon}/>
                <p className={style.overviewText}>Rooms</p>
                <p className={style.overviewValue}>{product.rooms} Bedrooms</p>
          </div>
          <div className={style.overviewItem}>
                <BiBath className={style.overviewIcon}/>
                <p className={style.overviewText}>Bathrooms</p>
                <p className={style.overviewValue}>{product.bathrooms} Baths</p>
          </div>
          <div className={style.overviewItem}>
                <BiCar className={style.overviewIcon}/>
                <p className={style.overviewText}>Garage</p>
                <p className={style.overviewValue}>{product.parkCapacity} Car Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
