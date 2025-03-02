import React, { useEffect } from "react"; 
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";
import RecruiterSection from "../RecruiterSection/RecruiterSection";
import JobSeekerSection from "../JobSeekerSection/JobSeekerSection";
import Footer from "../Footer/Footer";




function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <HeroSection />
      </div>
      <JobSeekerSection />
      <RecruiterSection />
      <Footer />
      
     
    </>
  );
}

export default Home;
