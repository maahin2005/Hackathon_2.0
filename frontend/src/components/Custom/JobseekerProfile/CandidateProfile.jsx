import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import FetchScore from "../../jobseeker/ImproveScore/ImproveScore";

const CandidateProfile = ({ candidate }) => {
  return (
    <div className="my-20 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex items-center gap-6">
        <img
          src={candidate.githubProfile || "https://github.com"}
          alt={candidate.candidateName}
          className="w-32 h-32 rounded-full border"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            {candidate.candidateName}
          </h1>
          {/* <p className="text-gray-600 capitalize">{candidate.role}</p> */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href={`mailto:${candidate.email}`}
              className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              <FaEnvelope /> {candidate.email}
            </a>
            <a
              href={`https://github.com/${candidate?.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              <FaGithub />
              {candidate?.githubUsername}
            </a>
          </div>
        </div>
      </div>

      {/* Score Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold">Score</h2>
        <p className="text-xl font-bold">{candidate.score}</p>
      </div>

      {/* FetchScore Component */}
      {candidate?.githubUsername && (
        <FetchScore githubUsername={candidate?.githubUsername} />
      )}

      {/* Top Repositories Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Top Repositories</h2>
        {candidate.topRepos?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {candidate.topRepos.map((repo, index) => (
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
        <p>Created at: {new Date(candidate.createdAt).toLocaleString()}</p>
        <p>Last updated: {new Date(candidate.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CandidateProfile;
