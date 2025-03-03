import React from "react";
import { FaEnvelope, FaPhone, FaBuilding ,FaMapMarkerAlt} from "react-icons/fa";

const recruiter = {
  id: "REC001",
  name: "Amit Sharma",
  company: "Tech Solutions Ltd.",
  email: "amit.sharma@techsolutions.com",
  phone: "+91 98765 43210",
  avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  active: true,
  location:"delhi"
};


const RecruiterCard = ({ recruiter }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 w-130 text-center border">
      {/* Badge */}
      <span
        className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded text-white ${
          recruiter.active ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {recruiter.active ? "Available" : "Unavailable"}
      </span>
      <div className="flex flex-row justify-between items-center mt-4 ">
        <div>
              {/* Avatar */}
            <img
                src={recruiter.avatar}
                alt="recruiter avatar"
                className="w-20 h-20 rounded-full border border-gray-300 mx-auto"
            />

            {/* Name and Company */}
            <h2 className="mt-3 text-lg font-semibold">{recruiter.name}</h2>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                <FaBuilding className="text-blue-500" /> {recruiter.company}
            </p>
        </div>
        <div>
              {/* Contact Details */}
      <div className="bg-blue-50  mt-4 p-4 rounded-lg text-left">
        <p className="text-gray-700">
          <strong>ID:</strong> {recruiter.id}
        </p>
        <p className="text-gray-700 flex items-center mt-2">
          <FaEnvelope className="mr-2 text-blue-500" /> {recruiter.email}
        </p>
        <p className="text-gray-700 mt-2 flex items-center">
          <FaPhone className="mr-2 text-blue-500" /> {recruiter.phone}
        </p>
        <p className="text-gray-700 mt-2 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-blue-500" /> {recruiter.location}
        </p>
        <a
          href="#"
          className="block mt-3 text-blue-500 hover:underline font-medium"
        >
          Contact Recruiter
        </a>
      </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterCard;
