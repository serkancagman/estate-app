import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Form, Select, Slider } from "antd";
import style from "./style/Filterbar.module.css";
const Filterbar = () => {
  const [stateType, setStateType] = React.useState("rent");
  const [slideValue, setSlideValue] = React.useState(0);
  const [sellSlideValue, setSellSlideValue] = React.useState(0);
  const [propertyValue, setPropertyValue] = React.useState("");
  const [locationValue, setLocationValue] = React.useState("");
  const { Option } = Select;
  
  return (
    <div className="container">

    
    <div className={style.filterOptionWrapper}>
      <div className={style.filterOptions}>
        <button
          type="button"
          className={`${style.filterOption} ${
            stateType === "rent" && style.activeOption
          }`}
          onClick={() => setStateType("rent")}
        >
          {" "}
          <span className={style.filterOptionText}>RENT</span>
        </button>
        <button
          onClick={() => setStateType("sell")}
          type="button"
          className={`${style.filterOption} ${
            stateType === "sell" && style.activeOption
          }`}
        >
          {" "}
          <span className={style.filterOptionText}>SELL</span>
        </button>
      </div>
      <div
        className={` ${style.filterFormWrapper} ${
          stateType === "rent" && style.filterFormRent
        }`}
      >
        <Form
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <div className="row g-3 align-items-center">
            <div className="col-lg-3 col-md-6">
              <Form.Item>
                <Select
                  onChange={(value) => setLocationValue(value)}
                  size="large"
                  defaultValue="Select Location"
                >
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
                <Select
                  onChange={(value) => setPropertyValue(value)}
                  size="large"
                  defaultValue="Property Type"
                >
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

                <button
                  onClick={null}
                  type="submit"
                  className={style.filterButton}
                >
                  <BsSearch className={style.filterBtn} />{" "}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>

      <div
        className={` ${style.filterFormWrapper} ${
          stateType === "sell" && style.filterFormSell
        }`}
      >
        <Form
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <div className="row g-3 align-items-center">
            <div className="col-lg-3 col-md-6">
              <Form.Item>
                <Select
                  onChange={(value) => setLocationValue(value)}
                  size="large"
                  defaultValue="Select Location"
                >
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
                <Select
                  onChange={(value) => setPropertyValue(value)}
                  size="large"
                  defaultValue="Property Type"
                >
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
                      ${sellSlideValue[0] || 100000} - $
                      {sellSlideValue[1] || 900000}
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

                <button
                  onClick={null}
                  type="submit"
                  className={style.filterButton}
                >
                  <BsSearch className={style.filterBtn} />{" "}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default Filterbar;
