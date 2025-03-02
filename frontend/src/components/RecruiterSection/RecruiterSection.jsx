const RecruiterSection = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-evenly px-8 lg:px-24 bg-black text-white">
      {/* Right Side - Text Content */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6 pt-12 pb-12"
        data-aos="flip-right" // Animation effect
        data-aos-duration="1000" // Duration in milliseconds
      >
        <h2 className="text-4xl font-bold text-blue-400">
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
        <button className="mt-4 px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition-all">
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
