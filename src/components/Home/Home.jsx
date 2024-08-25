import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "./HeroSection";
import Catagory from "./Catagory";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Catagory></Catagory>
    </div>
  );
};

export default Home;
