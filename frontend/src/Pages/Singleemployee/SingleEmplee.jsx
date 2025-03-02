import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
const sampleEmployee = {
  name: "John Doe",
  email: "john.doe@example.com",
  githubUsername: "johndoe",
  profileImage: "https://avatars.githubusercontent.com/u/195257667?v=4",
  role: "Job Seeker",
  score: 85,
  topRepos: [
    {
      name: "React Portfolio",
      description: "A sleek and modern React portfolio template.",
      html_url: "https://github.com/johndoe/react-portfolio",
    },
    {
      name: "Node API",
      description: "REST API built with Node.js and Express.",
      html_url: "https://github.com/johndoe/node-api",
    },
  ],
  createdAt: "2025-03-02T10:20:10.835Z",
  updatedAt: "2025-03-02T12:45:30.835Z",
};
const EmployeeProfile = ({ employee = sampleEmployee }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex items-center gap-6">
        <img
          src={employee.profileImage}
          alt={employee.name}
          className="w-24 h-24 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{employee.name}</h1>
          <p className="text-gray-600 capitalize">{employee.role}</p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href={`mailto:${employee.email}`}
              className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              <FaEnvelope /> {employee.email}
            </a>
            <a
              href={`https://github.com/${employee.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              <FaGithub /> {employee.githubUsername}
            </a>
          </div>
        </div>
      </div>

      {/* Score Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold">Score</h2>
        <p className="text-xl font-bold">{employee.score}</p>
      </div>

      {/* Top Repositories Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Top Repositories</h2>
        {employee.topRepos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {employee.topRepos.map((repo, index) => (
              <div
                key={index}
                className="p-4 border rounded-md shadow-sm bg-gray-50"
              >
                <h3 className="font-semibold text-gray-800">{repo.name}</h3>
                <p className="text-gray-600">
                  {repo.description || "No description available"}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View Repository
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-2">No repositories available</p>
        )}
      </div>

      {/* Created & Updated At Section */}
      <div className="mt-6 text-gray-500 text-sm">
        <p>Created at: {new Date(employee.createdAt).toLocaleString()}</p>
        <p>Last updated: {new Date(employee.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
