import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const ProfileUpdateForm = () => {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    bio: "",
    experienceInYear: 0,
    heading: "",
    areasOfExpertise: [],
    userId: "",
  });

  const getCandidateData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobseekers/me`, {
        withCredentials: true,
      });

      if (res.data?.success) {
        const { name, bio, experienceInYear, heading, areasOfExpertise, _id } =
          res.data?.data;

        setUserData({
          name,
          bio,
          experienceInYear,
          heading,
          areasOfExpertise,
          userId: _id,
        });
      }
    } catch (error) {
      console.error("Error fetching candidate data:", error);
    }
  };

  useEffect(() => {
    getCandidateData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle areas of expertise input
  const handleAreasOfExpertiseChange = (e) => {
    const { value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      areasOfExpertise: value.split(",").map((item) => item.trim()),
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${BASE_URL}/users/update/${userData.userId}`,
        userData,
        {
          withCredentials: true,
        }
      );
      console.log("User updated successfully:", response.data);
      if (response.data.success) {
        alert("Profile updated successfully!");
        navigate("/jobseeker/dashboard");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="relative max-w-2xl my-20 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <Link to="/jobseeker/dashboard">
        <RiArrowGoBackFill className="absolute top-3 right-3 text-3xl cursor-pointer" />
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Update Your Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            rows="4"
            className="max-h-80 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Experience in Years */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Experience (in years)
          </label>
          <input
            type="number"
            name="experienceInYear"
            value={userData.experienceInYear}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Heading */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Heading
          </label>
          <input
            type="text"
            name="heading"
            value={userData.heading}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Areas of Expertise */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Areas of Expertise (comma-separated)
          </label>
          <input
            type="text"
            name="areasOfExpertise"
            value={userData.areasOfExpertise.join(", ")}
            onChange={handleAreasOfExpertiseChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;
