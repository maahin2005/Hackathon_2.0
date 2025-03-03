import { useState } from "react";
import starsBackground from "../../assets/star2.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [activeRole, setActiveRole] = useState("recruiter");
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const { isAuthenticated } = useSelector((state) => state.auth);
  const naviagate = useNavigate();
  const handleGithubLogin = () => {
    if (!isAuthenticated) {
      window.open(`${BASE_URL}/auth/github/callback`, "_self");
    }

    naviagate("/dashboard");
  };

  const handleGoogleLogin = () => {
    if (!isAuthenticated) {
      window.location.href = `${BASE_URL}/auth/google`;
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col md:flex-row items-center justify-around text-white p-8"
      style={{
        backgroundImage: `url(${starsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Buttons Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center gap-6 ">
        <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
          {/* Recruiter Button */}
          <button
            onMouseEnter={() => setActiveRole("recruiter")}
            className={`w-full md:w-64 px-6 py-3 text-lg font-semibold border-2 rounded-lg transition-all duration-500 ease-in-out ${
              activeRole === "recruiter"
                ? "border-blue-600 text-white bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 shadow-lg shadow-blue-500/50"
                : "border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 hover:shadow-lg hover:shadow-blue-500/40"
            }`}
          >
            I'm a Recruiter
          </button>

          {/* Job Seeker Button */}
          <button
            onMouseEnter={() => setActiveRole("jobseeker")}
            className={`w-full md:w-64 px-6 py-3 text-lg font-semibold border-2 rounded-lg transition-all duration-500 ease-in-out ${
              activeRole === "jobseeker"
                ? "border-green-600 text-white bg-gradient-to-r from-green-700 via-green-600 to-green-800 shadow-lg shadow-green-500/50"
                : "border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 hover:shadow-lg hover:shadow-green-500/40"
            }`}
          >
            I'm a Job Seeker
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div
        className={`w-full md:w-2/3 h-[90%] lg:h-[51vh] flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-lg transition-all duration-700 ease-in-out bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 backdrop-blur-md`}
      >
        {activeRole === "recruiter" ? (
          <>
            <h1 className="text-3xl font-bold text-blue-600">
              Find the Best Talent!
            </h1>
            <p className="mt-4 text-lg text-white max-w-lg">
              Need top candidates? Our platform helps you find skilled
              professionals easily and quickly.
            </p>
            <button
              onClick={handleGoogleLogin}
              className="mt-6 px-6 py-3 text-lg font-bold rounded-lg transition-all duration-500 ease-in-out 
                          bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white 
                          shadow-md shadow-blue-500/50 border-2 border-transparent 
                          hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700 hover:to-blue-900 
                          hover:shadow-lg hover:shadow-blue-500/40 hover:border-blue-400"
            >
              Get Started
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-green-600">
              Get Your Dream Job!
            </h1>
            <p className="mt-4 text-lg text-white max-w-lg">
              Looking for work? Apply to top companies and take the next step in
              your career.
            </p>
            <button
              onClick={handleGithubLogin}
              className="mt-6 px-6 py-3 text-lg font-bold rounded-lg transition-all duration-500 ease-in-out 
                          bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white 
                          shadow-md shadow-green-500/50 border-2 border-transparent 
                          hover:bg-gradient-to-r hover:from-green-800 hover:via-green-700 hover:to-green-900 
                          hover:shadow-lg hover:shadow-green-500/40 hover:border-green-400"
            >
              Explore Jobs
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
