import { useState } from "react";
import starsBackground from "../../../assets/stars.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [activeRole, setActiveRole] = useState("recruiter");
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleGithubLogin = () => {
    if (!isAuthenticated) {
      window.open(`${BASE_URL}/auth/github/callback`, "_self");
    }
    navigate("/jobseeker/dashboard");
  };

  const handleGoogleLogin = () => {
    if (!isAuthenticated) {
      window.location.href = `${BASE_URL}/auth/google`;
    }
    navigate("/recruiter/dashboard");
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between text-white p-6 md:p-8 overflow-hidden"
      style={{
        backgroundImage: `url(${starsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Left Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center gap-4 md:gap-6">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Connecting Talent with Opportunity
        </h2>

        <p className="text-gray-200 text-2xl md:text-4xl font-[Kanit] text-center italic">
          {activeRole === "recruiter"
            ? "Great hires build great companies."
            : "Your next opportunity is just a step away."}
        </p>

        <button
          onMouseEnter={() => setActiveRole("recruiter")}
          className={`w-full md:w-64 cursor-pointer px-4 py-2 text-base md:text-lg font-semibold border-2 rounded-3xl transition-all duration-500 ${
            activeRole === "recruiter"
              ? "border-blue-600 bg-blue-700 text-white shadow-lg"
              : "border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400"
          }`}
        >
          I'm a Recruiter
        </button>

        <button
          onMouseEnter={() => setActiveRole("jobseeker")}
          className={`w-full md:w-64 cursor-pointer px-4 py-2 text-base md:text-lg font-semibold border-2 rounded-3xl transition-all duration-500 ${
            activeRole === "jobseeker"
              ? "border-green-600 bg-green-700 text-white shadow-lg"
              : "border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400"
          }`}
        >
          I'm a Job Seeker
        </button>
      </div>

      {/* Right Section */}
      <div
        className={`w-full md:w-1/2 min-h-[50vh] md:min-h-[65vh] flex flex-col items-center justify-center text-center p-6 md:p-12 shadow-lg overflow-auto transition-all duration-700 bg-gradient-to-br rounded-xl ${
          activeRole === "recruiter"
            ? "from-blue-800 via-blue-700 to-blue-950"
            : "from-green-800 via-green-700 to-green-950"
        }`}
      >
        {activeRole === "recruiter" ? (
          <div className="p-6 md:p-8 bg-gray-900 border-gray-700 w-full h-full flex flex-col items-center gap-4 justify-center text-center rounded-lg">
            <h1 className="text-2xl md:text-4xl font-[Kanit] text-blue-400">
              Find & Hire Top Talent Effortlessly!
            </h1>
            <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto">
              Unlock a world of skilled professionals and build your dream team with ease.
            </p>
            <button
              onClick={handleGoogleLogin}
              className="cursor-pointer px-4 py-1 text-sm md:text-md font-semibold rounded-full transition-all duration-500 bg-blue-700 text-white shadow-lg"
            >
              Get Started!
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8 bg-gray-900 border-gray-700 w-full h-full flex flex-col items-center gap-4 justify-center text-center rounded-lg">
            <h1 className="text-2xl md:text-4xl font-extrabold text-green-400">
              Land Your Dream Job Today!
            </h1>
            <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto">
              Discover exciting opportunities, apply to top companies, and take the next big leap in your career.
            </p>
            <button
              onClick={handleGithubLogin}
              className="cursor-pointer px-4 py-1 text-sm md:text-md font-semibold rounded-full transition-all duration-500 bg-green-700 text-white shadow-lg"
            >
              Explore Jobs 🌟
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;