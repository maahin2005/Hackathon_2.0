import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RecruiterSection = () => {
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
    <section className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-evenly px-8 lg:px-24 bg-black text-white">
      {/* Right Side - Text Content */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6 pt-12 pb-12"
        data-aos="flip-right" // Animation effect
        data-aos-duration="1000" // Duration in milliseconds
      >
        <h2 className="text-4xl font-bold text-blue-400 transition-colors hover:text-blue-600">
          🚀 Find Top Talent with Precision!
        </h2>
        <p className="text-lg text-gray-300">
          Tired of sifting through endless resumes? Our AI-powered platform
          analyzes GitHub repositories to evaluate candidates based on real
          skills, efficiency, and contributions—not just words on paper! 🎯
        </p>
        <ul className="text-lg text-gray-300 space-y-3">
          <li>
            🔹 Set precise hiring criteria and let our system match you with the
            best-fit developers.
          </li>
          <li>
            🔹 Instantly assess expertise with deep GitHub insights—no more
            guesswork!
          </li>
          <li>
            🔹 Hire with confidence based on real-world performance and project
            impact.
          </li>
        </ul>
        <button
          onClick={handleGoogleLogin}
          className="mt-4 px-6 py-3 text-lg font-semibold  rounded-full cursor-pointer transition-all duration-500 ease-in-out
        border-2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-700 hover:900
        shadow:md shadow-blue-500/50  hover:shadow-blue-500/40 border-transparent hover:shadow-lg hover:border-blue-400"
        >
          💼 Discover Elite Talent Now
        </button>
      </div>

      {/* Left Side - SVG Image */}
      <div
        className="w-full lg:w-1/2 flex justify-center pb-12"
        data-aos="slide-left"
        data-aos-anchor-placement="center-bottom"
        data-aos-once="false" // Animation effect
        data-aos-duration="1000" // Duration in milliseconds
      >
        <img
          src="https://img.freepik.com/free-vector/job-interview-concept-illustration_114360-24598.jpg?uid=R189673018&ga=GA1.1.892499553.1740857557&semt=ais_hybrid"
          alt="Recruiter Illustration"
          className="w-4/5 max-w-md"
        />
      </div>
    </section>
  );
};

export default RecruiterSection;
