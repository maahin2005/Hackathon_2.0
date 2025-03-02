import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full  z-50 bg-gradient-to-b from-black to-gray-900 p-4 transition-all duration-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold">MyLogo</a>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-blue-500">Find Your Dream Job</a>
          <a href="#" className="text-white hover:text-blue-500">Hire Top Talent</a>
         
 
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
          <a href="#" className="hover:text-blue-500">Find Your Dream Job</a>
          <a href="#" className="hover:text-blue-500">Hire Top Talent</a>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
