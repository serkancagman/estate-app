import React from "react";
import axios from "axios";
import useSWR from "swr";
import style from "./style/ProductDetail.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
const FeaturedProperty = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`${process.env.API_URL}product`, fetcher);
  console.log(data);
  return (
    <div className={style.featuredProperty}>
      <div className={style.featuredPropertyInner}>
        <h6 className={style.featuredPropertyTitle}>Featured Property</h6>
        {data &&
          data.map((product, index) => {
            if (index < 5) {
              return (
                <div key={index} className="col-12">
                  <div className={style.featuredPropertyItem}>
                    <div className={style.featuredPropertyImage}>
                      <Image
                        src={product.photos[0]}
                        className={style.featuredPropertyImg}
                        width={130}
                        height={90}
                      />
                    </div>
                    <div className="d-flex flex-column w-100 justify-content-between align-items-start">
                      <h6 className={style.featuredPropertySubTitle}>
                        {" "}
                        {product.title}
                      </h6>
                      <div className="d-flex align-items-center mb-1 justify-content-start">
                        <HiOutlineLocationMarker
                          className={style.featuredPropertyIcon}
                        />
                        <span className={style.featuredPropertyAddressText}>
                          {" "}
                          {product.street + " St." + " " + product.state}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between w-100 align-items-center">
                        <span className={style.featuredPropertyTag}>
                          For {product.advertStatus}
                        </span>
                        <span className={style.featuredPropertyPriceText}>
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default FeaturedProperty;
