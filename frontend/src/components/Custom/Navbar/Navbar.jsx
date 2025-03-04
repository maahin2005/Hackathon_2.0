import { useState } from "react";
import { Link } from "react-router-dom";
import RecruiterBTN from "../Buttons/RecruiterBTN";
import JobseekerBTN from "../Buttons/JobseekerBTN";
import Logo from "../Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-gray-900 p-4 transition-all duration-700">
      <div className="px-20 container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-8 items-center ml-auto">
          <RecruiterBTN />
          <JobseekerBTN />
          <Link to="/about" className="text-white hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/contactus" className="text-white hover:text-blue-500 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-900 text-white p-4 space-y-3 transition-all duration-700">
          <RecruiterBTN />
          <JobseekerBTN />
          <Link to="/about" className="block text-white hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/contactus" className="block text-white hover:text-blue-500 transition">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
