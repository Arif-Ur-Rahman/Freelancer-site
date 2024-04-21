import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
// import SubNav from "../components/header/subnav/SubNav";
import TrendingService from "../components/trendingService/TraedingService";
import ExploreMarketPlace from "../components/explorMarketPlace/ExplorMarketPlace";
import WhyChoose from "../components/whyChoose/WhyChoose";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <SubNav /> */}
      <Hero />
      <TrendingService />
      <ExploreMarketPlace />
      <WhyChoose />
    </div>
  );
};

export default Home;
