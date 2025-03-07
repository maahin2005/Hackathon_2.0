import React, { useState } from "react";
import Navbar from "./../components/Custom/Navbar/Navbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "../components/Custom/Footer/Footer";

function Login() {
  const params = new URLSearchParams(window.location.search);
  const error = params.get("error");
  const [activeTab, setActiveTab] = useState("Recruiter");
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  if (error) {
    try {
      alert(decodeURIComponent(error));
    } catch (e) {
      console.log("No any decoding URI:", e);
    }
  }

  const handleGithubLogin = () => {
    if (!isAuthenticated) {
      window.open(`${BASE_URL}/auth/github/callback`, "_self");
    }
  };

  const handleGoogleLogin = () => {
    if (!isAuthenticated) {
      window.location.href = `${BASE_URL}/auth/google`;
    }
  };

  const handleLogin = (activatedTab) => {
    if (activatedTab === "Recruiter") {
      handleGoogleLogin();
    }
    if (activatedTab === "Jobseeker") {
      handleGithubLogin();
    }
  };

  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    if (role === "recruiter") {
      return <Navigate to="/recruiter/dashboard" />;
    }
    if (role === "jobseeker") {
      return <Navigate to="/jobseeker/dashboard" />;
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6">
        <div className="bg-white p-6 py-10 h-auto rounded-xl shadow-lg text-center w-full max-w-lg">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
            Login As {activeTab}
          </h1>
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab("Recruiter")}
              className={`cursor-pointer px-6 py-2 text-sm sm:text-lg font-medium border-b-4 transition w-1/2 ${
                activeTab === "Recruiter"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              Recruiter
            </button>
            <button
              onClick={() => setActiveTab("Jobseeker")}
              className={`cursor-pointer px-6 py-2 text-sm sm:text-lg font-medium border-b-4 transition w-1/2 ${
                activeTab === "Jobseeker"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              Jobseeker
            </button>
          </div>
          <button
            className={`cursor-pointer w-full sm:w-3/4 px-6 my-5 py-3 rounded-full text-lg font-medium text-white transition ${
              activeTab === "Recruiter"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={() => handleLogin(activeTab)}
          >
            Continue as {activeTab}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
