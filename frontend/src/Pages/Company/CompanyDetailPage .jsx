import React from "react";
import { FaBuilding, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUsers, FaDollarSign, FaIndustry, FaGlobe } from "react-icons/fa";

const company = {
  name: "MediTech Healthcare",
  companyProfile: "https://example.com/meditech-logo.png",
  address: {
    street: "789 Health Avenue",
    city: "New York",
    state: "New York",
    postalCode: "10001",
    country: "USA",
  },
  contact: {
    phone: "+1 212-456-7890",
    email: "contact@meditech.com",
    website: "https://www.meditech.com",
  },
  industry: "Healthcare",
  foundedYear: 2000,
  employees: 1000,
  revenue: 100000000,
  isPublic: true,
  tags: ["Medical Technology", "Healthcare", "Pharmaceuticals"],
};

const CompanyDetailPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-12 border border-gray-200">
      {/* Top Header */}
      <header className="text-center text-4xl font-bold text-white bg-black py-4 rounded-t-lg">Company Detail Page</header>
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6 mt-6">
        {/* Company Logo */}
        <img src={company.companyProfile} alt="Company Logo" className="w-40 h-40 rounded-lg shadow-md border border-gray-300" />
        
        {/* Company Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
            <FaBuilding className="text-blue-600" /> {company.name}
          </h1>
          <p className="text-gray-500 text-lg mt-2">{company.industry} Industry</p>
          <p className="mt-1 text-md text-gray-500">Founded in {company.foundedYear}</p>
        </div>
      </div>

      {/* Company Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 flex items-center text-lg">
          <FaMapMarkerAlt className="mr-2 text-blue-600" /> {company.address.street}, {company.address.city}, {company.address.state}, {company.address.country}
        </p>
        <p className="text-gray-700 flex items-center text-lg">
          <FaEnvelope className="mr-2 text-blue-600" /> <a href={`mailto:${company.contact.email}`} className="hover:underline">{company.contact.email}</a>
        </p>
        <p className="text-gray-700 flex items-center text-lg">
          <FaPhone className="mr-2 text-blue-600" /> {company.contact.phone}
        </p>
        <p className="text-gray-700 flex items-center text-lg">
          <FaUsers className="mr-2 text-blue-600" /> {company.employees.toLocaleString()} Employees
        </p>
        <p className="text-gray-700 flex items-center text-lg">
          <FaDollarSign className="mr-2 text-blue-600" /> Revenue: ${company.revenue.toLocaleString()}
        </p>
        <p className="text-gray-700 flex items-center text-lg">
          <FaIndustry className="mr-2 text-blue-600" /> {company.isPublic ? "Publicly Traded" : "Privately Owned"}
        </p>
        <p className="text-gray-700 flex items-center text-lg">
          <FaGlobe className="mr-2 text-blue-600" /> <a href={company.contact.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">{company.contact.website}</a>
        </p>
      </div>

      {/* Tags Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Tags</h2>
        <div className="flex flex-wrap gap-3 mt-3">
          {company.tags.map((tag, index) => (
            <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 text-md rounded-full shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
