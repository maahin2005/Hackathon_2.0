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
  className={`w-full md:w-80 cursor-pointer px-6 py-3 text-base md:text-lg font-semibold rounded-xl transition-all duration-500 
    ${activeRole === "recruiter" 
      ? "border-2 border-blue-600 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white shadow-2xl shadow-blue-600/50 transform hover:scale-105" 
      : "border-2 border-gray-300 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700 hover:to-blue-900 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105"}`}
>
  I'm a Recruiter
</button>

<button
  onMouseEnter={() => setActiveRole("jobseeker")}
  className={`w-full md:w-80 cursor-pointer px-6 py-3 text-base md:text-lg font-semibold rounded-xl transition-all duration-500 
    ${activeRole === "jobseeker" 
      ? "border-2 border-green-600 bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white shadow-2xl shadow-green-600/50 transform hover:scale-105" 
      : "border-2 border-gray-300 text-gray-300 hover:border-green-500 hover:text-green-400 hover:bg-gradient-to-r hover:from-green-800 hover:via-green-700 hover:to-green-900 hover:shadow-lg hover:shadow-green-500/40 hover:scale-105"}`}
>
  I'm a Job Seeker
</button>

        

      </div>

      {/* Right Section */}
      <div className="p-6 md:p-8 bg-gray-900/40 border border-gray-500/50 backdrop-blur-lg shadow-md w-full max-w-2xl min-h-[350px] flex flex-col items-center gap-4 justify-center text-center rounded-lg">
      {activeRole === "recruiter" ? (
          <div className="flex flex-col items-center gap-4 justify-center text-center rounded-lg">
            <h1 className="text-2xl md:text-4xl font-[Kanit] text-blue-400">
              Find & Hire Top Talent Effortlessly!
            </h1>
            <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto">
              Unlock a world of skilled professionals and build your dream team with ease.
            </p>
            <button
              onClick={handleGoogleLogin}
              className="mt-6 px-6 py-3 text-lg font-bold rounded-lg transition-all duration-500 ease-in-out 
                         bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white 
                         shadow-md shadow-blue-500/50 border-2 border-transparent 
                         hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700 hover:to-blue-900 
                         hover:shadow-lg hover:shadow-blue-500/40 hover:border-blue-400"
            >
              Get Started!
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 justify-center text-center rounded-lg">
            <h1 className="text-2xl md:text-4xl font-extrabold text-green-400">
              Land Your Dream Job Today!
            </h1>
            <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto">
              Discover exciting opportunities, apply to top companies, and take the next big leap in your career.
            </p>
            <button
              onClick={handleGithubLogin}
              className="mt-6 px-6 py-3 text-lg font-bold rounded-lg transition-all duration-500 ease-in-out 
                         bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white 
                         shadow-md shadow-green-500/50 border-2 border-transparent 
                         hover:bg-gradient-to-r hover:from-green-800 hover:via-green-700 hover:to-green-900 
                         hover:shadow-lg hover:shadow-green-500/40 hover:border-green-400"
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
