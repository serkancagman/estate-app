import React from "react";
import style from "./style/AboutServices.module.css";
import serviceIcon from "assets/services/facilities-1.png";
import serviceIconTwo from "assets/services/facilities-2.png";
import serviceIconThree from "assets/services/facilities-3.png";
import serviceIconFour from "assets/services/facilities-4.png";
import serviceIconFive from "assets/services/facilities-5.png";
import serviceIconSix from "assets/services/facilities-6.png";
import Image from "next/image";
const AboutServices = () => {
  return (
    <section className={style.aboutServices}>
      <div className="container">
        <div className={style.aboutServicesHeader}>
          <h2 className={style.aboutServicesTitle}>Facilities of Our Fido</h2>
          <p className={style.aboutServicesSubTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ab
            nobis reprehenderit doloremque vel, similique asperiores quisquam
            debitis possimus excepturi!
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className={style.aboutServicesItem}>
              <div className="d-flex justify-content-start align-items-center">
                <div className={style.serviceImgWrapper}>
                    <Image
                  src={serviceIcon}
                  alt="service-1"
                   width={50}
                  height={45}
                  className={style.aboutServicesIcon}
                />
                </div>
                <h5 className={style.aboutServicesTitle}> No Revenue Loss </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={style.aboutServicesItem}>
              <div className="d-flex justify-content-start align-items-center">
                <div className={style.serviceImgWrapper}>
                    <Image
                  src={serviceIconTwo}
                  alt="service-2"
                  width={50}
                  height={45}
                  className={style.aboutServicesIcon}
                />
                </div>
                <h5 className={style.aboutServicesTitle}>
                  6 Month Free Service{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={style.aboutServicesItem}>
              <div className="d-flex justify-content-start align-items-center">
                <div className={style.serviceImgWrapper}>
                    <Image
                  src={serviceIconThree}
                  alt="service-3"
                   width={50}
                  height={45}
                  className={style.aboutServicesIcon}
                />
                </div>
                <h5 className={style.aboutServicesTitle}>24/7 Service</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={style.aboutServicesItem}>
              <div className="d-flex justify-content-start align-items-center">
                <div className={style.serviceImgWrapper}>
                    <Image
                  src={serviceIconFour}
                  alt="service-2"
                   width={50}
                  height={45}
                  className={style.aboutServicesIcon}
                />
                </div>
                <h5 className={style.aboutServicesTitle}>Low Price</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={style.aboutServicesItem}>
              <div className="d-flex justify-content-start align-items-center">
                <div className={style.serviceImgWrapper}>
                    <Image
                  src={serviceIconFive}
                  alt="service-2"
                   width={50}
                  height={45}
                  className={style.aboutServicesIcon}
                />
                </div>
                <h5 className={style.aboutServicesTitle}>Value Relationship</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={style.aboutServicesItem}>
              <div className="d-flex justify-content-start align-items-center">
                <div className={style.serviceImgWrapper}>
                    <Image
                  src={serviceIconSix}
                  alt="service-2"
                   width={50}
                  height={45}
                  className={style.aboutServicesIcon}
                />
                </div>
                <h5 className={style.aboutServicesTitle}>Easy Installment</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
