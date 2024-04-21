import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
// import SubNav from "../components/header/subnav/SubNav";
import TrendingService from "../components/trendingService/TraedingService";
import ExploreMarketPlace from "../components/explorMarketPlace/ExplorMarketPlace";
import WhyChoose from "../components/whyChoose/WhyChoose";
import BusinessSolution from "../components/businessSolution/BusinessSolution";
import Inspiration from "../components/inspiration/Inspiration";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <SubNav /> */}
      <Hero />
      <TrendingService />
      <ExploreMarketPlace />
      <WhyChoose />
      <BusinessSolution />
      <Inspiration />
    </div>
  );
};

export default Home;
