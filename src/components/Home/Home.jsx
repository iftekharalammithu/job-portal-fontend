import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "./HeroSection";
import Catagory from "./Catagory";
import LatestJobs from "./LatestJobs";
import Footer from "../Footer/Footer";
import useGetAllJobs from "../Hooks/useGetAllJobs";

const Home = () => {
  useGetAllJobs();
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
