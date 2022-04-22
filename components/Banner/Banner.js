import React from "react";
import style from "./style/Banner.module.css";
import bannerImage from "assets/banner/banner-1.jpg";
import Image from "next/image";
import { Form, Select, Slider } from "antd";
import { BsSearch } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
const Banner = () => {
  const { Option } = Select;

  return (
    <section className={style.banner}>
      <div className="container">
        <div className={style.bannerInner}>
          <div className="row g-3">
            <div className="col-lg-6 col-md-12">
              <div className={style.bannerContent}>
                <h2 className={style.bannerTitle}>
                  Looking For a Home? Enjoy The Finest Homes
                </h2>
                <p className={style.bannerText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente amet voluptatibus voluptate at necessitatibus maxime,
                  veritatis quidem accusamus omnis fugit! Excepturi rem unde
                  ullam doloremque.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className={style.bannerImageWrapper}>
                <Image
                  src={bannerImage}
                  alt="banner"
                  width={700}
                  height={700}
                  className={style.bannerImage}
                />
              </div>
            </div>
          </div>
          <div className={style.bannerFade}></div>

          <div className={style.filterOptionWrapper}>
            <div className={style.filterOptions}>
              <button
                type="button"
                className={`${style.filterOption} ${style.activeOption}`}
              >
                {" "}
                <span className={style.filterOptionText}>RENT</span>
              </button>
              <button type="button" className={style.filterOption}>
                {" "}
                <span className={style.filterOptionText}>SELL</span>
              </button>
            </div>
            <div className={style.filterFormWrapper}>
              <Form
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              >
                <div className="row g-3 align-items-center">
                  <div className="col-lg-3 col-md-6">
                    <Form.Item>
                      <Select size="large" defaultValue="Select Location">
                        <Option value="germany">Germany</Option>
                        <Option value="france">France</Option>
                        <Option value="italy">Italy</Option>
                        <Option value="spain">Spain</Option>
                        <Option value="united-kingdom">United Kingdom</Option>
                        <Option value="united-states">United States</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <Form.Item>
                      <Select size="large" defaultValue="Property Type">
                        <Option value="apartment">Apartment</Option>
                        <Option value="house">House</Option>
                        <Option value="villa">Villa</Option>
                        <Option value="condo">Condo</Option>
                        <Option value="townhouse">Townhouse</Option>
                        <Option value="duplex">Duplex</Option>
                        <Option value="multi-family">Multi-Family</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="col-lg-6 col-md-6">
      
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex w-100 mx-2 flex-column">
                      <div className="d-flex justify-content-start align-items-center">
                        <FaRegMoneyBillAlt className={style.moneyIcon} />
                        <span className={style.moneyText}>$1,000 - $5,000</span>
                      </div>
                      <Form.Item>
                        <Slider range min={1000} max={5000} defaultValue={[1000, 5000]} />
                      </Form.Item>
                    </div>


                    <button type="submit" className={style.filterButton}>
                        <BsSearch className={style.filterBtn} />{" "}
                      </button>
                  </div>
       
                     
              
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
