import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "./HeroSection";
import Catagory from "./Catagory";
import LatestJobs from "./LatestJobs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Catagory></Catagory>
      <LatestJobs></LatestJobs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
