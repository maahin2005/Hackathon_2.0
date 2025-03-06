import React from "react";
import { FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const companies = [
  {
    id: "COMP001",
    name: "Tech Solutions Ltd.",
    email: "contact@techsolutions.com",
    phone: "+91 98765 43210",
    logo: "https://via.placeholder.com/100",
    location: "Delhi",
    active: true,
  },
  {
    id: "COMP002",
    name: "InnovateX Pvt. Ltd.",
    email: "info@innovatex.com",
    phone: "+91 97654 32109",
    logo: "https://via.placeholder.com/100",
    location: "Bangalore",
    active: false,
  },
  {
    id: "COMP003",
    name: "FutureTech Inc.",
    email: "support@futuretech.com",
    phone: "+91 99887 76655",
    logo: "https://via.placeholder.com/100",
    location: "Mumbai",
    active: true,
  },
  {
    id: "COMP004",
    name: "Global Recruiters",
    email: "hr@globalrecruiters.com",
    phone: "+91 98980 54321",
    logo: "https://via.placeholder.com/100",
    location: "Hyderabad",
    active: true,
  }
];

const CompanyCard = ({ company }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 w-80 text-center border">
      {/* Badge */}
      <span
        className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded text-white ${
          company.active ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {company.active ? "Active" : "Inactive"}
      </span>
      
      {/* Logo */}
      <img
        src={company.logo}
        alt="company logo"
        className="w-20 h-20 rounded-full border border-gray-300 mx-auto"
      />
      
      {/* Company Name */}
      <h2 className="mt-3 text-lg font-semibold flex items-center justify-center gap-2">
        <FaBuilding className="text-blue-500" /> {company.name}
      </h2>
      
      {/* Contact Details */}
      <div className="bg-blue-50 mt-4 p-4 rounded-lg text-left">
        <p className="text-gray-700">
          <strong>ID:</strong> {company.id}
        </p>
        <p className="text-gray-700 flex items-center mt-2">
          <FaEnvelope className="mr-2 text-blue-500" /> {company.email}
        </p>
        <p className="text-gray-700 mt-2 flex items-center">
          <FaPhone className="mr-2 text-blue-500" /> {company.phone}
        </p>
        <p className="text-gray-700 mt-2 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-blue-500" /> {company.location}
        </p>
        <a
          href="#"
          className="block mt-3 text-blue-500 hover:underline font-medium"
        >
          More details
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;