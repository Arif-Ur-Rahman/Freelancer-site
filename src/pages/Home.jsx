import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import SubNav from "../components/header/subnav/SubNav";

const Home = () => {
  return (
    <div>
      <Header />
      <SubNav />
      <Hero />
    </div>
  );
};

export default Home;
