import React from "react";
import style from "./style/ProductDetail.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import Image from "next/image";
import { BiBed, BiBath, BiCar } from "react-icons/bi";
import { Rate } from "antd";
import DescriptionBox from "./DescriptionBox";
import Overview from "./Overview";
import Address from "./Address";
import Features from "./Features";
import Plan from "./Plan";
import AgentBox from "./AgentBox";
import FeaturedProperty from "./FeaturedProperty";
import ProductTags from "./ProductTags";
const ProductDetail = ({ product }) => {
  return (
    <section className={style.productDetail}>
      <div className="container">
        <div className="col-12">
          <Swiper
            slidesPerView={2}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper detailSwiper"
            breakpoints={{
              279: {
                slidesPerView: 1,
              },
              440: {
                slidesPerView: 2,
              }
            }}
          >
            {product.photos.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={style.productImageWrapper}>
                    <Image
                      src={image}
                      width={730}
                      height={500}
                      className={style.productImage}
                      alt="product-image"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="row g-3">
          <div className="col-lg-8 col-md-12">
            <div className="col-12">
              <div className={style.productDetailHeader}>
                <div className={style.productDetailInner}>
                  <div className={style.productDetailLeft}>
                    <div className={style.productDetailTags}>
                      <span
                        className={`${style.productDetailTag} ${style.advertTag}`}
                      >
                        {product.advertStatus === "Sell" ? "SELL" : "RENT"}{" "}
                      </span>
                      {product.isFeatured && (
                        <span
                          className={`${style.productDetailTag} ${style.featuredTag}`}
                        >
                          FEATURED
                        </span>
                      )}
                      {!product.isOld && (
                        <span
                          className={`${style.productDetailTag} ${style.isNewTag}`}
                        >
                          NEW
                        </span>
                      )}
                    </div>
                    <h6 className={style.productDetailAddress}>
                      {product.street +
                        " St." +
                        " " +
                        product.state +
                        ", " +
                        product.city}
                    </h6>
                    <h3 className={style.productDetailTitle}>
                      {product.title}
                    </h3>
                    <div className={style.productDetailArea}>
                      <span className={style.productDetailAreaText}>
                        {product.advertType}:{" "}
                      </span>
                      <span className={style.productDetailAreaTotal}>
                        {product.area} sq
                      </span>
                    </div>
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
                  <div className={style.productDetailRight}>
                    <div className={style.productDetailPrice}>
                      <span className={style.productDetailPriceText}>
                        ${product.price}
                      </span>
                    </div>
                    <div className={`${style.productDetailAverage} detailAverage`}>
                      <Rate disabled defaultValue={product.average} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <DescriptionBox />
            </div>
            <div className="col-12">
              <Overview product={product} />
            </div>
            <div className="col-12">
              <Address product={product} />
            </div>
            <div className="col-12">
              <Features product={product} />
            </div>
            <div className="col-12">
              <Plan product={product} />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="col-12">
              <div className={style.actionBox}>
                <div className={style.actionBoxInner}>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className={style.actionBoxButton}> SHARE </button>
                    <button
                      className={`${style.actionBoxButton} ${style.actionBoxButtonBroucher}`}
                    >
                      {" "}
                      Download Broucher{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <AgentBox />  
            </div>
            <div className="col-12">
              <FeaturedProperty/>
              </div>
              <div className="col-12">
                <ProductTags/>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
