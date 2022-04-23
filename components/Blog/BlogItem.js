import Image from "next/image";
import React from "react";
import style from "./style/Blog.module.css";
import { AiOutlineCalendar } from "react-icons/ai";
const BlogItem = ({ imgUrl, title, date, owner, personImg, stateType }) => {
  return (
    <article className={style.blogItem}>
      <div className={style.blogItemInner}>
        <div className={style.blogItemImg}>
          <Image
            src={imgUrl}
            alt="blog"
            fill="responsive"
            className={style.itemImg}
          />
        </div>
        <div className={style.blogItemTag}>
          <span className={style.blogItemTagText}>{stateType}</span>
        </div>
        <div className={style.blogItemHeader}>
          <h3 className={style.blogItemTitle}>{title}</h3>
        </div>
      </div>
      <div className={style.blogItemFooter}>
        <div className={style.blogItemFooterLeft}>
          <Image
            src={personImg}
            alt="person"
            width={50}
            height={50}
            className={style.ownerImg}
          />
          <span className={style.blogItemOwner}>{owner}</span>
        </div>
        <div className={style.blogItemFooterRight}>
          <AiOutlineCalendar className={style.blogItemIcon} />
          <span className={style.blogItemDate}>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
