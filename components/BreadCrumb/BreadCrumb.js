import Image from "next/image";
import Link from "next/link";
import breadImage from "assets/breadcrumb/page-banner.png";
import React from "react";
import style from "./style/BreadCrumb.module.css";
const BreadCrumb = ({ secondTitle, currentTitle }) => {
  return (
    <section className={style.breadCrumb}>
      <div className="container">
        <div className="row g-3">
          <div className="col-md-6">
            <div className={style.breadCrumbInner}>
              <h3 className={style.breadCrumbTitle}>{currentTitle}</h3>
              <div className={style.breadCrumbTitleArea}>
                <Link href="/">
                  <a className={style.breadCrumbLink}>Home</a>
                </Link>
                {secondTitle && currentTitle ? (
                  <>
                    <Link href={`/${secondTitle.toLowerCase()}`}>
                      <a className={style.breadCrumbLinkTitle}>{secondTitle}</a>
                    </Link>
                    <span className={style.breadCrumbLinkTitle}>{currentTitle}</span>
                  </>
                ) : (
                  <span className={style.breadCrumbLinkTitle}>{currentTitle}</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Image src={breadImage} fill="responsive" alt="breadcrumb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
