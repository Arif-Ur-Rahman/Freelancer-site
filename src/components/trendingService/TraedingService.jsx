import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const TrendingService = () => {
  const TrendingService = [
    {
      title: "Business",
      subTile: "Marketing.",
      bgImage: "image",
    },
  ];
  return (
    <section className="category-section-three pt-85 pb-140 lg-pb-100">
      <div className="container">
        <div className="position-relative">
          <div className="title-two mb-60 lg-mb-40">
            <h2
              className="fw-600 color-blue wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Trending Services
            </h2>
          </div>
          <div
            className="slick-slider card-wrapper category-slider-one row slick-initialized"
            dir="ltr"
          >
            <div className="slick-list">
              <div className="slick-track">
                {TrendingService.map((service, index) => (
                  <div
                    key={index}
                    data-index="-4"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                  >
                    <div>
                      <div
                        className="item"
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-Block" }}
                      >
                        <div
                          className="card-style-six position-relative"
                          style={{ backgroundImage: `url(${service.bgImage})` }}
                        >
                          <a
                            className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                            href="/"
                          >
                            <div className="title text-white fw-500 text-lg">
                              {service.title} <br /> {service.subTile}
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  data-index="-3"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{ width: "6.25%" }}
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_19.93ec8f12.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Business <br />
                            Development.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="-2"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  // style="width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_18.bfe28328.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Programming &amp;
                            <br />
                            Code
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="-1"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  // style="width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_16.42102f6a.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Video Edition <br />
                            &amp;3D work
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="0"
                  className="slick-slide slick-active slick-current"
                  tabindex="-1"
                  aria-hidden="false"
                  // style="outline: none; width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_16.42102f6a.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Design &amp;
                            <br />
                            Development.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="1"
                  className="slick-slide slick-active"
                  tabindex="-1"
                  aria-hidden="false"
                  // style="outline: none; width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_17.31b5cbce.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Customer Help <br />
                            &amp;Sales.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="2"
                  className="slick-slide slick-active"
                  tabindex="-1"
                  aria-hidden="false"
                  // style="outline: none; width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_18.bfe28328.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Business <br />
                            Marketing.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="3"
                  className="slick-slide slick-active"
                  tabindex="-1"
                  aria-hidden="false"
                  // style="outline: none; width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_19.93ec8f12.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Business <br />
                            Development.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="4"
                  className="slick-slide"
                  tabindex="-1"
                  aria-hidden="true"
                  // style="outline: none; width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_18.bfe28328.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Programming &amp;
                            <br />
                            Code
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="5"
                  className="slick-slide"
                  tabindex="-1"
                  aria-hidden="true"
                  // style="outline: none; width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_16.42102f6a.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Video Edition <br />
                            &amp;3D work
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="6"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  // style="width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_16.42102f6a.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Design &amp;
                            <br />
                            Development.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="7"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  // style="width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_17.31b5cbce.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Customer Help <br />
                            &amp;Sales.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="8"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  // style="width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_18.bfe28328.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Business <br />
                            Marketing.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="9"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  // style="width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_19.93ec8f12.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Business <br />
                            Development.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="10"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  // style="width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_18.bfe28328.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Programming &amp;
                            <br />
                            Code
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="11"
                  tabindex="-1"
                  className="slick-slide slick-cloned"
                  aria-hidden="true"
                  // style="width: 6.25%"
                >
                  <div>
                    <div
                      className="item"
                      tabindex="-1"
                      // style="width: 100%; display: inline-block"
                    >
                      <div
                        className="card-style-six position-relative"
                        // style="background-image: url(/_next/static/media/img_16.42102f6a.jpg);"
                      >
                        <a
                          className="w-100 h-100 ps-4 pb-20 d-flex align-items-end"
                          href="/job-grid-v3"
                        >
                          <div className="title text-white fw-500 text-lg">
                            Video Edition <br />
                            &amp;3D work
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none sm-mt-20">
            <li className="prev_d slick-arrow">
              <FaArrowCircleLeft />
            </li>
            <li className="next_d slick-arrow">
              <FaArrowCircleRight />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrendingService;
