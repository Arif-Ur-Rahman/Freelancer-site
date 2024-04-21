import React from "react";
import "./header.css";
import logo from "../../assets/Images/logo.webp";
import searchIcon from "../../assets/Images/search-icon.svg";
import Nav from "./nav/Nav";
const Header = () => {
  return (
    <header className="theme-main-menu sticky-menu">
      <div className="inner-content position-relative">
        <div className="top-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <a className="d-flex align-items-center" href="/">
                <img
                  alt="logo"
                  fetchPriority="high"
                  width="119"
                  height="40"
                  decoding="async"
                  src={logo}
                />
              </a>
            </div>
            <form
              className="header-search position-relative d-none d-sm-block ms-lg-5 ms-md-3 order-lg-1"
              action="#"
            >
              <img
                alt="icon"
                loading="lazy"
                className="lazy-img icon"
                src={searchIcon}
              />
              <input type="text" placeholder="Search here.." />
              <div className="nice-select lg false" role="button" tabindex="0">
                <span className="current">Talents</span>
                <ul className="list" role="menubar">
                  <li
                    data-value="talents"
                    className="option selected focus"
                    role="menuitem"
                  >
                    Talents
                  </li>
                  <li
                    data-value="jobs"
                    className="option false"
                    role="menuitem"
                  >
                    Jobs
                  </li>
                </ul>
              </div>
            </form>
            <div className="right-widget ms-auto ms-xl-5 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li>
                  <a
                    href="/"
                    className="fw-500 login-btn-two"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </a>
                </li>
                <li className="d-none d-lg-block ms-4">
                  <a className="btn-five" href="/register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
