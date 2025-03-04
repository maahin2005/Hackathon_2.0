import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import FetchScore from "../../Jobseeker/ImproveScore/ImproveScore";
import CandidateGithubData from "./CandidateGithubData";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const CandidateProfile = ({ candidate, isCandidate = false }) => {
  const { bio, experienceInYear, heading, areasOfExpertise } = candidate;

  return (
    <div className="relative my-20 max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
      {/* Header Section */}
      <Link to="/jobseeker/profile/edit">
        <FaEdit className="absolute top-3 right-3 text-3xl cursor-pointer" />
      </Link>

      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-200">
        <img
          src={candidate.githubProfile || "https://github.com"}
          alt={candidate.candidateName}
          className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {candidate.candidateName}
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 text-gray-700">
            <a
              href={`mailto:${candidate.email}`}
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <FaEnvelope className="w-5 h-5" /> {candidate.email}
            </a>
            <a
              href={`https://github.com/${candidate.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <FaGithub className="w-5 h-5" /> {candidate.githubUsername}
            </a>
          </div>
          <p className="mt-3 text-gray-600 text-lg font-medium">{heading}</p>
        </div>
      </div>

      {/* BIO Section */}
      {bio && (
        <div className="my-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">About Me</h2>
          <p className="text-gray-700 mt-2 text-lg">{bio}</p>
        </div>
      )}

      {/* Experience Section */}
      {experienceInYear > 0 && (
        <div className="my-6">
          <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
          <p className="text-gray-700 text-lg">
            {experienceInYear} years of experience
          </p>
        </div>
      )}

      {/* Score Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-center shadow-md">
        <h2 className="text-xl font-semibold">Github Standard Commits Score</h2>
        <p className="text-4xl font-bold mt-2">{candidate.score}</p>
      </div>
      {/* Areas of Expertise */}
      {areasOfExpertise?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {areasOfExpertise.map((expertise, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md"
              >
                {expertise}
              </span>
            ))}
          </div>
        </div>
      )}

      {isCandidate && <FetchScore githubUsername={candidate.githubUsername} />}
      <CandidateGithubData githubUsername={candidate.githubUsername} />

      {/* Created & Updated At Section */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-gray-500 text-sm">
        <p>Created at: {new Date(candidate.createdAt).toLocaleString()}</p>
        <p>Last updated: {new Date(candidate.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CandidateProfile;
