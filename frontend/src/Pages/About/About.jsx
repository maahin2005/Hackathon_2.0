import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../../components/Custom/Navbar/Navbar";
import Footer from "../../components/Custom/Footer/Footer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="py-20 min-h-screen h-[800px] flex flex-col items-center justify-center p-8 text-center">
        <div className="text-center w-full py-8 ">
          <h1 className="font-[Kanit] text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl font-medium w-3/4 m-auto text-gray-500 mb-12 leading-relaxed">
            We are a passionate team dedicated to revolutionizing the hiring
            process using cutting-edge technology. Our platform leverages
            AI-driven search and seamless integration to connect recruiters with
            top talent efficiently.
          </p>

          <h2 className="text-5xl font-[Kanit] font-bold mb-12 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-3/4 m-auto">
            {teamMembers.map(({ name, role, website, github, linkedin }) => (
              <div
                key={name}
                className="p-8 backdrop-blur-lg rounded-2xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-3xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border border-white border-opacity-10"
              >
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{role}</p>
                  <div className="flex space-x-6 mt-4">
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const teamMembers = [
  {
    name: "Mahin",
    role: "API Integration & Full Stack",
    website: "https://mahin.vercel.app/",
    github: "https://github.com/maahin2005",
    linkedin: "https://www.linkedin.com/in/mahin1112/",
  },
  {
    name: "Amit Kumar Murmu",
    role: "Backend & Performance Optimization",
    website: "https://akmurmudeveloper.vercel.app/",
    github: "https://github.com/akmurmu82",
    linkedin: "https://www.linkedin.com/in/amit-kumar-murmu82/",
  },
  {
    name: "Shivani Pandey",
    role: "UI/UX Design & Frontend",
    website: "https://shivanipandey-protfolio.netlify.app/",
    github: "https://github.com/shivanipandey5678",
    linkedin: "https://www.linkedin.com/in/shivani-pandey-029600288/",
  },
];

export default AboutUs;
