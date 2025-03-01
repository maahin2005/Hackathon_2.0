import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <HeroSection />
      </div>
    </>
  );
}

export default Home;
