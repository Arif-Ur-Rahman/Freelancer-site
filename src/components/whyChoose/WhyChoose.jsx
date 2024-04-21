import React from "react";
import chooseUsLeft from "../../assets/Images/whyChoice/chooiceusempoly.webp";
import chooseUsSearch from "../../assets/Images/whyChoice/chooseussearch.webp";
import shape from "../../assets/Images/whyChoice/shape25..svg";
const WhyChoose = () => {
  return (
    <section className="text-feature-three position-relative pt-225 xl-pt-200 lg-pt-150 md-pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-last ms-auto">
            <div className="wow fadeInRight">
              <div className="title-two">
                <div className="sub-title">Why choose us?</div>
                <h2 className="fw-600 color-blue">
                  World of talent at your fingertips
                </h2>
              </div>
              <div
                className="accordion accordion-style-one color-two mt-40"
                id="accordionOne"
              >
                <div className="accordion-item">
                  <div className="accordion-header" id="heading-one">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-one"
                      aria-expanded="true"
                      aria-controls="collapse-one"
                    >
                      Seamless Search
                    </button>
                  </div>
                  <div
                    id="collapse-one"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading-one"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="accordion-body">
                      <p>
                        It only takes 5 minutes. Set-up is smooth and simple,
                        with fully customisable page design to reflect your
                        brand. It only takes 5 minutes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="heading-two">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-two"
                      aria-expanded="false"
                      aria-controls="collapse-two"
                    >
                      Hire top talents
                    </button>
                  </div>
                  <div
                    id="collapse-two"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-two"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="accordion-body">
                      <p>
                        Practice what you learned on realistic lorem quis test
                        questions testing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="heading-three">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-three"
                      aria-expanded="false"
                      aria-controls="collapse-three"
                    >
                      Protected payments, every time
                    </button>
                  </div>
                  <div
                    id="collapse-three"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-three"
                    data-bs-parent="#accordionOne"
                  >
                    <div className="accordion-body">
                      <p>
                        It only takes 5 minutes. Set-up is smooth and simple,
                        with fully customisable page design to reflect your
                        brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn-five mt-45 lg-mt-20" href="/">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="img-box position-relative rounded-circle d-flex align-items-center justify-content-center wow fadeInLeft">
              <img
                alt="screen"
                loading="lazy"
                width="550"
                height="510"
                decoding="async"
                data-nimg="1"
                className="lazy-img"
                // style="color: transparent"
                src={chooseUsLeft}
              />
              <img
                alt="screen"
                loading="lazy"
                width="628"
                height="190"
                decoding="async"
                data-nimg="1"
                className="lazy-img shapes screen_02"
                // style="color: transparent"
                src={chooseUsSearch}
              />
              <img
                alt="shape"
                loading="lazy"
                width="32"
                height="24"
                decoding="async"
                data-nimg="1"
                className="lazy-img shapes shape_01"
                // style="color: transparent"
                src={shape}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
