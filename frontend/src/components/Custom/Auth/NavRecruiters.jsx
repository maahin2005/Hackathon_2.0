// Recruiter Navbar
import React, { useState } from "react";
import Logo from "../Logo";
import RecruiterBTN from "../Buttons/RecruiterBTN";
import { Link } from "react-router-dom";

function NavRecruiters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-gray-900 p-4 transition-all duration-700">
      <div className="px-4 container mx-auto flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex space-x-8">
          <RecruiterBTN />
          <Link to="/recruiter/dashboard" className="text-white hover:text-blue-500">Dashboard</Link>
          <Link to="/recruiter/hire-talent" className="text-white hover:text-blue-500">Hire Talent</Link>
          <Link to="/recruiter/candidate-profile" className="text-white hover:text-blue-500">Candidate Profile</Link>
          <Link to="/companies" className="text-white hover:text-blue-500">Companies</Link>
          <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`} className="text-white">Logout</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">☰</button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-transparent backdrop-blur-lg text-white p-6 space-y-4 rounded-lg shadow-xl">
          <RecruiterBTN />
          <Link to="/recruiter/dashboard" className="text-white hover:text-blue-500">Dashboard</Link>
          <Link to="/recruiter/hire-talent" className="text-white hover:text-blue-500">Hire Talent</Link>
          <Link to="/recruiter/candidate-profile" className="text-white hover:text-blue-500">Candidate Profile</Link>
          <Link to="/companies" className="text-white hover:text-blue-500">Companies</Link>
          <a href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`} className="text-white">Logout</a>
        </div>
      )}
    </nav>
  );
}

export default NavRecruiters;
