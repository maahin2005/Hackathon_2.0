import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function JobseekerBTN() {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleGithubLogin = () => {
    if (!isAuthenticated) {
      window.open(`${BASE_URL}/auth/github/callback`, "_self");
    }

    navigate("/jobseekers/dashboard");
  };
  return (
    <button
      onClick={handleGithubLogin}
      className="text-white hover:text-blue-500 cursor-pointer"
    >
      Find Your Dream Job
    </button>
  );
}

export default JobseekerBTN;
