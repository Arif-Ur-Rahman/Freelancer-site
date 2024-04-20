import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg p0 ms-3 ms-lg-auto order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <a className="d-block" href="/">
                <img
                  alt="logo"
                  fetchPriority="high"
                  width="100"
                  height="34"
                  decoding="async"
                  data-nimg="1"
                  //   style="color: transparent; height: auto"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_04.42350b2e.png&amp;w=256&amp;q=75"
                />
              </a>
            </div>
          </li>
          <li className="d-sm-none xs-mb-20">
            <form className="header-search position-relative" action="#">
              <img
                alt="icon"
                loading="lazy"
                width="16"
                height="17"
                decoding="async"
                data-nimg="1"
                className="lazy-img icon"
                // style="color: transparent"
                src="/_next/static/media/icon_21.7fdd8d82.svg"
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
          </li>
          <li className="nav-item dropdown d-lg-none">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Browse Categories
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Design &amp;Creative
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  It &amp;Development
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Trending
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Web &amp;Mobile Dev
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Writing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Sales &amp;Marketing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Music &amp;Audio
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Video &amp;Animation
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  AI Services
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Photography
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/job-grid-v3">
                  Programming &amp;Tech
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" role="button" href="/job-list-v2">
              Find Job
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" role="button" href="/candidates-v2">
              Find Talents
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/about-us">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/pricing">
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/faq">
                  <span>Faq</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/register">
                  <span>Register</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/notfound">
                  <span>404 Error</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="d-lg-none mt-5">
            <a className="btn-five w-100" href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
