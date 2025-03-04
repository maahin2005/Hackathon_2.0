

import React from "react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8 text-center">
      <div className="max-w-4xl p-8 bg-white bg-opacity-20 backdrop-blur-md shadow-2xl rounded-2xl text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600">About Us</h1>
      <p className="text-extrabold  text-xl text-gray-900 max-w-3xl mb-8">
          We are a passionate team dedicated to revolutionizing the hiring process using 
          cutting-edge technology. Our platform leverages AI-driven search and seamless integration 
          to connect recruiters with top talent efficiently.
        </p>

        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
          {teamMembers.map(({ name, role, website, github, linkedin }) => (
            <div 
              key={name} 
              className="p-6  backdrop-blur-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-40 bg-gradient-to-bl from-gray-700 via-gray-800 to-gray-900"
            >
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white">{name}</h3>
                <p className="text-gray-200 text-sm mb-3">{role}</p>
                <div className="flex space-x-4 mt-3">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-700">
                    <FaLinkedin />
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-2xl hover:text-gray-700">
                    <FaGithub />
                  </a>
                  <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-700">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
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
