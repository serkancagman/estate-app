import React from "react";
import style from "./style/Articles.module.css";
import articleImg from "assets/article/category-1.png";
import articleImg2 from "assets/article/category-2.png";
import articleImg3 from "assets/article/category-3.png";
import articleImg4 from "assets/article/category-4.png";
import articleImg5 from "assets/article/category-5.png";
import articleImg6 from "assets/article/category-6.png";
import Image from "next/image";
import Link from "next/link";
const Articles = () => {
  return (
    <section className={style.articles}>
      <div className="container">
        <div className="row g-3">
          <div className="col-6 col-md-2 col-lg-2">
            <div className={style.articleItem}>
              <Link href="/#">
                <a>
                  <Image
                    src={articleImg}
                    alt="article"
                    width={60}
                    height={60}
                  />
                  <div className={style.articleItemTitle}>Apartments</div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-2 col-lg-2">
            <div className={style.articleItem}>
              <Link href="/#">
                <a>
                  <Image
                    src={articleImg2}
                    alt="article"
                    width={60}
                    height={60}
                  />
                  <div className={style.articleItemTitle}>Houses</div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-2 col-lg-2">
            <div className={style.articleItem}>
              <Link href="/#">
                <a>
                  <Image
                    src={articleImg3}
                    alt="article"
                    width={60}
                    height={60}
                  />
                  <div className={style.articleItemTitle}>Daily Rental</div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-2 col-lg-2">
            <div className={style.articleItem}>
              <Link href="/#">
                <a>
                  <Image
                    src={articleImg4}
                    alt="article"
                    width={60}
                    height={60}
                  />
                  <div className={style.articleItemTitle}>Commercial</div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-2 col-lg-2">
            <div className={style.articleItem}>
              <Link href="/#">
                <a>
                  <Image
                    src={articleImg5}
                    alt="article"
                    width={60}
                    height={60}
                  />
                  <div className={style.articleItemTitle}>Office</div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-2 col-lg-2">
            <div className={style.articleItem}>
              <Link href="/#">
                <a>
                  <Image
                    src={articleImg6}
                    alt="article"
                    width={60}
                    height={60}
                  />
                  <div className={style.articleItemTitle}>New Buildings</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
