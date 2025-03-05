import React, { useState } from "react";
import Logo from "../Logo";
import RecruiterBTN from "../Buttons/RecruiterBTN";

function NavRecruiters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full  z-50 bg-gradient-to-b from-black to-gray-900 p-4 transition-all duration-700">
      <div className="px-20 container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-8 cursor-pointer">
          <RecruiterBTN />
          <a
            href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}
            className="text-white  cursor-pointer"
          >
            Logout
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center justify-center 
    bg-transparent backdrop-blur-lg backdrop-brightness-125 text-white 
    p-6 space-y-4 rounded-lg shadow-xl transition-all duration-700 border-3 border-gray-400">
          <RecruiterBTN />
          <a
            href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}
            className="text-white "
          >
            Logout
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavRecruiters;
