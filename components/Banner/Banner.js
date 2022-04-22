import React from "react";
import style from "./style/Banner.module.css";
import bannerImage from "assets/banner/banner-1.jpg";
import Image from "next/image";
import { Form, Select, Slider } from "antd";
import { BsSearch } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useFormik } from "formik";
const Banner = () => {
  const [stateType, setStateType] = React.useState("rent");
  const [slideValue, setSlideValue] = React.useState(0);
  const [sellSlideValue, setSellSlideValue] = React.useState(0);
  const [propertyValue, setPropertyValue] = React.useState("");
  const [locationValue, setLocationValue] = React.useState("");
  const { Option } = Select;

console.log(slideValue);

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
                className={`${style.filterOption} ${stateType === "rent" && style.activeOption}`}
                onClick={() => setStateType("rent")}
              >
                {" "}
                <span className={style.filterOptionText}>RENT</span>
              </button>
              <button
                onClick={() => setStateType("sell")}
                type="button" className={`${style.filterOption} ${stateType === "sell" && style.activeOption}`}>
                {" "}
                <span className={style.filterOptionText}>SELL</span>
              </button>
            </div>
            <div className={` ${style.filterFormWrapper} ${stateType === "rent" && style.filterFormRent}`}>
              <Form
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
                
              >
                <div className="row g-3 align-items-center">
                  <div className="col-lg-3 col-md-6">
                    <Form.Item>
                      <Select onChange={(value) => setLocationValue(value)} size="large" defaultValue="Select Location">
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
                      <Select onChange={(value) => setPropertyValue(value)} size="large" defaultValue="Property Type">
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
                          <span className={style.moneyText}>
                            ${slideValue[0] || 1000} - ${slideValue[1] || 5000}
                          </span>
                        </div>
                        <Form.Item>
                          <Slider
                            onChange={(value) => setSlideValue(value)}
                            range
                            min={1000}
                            max={5000}
                            defaultValue={[1000, 5000]}
                          />
                        </Form.Item>
                      </div>

                      <button onClick={null} type="submit" className={style.filterButton}>
                        <BsSearch className={style.filterBtn} />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>

            <div className={` ${style.filterFormWrapper} ${stateType === "sell" && style.filterFormSell}`}>
              <Form
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
                
              >
                <div className="row g-3 align-items-center">
                  <div className="col-lg-3 col-md-6">
                    <Form.Item>
                      <Select onChange={(value) => setLocationValue(value)} size="large" defaultValue="Select Location">
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
                      <Select onChange={(value) => setPropertyValue(value)} size="large" defaultValue="Property Type">
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
                          <span className={style.moneyText}>
                          ${sellSlideValue[0] || 100000} - ${sellSlideValue[1] || 900000}
                          </span>
                        </div>
                        <Form.Item>
                          <Slider
                            onChange={(value) => setSellSlideValue(value)}
                            range
                            min={100000}
                            max={900000}
                            defaultValue={[100000, 900000]}
                          />
                        </Form.Item>
                      </div>

                      <button onClick={null} type="submit" className={style.filterButton}>
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
