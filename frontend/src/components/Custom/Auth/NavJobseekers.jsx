import React, { useState } from "react";
import Logo from "../Logo";
// import Logo from "../Logo";
import JobseekerBTN from "../../Custom/Buttons/JobseekerBTN";

function NavJobseekers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full  z-50 bg-gradient-to-b from-black to-gray-900 p-4 transition-all duration-700">
      <div className="px-20 container mx-auto flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex space-x-8">
          <JobseekerBTN />
          <a
            href={`${import.meta.env.VITE_BACKEND_URL}/auth/logout`}
            className="text-white "
          >
            Logout
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-900 text-white p-4 space-y-3 transition-all duration-700">
          <JobseekerBTN />
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

export default NavJobseekers;
