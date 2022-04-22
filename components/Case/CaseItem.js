import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style/Case.module.css";
const CaseItem = ({ imageUrl, title }) => {
  return (
    <article className={style.caseItemInner}>
      <Link href="/case/[id]">
        <a className={style.caseItem}>
          <div className={style.caseItemImg}>
            <Image layout="responsive" src={imageUrl} className={style.caseImg} alt="..." />
          </div>
          <div className={style.caseItemText}>
            <h3 className={style.caseItemTitle}>{title}</h3>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default CaseItem;
