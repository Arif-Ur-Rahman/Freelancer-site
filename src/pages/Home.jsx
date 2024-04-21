import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import SubNav from "../components/header/subnav/SubNav";
import TrendingService from "../components/trendingService/TraedingService";

const Home = () => {
  return (
    <div>
      <Header />
      <SubNav />
      <Hero />
      <TrendingService />
    </div>
  );
};

export default Home;
