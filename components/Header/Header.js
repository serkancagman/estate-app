import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style/Header.module.css";
import logo from "assets/logo/white-logo.png";
import { Dropdown, Menu } from "antd";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item >
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className={style.header}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link href="/">
            <a className={style.logo}>
              <Image src={logo} alt="logo" width={130} height={50} />
            </a>
          </Link>
          <button
            className={style.hamburgerBtn}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            <AiOutlineMenu className={style.hamburgerIcon} />
          </button>
          <Dropdown overlay={menu}>
            <BsFillPersonFill className={style.userIcon} />
          </Dropdown>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className={`navbar-nav mx-auto ${style.navbarMobile}`}>
              <li className={`nav-item mx-2 ${style.navItemMobile}`}>
                <Link href="/">
                  <a className={style.navLink}>Home</a>
                </Link>
              </li>
              <li className={`nav-item mx-2 ${style.navItemMobile}`}>
                <Link href="/blog">
                  <a className={style.navLink}>Blog</a>
                </Link>
              </li>
              <li className={`nav-item mx-2 ${style.navItemMobile}`}>
                <Link href="/agents">
                  <a className={style.navLink}>Agents</a>
                </Link>
              </li>
              <li className={`nav-item mx-2 ${style.navItemMobile}`}>
                <Link href="/about">
                  <a className={style.navLink}>About</a>
                </Link>
              </li>
              <li className={`nav-item mx-2 ${style.navItemMobile}`}>
                <Link href="/contact">
                  <a className={style.navLink}>Contact</a>
                </Link>
              </li>
              <li className={`nav-item mx-2 ${style.navItemMobile}`}>
                <Link href="/testimonials">
                  <a className={style.navLink}>Testimonials</a>
                </Link>
              </li>
            </ul>
            <form>
              <div className={style.searchInputWrapper}>
              <input
                type="text"
                className={style.searchInput}
                placeholder="Search"
              />
              <button type="submit" className={style.searchButton}>
                {" "}
                <BsSearch className={style.searchIcon} />
              </button>
              </div>
            </form>
          </div>
         
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
