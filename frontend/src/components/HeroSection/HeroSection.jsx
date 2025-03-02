import { useState } from "react";

const HeroSection = () => {
  const [activeRole, setActiveRole] = useState("recruiter");

  const handleGithubLogin = () => {
    window.open("http://localhost:8080/auth/github/callback", "_self");
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  return (
    <div className="w-[90%] flex flex-col md:flex-row h-screen lg:h-[90vh] items-center justify-around bg-transparent text-white p-8 transition-all animate-darkTransition ">
      {/* Buttons Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center gap-6 ">
        <button
          onMouseEnter={() => setActiveRole("recruiter")}
          className={`px-6 py-3 text-lg font-semibold border-2 rounded-lg md:mt-15 md:w-1/2 ${
            activeRole === "recruiter"
              ? "border-blue-600 text-blue-600 bg-white shadow-md"
              : "border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600"
          }`}
        >
          I'm a Recruiter
        </button>
        <button
          onMouseEnter={() => setActiveRole("jobseeker")}
          className={`px-6 py-3 text-lg font-semibold border-2 rounded-lg  ${
            activeRole === "jobseeker"
              ? "border-green-600 text-green-600 bg-white shadow-md"
              : "border-gray-400 text-gray-700 hover:border-green-600 hover:text-green-600"
          }`}
        >
          I'm a Job Seeker
        </button>
      </div>

      {/* Info Section */}
      <div className="w-full md:w-2/3 h-[90%] lg:h-[51vh] flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-lg transition-all mt-4 ">
        {activeRole === "recruiter" ? (
          <>
            <h1 className="text-3xl font-bold text-blue-600">
              Find the Best Talent!
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-lg">
              Need top candidates? Our platform helps you find skilled professionals
              easily and quickly.
            </p>
            <button onClick={handleGithubLogin} className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-green-600">
              Get Your Dream Job!
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-lg">
              Looking for work? Apply to top companies and take the next step in your career.
            </p>
            <button onClick={handleGoogleLogin} className="mt-6 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
              Explore Jobs
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
