import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RecruiterBTN() {
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleGoogleLogin = () => {
    if (!isAuthenticated) {
      window.location.href = `${BASE_URL}/auth/google`;
    } else {
      navigate("/recruiter/dashboard");
    }
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="text-white hover:text-blue-500 cursor-pointer"
    >
      Hire Top Talents
    </button>
  );
}

export default RecruiterBTN;
