"use client"
import { Fragment, useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { jaraUtilits } from "../utility";

const SocialIcon = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="#">
            <i className="icon-facebook-1" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-twitter-1" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-instagram-1" />
          </a>
        </li>
      </ul>
    </div>
  );
};

const ModifiedHeader = () => {
  const menus = [
    { id: 1, title: "Hoe", href: "/" },
    { id: 2, title: "A", href: "/" },
    { id: 3, title: "Pt", href: "project" },
    { id: 5, title: "Blg", href: "blog" },
  ];
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    jaraUtilits.scrollSection();
    window.addEventListener("scroll", jaraUtilits.scrollSection);
  }, []);
  return (
    <Fragment>
      {/* MOBILE MENU */}
      <div className="jara_tm_mobile_menu bg-black/80">
        <div className="mobile_menu_inner bg-black/70">
          <div className="mobile_in">
            <div className="logo">
              <a href="#">
                <img src="img/logo/logo.png" alt="" />
              </a>
            </div>
            <div className="trigger">
              <div
                className={`hamburger hamburger--slider ${
                  toggle ? "is-active" : ""
                }`}
                onClick={() => setToggle(!toggle)}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="dropdown"
          style={{ display: toggle ? "block" : "none" }}
        >
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a href={`#${menu.href}`}>{menu.title}</a>
                </li>
              ))}
            </ul>
            <SocialIcon />
          </div>
        </div>
      </div>
      {/* /MOBILE MENU */}
      {/* HEADER */}
      <div className="jara_tm_header bg-black/80 ">
        <div className="logo">
          <a href="#">
            <img src="img/logo/logo.png" alt="" />
          </a>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            {menus.map((menu) => (
              <li key={menu.id}>
                <a className="text_hover_gradient" href={`#${menu.href}`}>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ThemeSwitcher/>
        <SocialIcon />
      </div>
      {/* /HEADER */}
    </Fragment>
  );
};
export default ModifiedHeader;
