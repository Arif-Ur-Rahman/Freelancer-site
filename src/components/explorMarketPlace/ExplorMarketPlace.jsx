import React from "react";
import explore1 from "../../assets/Images/explore/icon63.svg";
import explore2 from "../../assets/Images/explore/icon64.svg";
import explore3 from "../../assets/Images/explore/icon65..svg";
import explore4 from "../../assets/Images/explore/icon68.svg";
import explore5 from "../../assets/Images/explore/icon66.svg";
import explore6 from "../../assets/Images/explore/icon67.svg";
const ExploreMarketPlace = () => {
  const ExploreMarketPlace = [
    {
      title: "UI/UX Design",
      totalJob: "12k+ job",
      image: explore1,
    },
    {
      title: "Development",
      totalJob: "7k+ Jobs",
      image: explore2,
    },
    {
      title: "Telemarketing",
      totalJob: "310k+ Jobs",
      image: explore3,
    },
    {
      title: "Marketing",
      totalJob: "420k+ Jobs",
      image: explore4,
    },
    {
      title: "Editing",
      totalJob: "3k+ Jobs",
      image: explore5,
    },
    {
      title: "Accounting",
      totalJob: "150k+ Jobs",
      image: explore6,
    },
  ];
  return (
    <section class="category-section-one position-relative">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-8">
            <div class="title-three">
              <h2 class="wow fadeInUp fw-600 color-blue" data-wow-delay="0.3s">
                Explore the marketplace.
              </h2>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex justify-content-lg-end">
              <a class="btn-six d-none d-lg-inline-block" href="/job-grid-v2">
                Explore all fields
              </a>
            </div>
          </div>
        </div>
        <div class="card-wrapper row justify-content-center mt-45 lg-mt-30">
          {ExploreMarketPlace.map((explore, index) => (
            <div
              key={index}
              class="card-style-one text-center mt-20 wow fadeInUp"
            >
              <a class="wrapper " data-wow-delay="0.2s" href="/job-grid-v3">
                <div class="icon d-flex align-items-center justify-content-center">
                  <img
                    alt="icon"
                    loading="lazy"
                    width="21"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    class="lazy-img"
                    style={{ color: "transparent" }}
                    src={explore.image}
                  />
                </div>
                <div class="title fw-500">{explore.title}</div>
                <div class="total-job">{explore.totalJob}</div>
              </a>
            </div>
          ))}
        </div>
        <div class="text-center mt-40 d-lg-none">
          <a class="btn-six" href="/job-grid-v2">
            Explore all fields
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreMarketPlace;
