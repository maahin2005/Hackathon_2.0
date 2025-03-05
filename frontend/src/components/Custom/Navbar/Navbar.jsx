import { useState } from "react";
import RecruiterBTN from "../Buttons/RecruiterBTN";
import JobseekerBTN from "../Buttons/JobseekerBTN";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full  z-50 bg-black p-4 border-b-1 border-gray-200 ">
      <div className="px-4 container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Logo />

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <RecruiterBTN />
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
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl "
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
