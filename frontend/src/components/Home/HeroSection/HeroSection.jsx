import { useState } from "react";
import starsBackground from "../../.././assets/stars.jpg";
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

    naviagate("/jobseekers/dashboard");
  };

  const handleGoogleLogin = () => {
    if (!isAuthenticated) {
      window.location.href = `${BASE_URL}/auth/google`;
    }
    naviagate("/recruiter/dashboard");
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
      <div className="w-full md:w-1/3 flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-white">
          Connecting Talent with Opportunity
        </h2>

        {/* Quote Section */}
        <p className="text-gray-200  text-4xl font-[Kanit] text-center italic">
          {activeRole === "recruiter"
            ? "Great hires build great companies."
            : "Your next opportunity is just a step away."}
        </p>

        {/* Recruiter Button */}
        <button
          onMouseEnter={() => setActiveRole("recruiter")}
          className={`w-full md:w-80 cursor-pointer px-6 py-2 text-xl font-semibold border-2 rounded-3xl transition-all duration-500 ease-in-out ${
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
          className={`w-full md:w-80 cursor-pointer px-6 py-2 text-xl font-semibold border-2 rounded-3xl transition-all duration-500 ease-in-out ${
            activeRole === "jobseeker"
              ? "border-green-600 text-white bg-gradient-to-r from-green-700 via-green-600 to-green-800 shadow-lg shadow-green-500/50"
              : "border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 hover:shadow-lg hover:shadow-green-500/40"
          }`}
        >
          I'm a Job Seeker
        </button>
      </div>

      {/* Info Section */}
      <div
        className={`w-full md:w-1/2 min-h-80 h-[70vh] mt-10  flex flex-col items-center justify-center text-center p-5 shadow-lg transition-all duration-700 ease-in-out bg-gradient-to-br  backdrop-blur-md ${
          activeRole === "recruiter"
            ? "from-blue-800 via-blue-700 to-blue-950 "
            : "from-green-800 via-green-700 to-green-950 "
        }`}
      >
        {activeRole === "recruiter" ? (
          <div className="px-3 bg-gradient-to-br from-gray-900 via-gray-800 to-black border-gray-700 backdrop-blur-md w-[95%] h-[95%] flex flex-col items-center gap-3 justify-center text-center rounded-xl">
            <h1 className="text-3xl tracking-wide md:text-5xl font-[Kanit] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
              Find & Hire Top Talent Effortlessly!
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Unlock a world of skilled professionals and build your dream team
              with ease. Let us connect you with the best candidates in the
              industry.
            </p>

            <button
              onClick={handleGoogleLogin}
              className="cursor-pointer mt-6 px-8 py-3 text-lg md:text-xl font-semibold rounded-full transition-all duration-500 
              bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white 
              shadow-lg shadow-blue-500/50 border-2 border-transparent 
              hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700 hover:to-blue-900 
              hover:shadow-2xl hover:shadow-blue-500/40 hover:border-blue-400 scale-105 hover:scale-110"
            >
              Get Started!
            </button>
          </div>
        ) : (
          <div className="px-3 bg-gradient-to-br from-gray-900 via-gray-800 to-black border-gray-700 backdrop-blur-md w-[95%] h-[95%] flex flex-col items-center gap-3 justify-center text-center rounded-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-green-700">
              Land Your Dream Job Today!
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Discover exciting opportunities, apply to top companies, and take
              the next big leap in your career. Your future starts here!
            </p>

            <button
              onClick={handleGithubLogin}
              className="cursor-pointer mt-6 px-8 py-3 text-lg md:text-xl font-semibold rounded-full transition-all duration-500 
              bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white 
              shadow-lg shadow-green-500/50 border-2 border-transparent 
              hover:bg-gradient-to-r hover:from-green-800 hover:via-green-700 hover:to-green-900 
              hover:shadow-2xl hover:shadow-green-500/40 hover:border-green-400 scale-105 hover:scale-110"
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
