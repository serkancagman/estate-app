import React from "react";
import style from "./style/ProductList.module.css";
import Image from "next/image";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { Rate } from "antd";
import Link from "next/link";
const ProductList = ({ product }) => {
  return (
    <div className="col-lg-6 col-md-12">
      <article className={style.productWrapper}>
        <div className={style.productInner}>
          <div className={style.product}>
            <div className={style.productImageArea}>
              <Image
                src={product.photos[0]}
                width={500}
                height={390}
                fill="layoout"
                alt="product"
                className={style.productImage}
              />
              <div className={style.productImageOverlay}>
                <div className="d-flex justify-content-start align-items-center">
                  {product.advertStatus === "Rent" ? (
                    <span className={style.productType}> RENT </span>
                  ) : (
                    <span className={style.productType}> SELL </span>
                  )}

                  <span className={`${style.productType} ${style.newText}`}>
                    {" "}
                    NEW{" "}
                  </span>
                </div>

                <div className={style.productPrice}>
                  <span className={style.productPriceText}>
                    {product.advertStatus === "Rent"
                      ? `$${product.price} / Per Month`
                      : `${product.price}`}
                  </span>
                </div>
              </div>
            </div>
            <div className={style.productInfo}>
              <h4 className={style.productAddress}>
                {product.street +
                  "St." +
                  " " +
                  product.state +
                  " " +
                  product.city}
              </h4>
              <Link href={`/properties/${product._id}`}>
                <a className={style.productTitle}>{product.title}</a>
              </Link>
              <p className={style.productWidthTitle}>
                {" "}
                {product.advertType}:{" "}
                <span className={style.productWidth}> {product.area} sq</span>{" "}
              </p>
              <div className={style.productFeatureArea}>
                <div className={style.productFeature}>
                  <BiBed className={style.productFeatureIcon} />{" "}
                  <span className={style.productFeatureText}>
                    {" "}
                    {product.rooms} Bedrooms
                  </span>
                </div>
                <div className={style.productFeature}>
                  <BiBath className={style.productFeatureIcon} />{" "}
                  <span className={style.productFeatureText}>
                    {" "}
                    {product.bathrooms} Baths
                  </span>
                </div>
                <div className={style.productFeature}>
                  <BiCar className={style.productFeatureIcon} />{" "}
                  <span className={style.productFeatureText}>
                    {" "}
                    {product.parkCapacity} Car Capacity
                  </span>
                </div>
              </div>
              <div className={style.productBottom}>
                <div className="d-flex justify-content-between align-items-center">
                  <Rate disabled defaultValue={product.average} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductList;
