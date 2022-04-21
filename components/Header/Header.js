import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./style/Header.module.css";
import logo from "assets/logo/white-logo.png";
import { Dropdown, Menu } from "antd";
import { BsFillPersonFill,BsSearch } from "react-icons/bs";

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
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
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-2">
                <Link href="/">
                  <a className={style.navLink}>Home</a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/blog">
                  <a className={style.navLink}>Blog</a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/agents">
                  <a className={style.navLink}>Agents</a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/about">
                  <a className={style.navLink}>About</a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/contact">
                  <a className={style.navLink}>Contact</a>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/testimonials">
                  <a className={style.navLink}>Testimonials</a>
                </Link>
              </li>
            </ul>
           
          </div>
          <form className="position-relative">
              <input
                type="text"
                className={style.searchInput}
                placeholder="Search"
              />
              <button type="submit" className={style.searchButton}>
                {" "}
                <BsSearch className={style.searchIcon} />
              </button>
            </form>
            <Dropdown overlay={menu}>
              <BsFillPersonFill className={style.userIcon} />
            </Dropdown>
        </nav>
      </div>
    </header>
  );
};

export default Header;
