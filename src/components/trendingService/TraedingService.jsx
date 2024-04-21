import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import bg1 from "../../assets/Images/trendingServiceBg/trending-bg2.jpg";
import bg2 from "../../assets/Images/trendingServiceBg/trending-bg1.jpg";
import bg3 from "../../assets/Images/trendingServiceBg/trending-bg3.jpg";
import bg4 from "../../assets/Images/trendingServiceBg/trending-bg4.jpg";
const TrendingService = () => {
  const TrendingService = [
    {
      title: "Business",
      subTile: "Marketing.",
      bgImage: bg1,
    },
    {
      title: "Programming &",
      subTile: "Code",
      bgImage: bg2,
    },
    {
      title: "Video Edition &",
      subTile: "3D work",
      bgImage: bg3,
    },
    {
      title: "Design &",
      subTile: "Development.",
      bgImage: bg4,
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
              <div className="slick-track" style={{ width: "400%" }}>
                {TrendingService.map((service, index) => (
                  <div
                    key={index}
                    data-index="-4"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "6.25%" }}
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
