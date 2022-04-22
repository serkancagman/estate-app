import React from "react";
import style from "./style/Partners.module.css";
import Image from "next/image";
import partnerA from "assets/partners/partner-1.png";
import partnerB from "assets/partners/partner-2.png";
import partnerC from "assets/partners/partner-3.png";
import partnerD from "assets/partners/partner-4.png";
import partnerE from "assets/partners/partner-5.png";
import partnerF from "assets/partners/partner-6.png";
import partnerG from "assets/partners/partner-7.png";
import partnerH from "assets/partners/partner-8.png";
import partnerI from "assets/partners/partner-9.png";
import partnerJ from "assets/partners/partner-10.png";
const Partners = () => {
  return (
    <section className={style.partners}>
      <div className="container">
        <h2 className={style.title}>
          We Only Work With The Best Companies Around The Globe
        </h2>
        <ul className={style.partnersList}>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerA} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerB} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerC} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerD} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerE} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerF} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerG} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerH} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerI} alt="partner" />
          </li>
          <li className={style.partnersItem}>
            <Image width={200} height={100} src={partnerJ} alt="partner" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Partners;
