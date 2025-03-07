import React, { useState } from "react";
import Logo from "../Logo";
import JobseekerBTN from "../../Custom/Buttons/JobseekerBTN";
import { Link } from "react-router-dom";

function NavJobseekers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full  z-50 bg-gradient-to-b from-black to-gray-900 p-4 transition-all duration-700">
      <div className="px-4 container mx-auto flex justify-between items-center ">
        <Logo />

        <div className="hidden md:flex space-x-8">
          <JobseekerBTN />
          <Link
            to="/about-us"
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="/contact-us"
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            Contact us
          </Link>
          <a
            href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}
            className="text-white "
          >
            Logout
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center justify-center 
        bg-transparent backdrop-blur-lg backdrop-brightness-125 text-white 
        p-6 space-y-4 rounded-lg shadow-xl transition-all duration-700 border-3 border-gray-400 
        hover:bg-white/10 hover:backdrop-blur-xl hover:border-gray-200 hover:shadow-2xl">
      <JobseekerBTN />
          <Link
            to="/about-us"
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="/contact-us"
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            Contact us
          </Link>
          <a
            href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}
            className="text-white  cursor-pointer"
          >
            Logout
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavJobseekers;
