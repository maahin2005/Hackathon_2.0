import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons

const employee = {
  id: "EMP004",
  name: "Neha Verma",
  specialization: "Project Manager",
  email: "neha.verma@example.com",
  phone: "+91 65432 10987",
  avatar: "https://randomuser.me/api/portraits/women/75.jpg",
  active: true,
};

const EmployeeCard = ({ employee }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 w-80 text-center border border-gray-200">
      {/* Badge */}
      <span
        className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-full text-white ${
          employee.active ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {employee.active ? "Active" : "Inactive"}
      </span>

      {/* Avatar */}
      <img
        src={employee.profileImage}
        alt="Employee Avatar"
        className="w-20 h-20 mx-auto rounded-full border border-gray-300"
      />

      {/* Name & Specialization */}
      <h2 className="mt-3 text-lg font-semibold">{employee.name}</h2>
      <p className="text-sm text-gray-500">{employee.specialization}</p>

      {/* Inner Box */}
      <div className="mt-4 bg-blue-50 p-4 rounded-lg text-left">
        <p className="text-gray-700">
          <strong>GithubID:</strong> {employee.googleId}
        </p>
        <p className="flex items-center text-gray-700 mt-2">
          <FaEnvelope className="mr-2 text-blue-500" /> {employee.email}
        </p>
        <p className="flex items-center text-gray-700 mt-2">
          <FaPhone className="mr-2 text-blue-500" /> {employee.phone}
        </p>
        <a href="#" className="block mt-3 text-blue-500 font-medium hover:underline">
          View More Details
        </a>
      </div>
    </div>
  );
};

export default EmployeeCard;
