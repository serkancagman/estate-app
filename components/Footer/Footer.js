import React from "react";
import style from "./style/Footer.module.css";
import logo from "assets/logo/white-logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-3 col-md-6  col-12">
            <div className="d-flex flex-column align-items-start justify-content-center">
              <Image src={logo} alt="footer logo" width={125} height={50} />
              <p className={style.footerSloganText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatibus, culpa cumque, dignissimos delectus vel architecto,
                quasi dolorem nesciunt facere aspernatur sit suscipit. Nobis,
                illo?
              </p>

              <div className={style.socialIcons}>
                <Link href="/#">
                  <a className={style.footerSocialLink}>
                    <FaFacebookF className={style.socialIcon} />
                  </a>
                </Link>
                <Link href="/#">
                  <a className={style.footerSocialLink}>
                    <FaTwitter className={style.socialIcon} />
                  </a>
                </Link>
                <Link href="/#">
                  <a className={style.footerSocialLink}>
                    <FaInstagram className={style.socialIcon} />
                  </a>
                </Link>
                <Link href="/#">
                  <a className={style.footerSocialLink}>
                    <FaPinterest className={style.socialIcon} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  col-12">
            <h3 className={style.footerTitle}>Explore</h3>
            <div className="d-flex justify-content-between">
              <ul className={style.footerList}>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>Home</a>
                  </Link>
                </li>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>About</a>
                  </Link>
                </li>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>Contact</a>
                  </Link>
                </li>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>Blog</a>
                  </Link>
                </li>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>Shop</a>
                  </Link>
                </li>
              </ul>
              <ul className={style.footerList}>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>Home</a>
                  </Link>
                </li>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>About</a>
                  </Link>
                </li>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>Contact</a>
                  </Link>
                </li>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>Blog</a>
                  </Link>
                </li>
                <li className={style.footerListItem}>
                  <Link href="/">
                    <a className={style.footerListLink}>Shop</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  col-12">
            <h3 className={style.footerTitle}>Contact</h3>

            <ul className={style.footerList}>
              <li className={style.footerListItem}>
                <div className="d-flex align-items-start justify-content-start">
                  <HiOutlineLocationMarker className={style.footerListIcon} />
                  <span className={style.footerListLink}>
                    48 Brooke Street, New York United States of America
                  </span>
                </div>
              </li>
              <li className={style.footerListItem}>
                <div className="d-flex align-items-start justify-content-start">
                  <BsFillTelephoneFill className={style.footerListIcon} />
                  <Link href="tel:+000123456789">
                    <a className={style.footerListLink}>+000 123 456 789</a>
                  </Link>
                </div>
              </li>
              <li className={style.footerListItem}>
                <div className="d-flex align-items-start justify-content-start">
                  <FiMail className={style.footerListIcon} />
                  <Link href="mailto:cagmanserkann@gmail.com">
                    <a className={style.footerListLink}>
                      cagmanserkann@gmail.com
                    </a>
                  </Link>
                </div>
              </li>
              <li className={style.footerListItem}>
                <div className="d-flex align-items-start justify-content-start">
                  <MdAccessTime className={style.footerListIcon} />
                  <Link href="/">
                    <a className={style.footerListLink}>
                      9 AM - 5 PM (Sun-Thur)
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6  col-12">
            <h3 className={style.footerTitle}>Newsletter</h3>
            <div className={style.formArea}>
              <form>
                <input
                  type="email"
                  className={style.footerInput}
                  placeholder="Email Address"
                />
                <button type="submit" className={style.footerSubmitBtn}>
                  <FiMail className={style.footerSubmitIcon} />
                </button>
              </form>
            </div>
            <p className={style.footerText}>
              Sign up for our latest news and articles. We won’t give you spam
              emails.
            </p>
          </div>
        </div>
        <div className={style.footerBottom}>
          <h3 className={style.footerTitle}>
            {" "}
            &copy; 2020 All rights reserved by{" "}
            <span className={style.byTitle}>Serkan Çağman</span>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
