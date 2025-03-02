import React, { useEffect } from "react"; // Import useEffect
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";
import RecruiterSection from "../RecruiterSection/RecruiterSection";
import JobSeekerSection from "../JobSeekerSection/JobSeekerSection";
import Footer from "../Footer/Footer";
import App from "../EmployeeCard/EmployeeCard";
import App2 from "../Recruiter Card/RecruiterCard";

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
      
      <App2/>
    </>
  );
}

export default Home;
