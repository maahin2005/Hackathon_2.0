import React, { useEffect } from "react"; // ✅ Import useEffect
import AOS from "aos"; // ✅ Corrected import
import "aos/dist/aos.css"; // Import AOS styles

import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";
import RecruiterSection from "../RecruiterSection/RecruiterSection";
import JobSeekerSection from "../JobSeekerSection/JobSeekerSection";
import Footer from "../Footer/Footer";
import EmployeeProfile from "../../Pages/Singleemployee/SingleEmplee"; // ✅ Ensure correct import path

const sampleEmployee = {
  name: "John Doe",
  email: "john.doe@example.com",
  githubUsername: "johndoe",
  profileImage: "https://avatars.githubusercontent.com/u/195257667?v=4",
  role: "Job Seeker",
  score: 85,
  topRepos: [
    {
      name: "React Portfolio",
      description: "A sleek and modern React portfolio template.",
      html_url: "https://github.com/johndoe/react-portfolio",
    },
    {
      name: "Node API",
      description: "REST API built with Node.js and Express.",
      html_url: "https://github.com/johndoe/node-api",
    },
  ],
  createdAt: "2025-03-02T10:20:10.835Z",
  updatedAt: "2025-03-02T12:45:30.835Z",
};

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
