import React from "react";

const SubNav = () => {
  return (
    <nav className="category-menu d-none d-lg-block">
      <ul className="style-none nav-item d-flex align-items-center justify-content-between">
        <li>
          <a href="/job-grid-v3">Design &amp;Creative</a>
        </li>
        <li>
          <a href="/job-grid-v3">It &amp;Development</a>
        </li>
        <li>
          <a href="/job-grid-v3">Trending</a>
        </li>
        <li>
          <a href="/job-grid-v3">Web &amp;Mobile Dev</a>
        </li>
        <li>
          <a href="/job-grid-v3">Writing</a>
        </li>
        <li>
          <a href="/job-grid-v3">Sales &amp;Marketing</a>
        </li>
        <li>
          <a href="/job-grid-v3">Music &amp;Audio</a>
        </li>
        <li>
          <a href="/job-grid-v3">Video &amp;Animation</a>
        </li>
        <li className="dropdown">
          <a
            href="/"
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
      </ul>
    </nav>
  );
};

export default SubNav;
