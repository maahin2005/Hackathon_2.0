import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import Footer from "../Custom/Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import JobSeekerSection from "./JobSeekerSection/JobSeekerSection";
import RecruiterSection from "./RecruiterSection/RecruiterSection";
import Navbar from "./../Custom/Navbar/Navbar";
import CompanyFilterNavbar from "../Recruiter/companyfilterheader";
import CompanyDetailPage from "../../Pages/Company/CompanyDetailpage";
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
      <CompanyDetailPage/>
    </>
  );
}

export default Home;
