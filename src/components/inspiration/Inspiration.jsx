import React from "react";

const Inspiration = () => {
  return (
    <section className="fancy-banner-three mt-75 lg-mt-50">
      <div className="container">
        <div className="bg-wrapper position-relative wow fadeInUp">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
              <div className="text-wrapper wow fadeInRight">
                <a
                  className="fancybox rounded-circle video-icon tran3s d-flex align-items-center justify-content-center"
                  //   style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-play-fill"></i>
                </a>
                <div className="title-one mt-35 lg-mt-30 mb-30 lg-mb-20">
                  <h2 className="fw-600 text-white">
                    Let’s get started It’s
                    <span style={{ color: "#00bf58" }}>simple.</span>
                  </h2>
                </div>
                <p className="text-white">
                  Get access to our top 1% talent as well as a complete set of
                  hybrid workforce management tools.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-content position-relative">
            <div className="row gx-xxl-5 justify-content-between">
              <div className="col-lg-4">
                <div className="d-flex mt-20 wow fadeInUp">
                  <div className="count fw-500 rounded-circle text-white d-flex align-items-center justify-content-center">
                    1
                  </div>
                  <div className="ps-4 text">
                    <div className="fw-500 text-white text-lg mb-10">
                      It’s take 2 minutes to open an account.
                    </div>
                    <a className="fw-500 text-uppercase" href="/register">
                      Open Acount
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex mt-20 wow fadeInUp">
                  <div className="count fw-500 rounded-circle text-white d-flex align-items-center justify-content-center">
                    2
                  </div>
                  <div className="ps-4 text">
                    <div className="fw-500 text-white text-lg mb-10">
                      Find talents or search your desire work.
                    </div>
                    <a className="fw-500 text-uppercase" href="/register">
                      Apply job or hire
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex mt-20 wow fadeInUp">
                  <div className="count fw-500 rounded-circle text-white d-flex align-items-center justify-content-center">
                    3
                  </div>
                  <div className="ps-4 text">
                    <div className="fw-500 text-white text-lg mb-10">
                      Get work done quickly with jobi gatweay.
                    </div>
                    <a className="fw-500 text-uppercase" href="/register">
                      Payment Method
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
