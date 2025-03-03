import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons

const CandidateCard = ({ candidate }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 w-[350px] text-center">
      {/* Badge */}
      <span
        className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-full text-white ${
          candidate.active ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {candidate.active ? "Active" : "Inactive"}
      </span>

      {/* Avatar */}
      <img
        src={candidate.profileImage}
        alt="candidate Avatar"
        className="w-24 h-24 mx-auto rounded-full border border-gray-300"
      />

      {/* Name & Specialization */}
      <h2 className="mt-3 text-lg font-semibold">{candidate.name}</h2>
      {/* <p className="text-sm text-gray-500">{candidate.specialization}</p> */}

      {/* Inner Box */}
      <div className="mt-4 bg-blue-50 p-4 rounded-lg text-left">
        <p className="text-gray-700">
          <strong>Standard Github SCORE:</strong> {candidate.score}/100
        </p>
        <p className="flex items-center gap-2 text-gray-700 mt-2">
          <FaEnvelope className="text-2xl text-blue-500" /> {candidate.email}
        </p>
        {/* <p className="flex items-center text-gray-700 mt-2">
          <FaPhone className="mr-2 text-blue-500" /> {candidate.phone}
        </p> */}
        <a
          href="#"
          className="block mt-3 text-blue-500 font-medium hover:underline"
        >
          View More Details
        </a>
      </div>
    </div>
  );
};

export default CandidateCard;
