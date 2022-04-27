import React from "react";
import style from "./style/Testimonials.module.css";
import { Rate } from "antd";
import Image from "next/image";
const TestimonialItem = ({ imgUrl, title, rate,job }) => {
  return (
    <div className={style.testimonialsCard}>
      <div className={style.testimonialsCardInner}>
        <div className={style.testimonialsCardImg}>
          <Image
            className={style.personImg}
            src={imgUrl}
            width={100}
            height={100}
          />
        </div>
        <h4 className={style.testimonialsCardName}>{title}</h4>
        <p className={style.testimonialsCardJob}>{job}</p>
        <p className={style.testimonialsCardDesignation}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fugiat
          soluta aliquam aut id error.
        </p>
        <Rate
          className={style.testimonialsCardRate}
          allowHalf
          defaultValue={rate}
        />
      </div>
    </div>
  );
};

export default TestimonialItem;
