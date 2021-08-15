import React from "react";
import HomeSection from "../../components/Home";
import Navbar from "../../components/Navbar";
import News from "../../components/News";
import Prices from "../../components/Prices";

const Home = () => {
  return (
    <>
      <HomeSection />
      <News />
      <Prices />
    </>
  );
};

export default Home;
