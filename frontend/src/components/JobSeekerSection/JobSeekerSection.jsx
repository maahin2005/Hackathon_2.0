const JobSeekerSection = () => {
    return (
      <section className="w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-24 bg-gray-900 text-white pb-12 pt-12">
         {/* Left Side - SVG Image */}
         <div className="w-full lg:w-1/2 flex justify-center  pb-12"   data-aos="fade-up-left" data-aos-anchor-placement="top-bottom">
          <img 
            src="https://img.freepik.com/premium-vector/woman-holding-magnify-search-bar-metaphor-job-searching_8073-1050.jpg?uid=R189673018&ga=GA1.1.892499553.1740857557&semt=ais_hybrid" 
            alt="Job Seeker Illustration" 
            className="w-4/5 max-w-md"
          />
        </div>
  
        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6 " data-aos="flip-left" >
        <h2 className="text-4xl font-bold text-green-400 transition-colors duration-300 hover:text-green-600">
            🎯 Land Your Dream Job with Confidence!
        </h2>
          <p className="text-lg text-gray-300">
            Stand out from the crowd! Our AI-powered platform showcases your GitHub projects, contributions, and real-world skills to top recruiters. 🚀
          </p>
          <ul className="text-lg text-gray-300 space-y-3">
            <li>🔹 Get matched with companies that value your coding skills and expertise.</li>
            <li>🔹 Showcase your GitHub contributions and real-world problem-solving ability.</li>
            <li>🔹 Let your projects speak louder than your resume!</li>
          </ul>
          <button className="mt-4 px-6 py-3 text-lg font-semibold  rounded-lg transition-all duration-500 ease-in-out 
          border-transparent hover:border-green-400 bg-gradient-to-r from-green-700 via-green-600 to-green-700
          hover:bg-gradient-to-r hover:from-green-800 hover:via-green-700 hover:to-green-900 
          shadow-md shadow-green-500/50 border-2 hover:shadow-ld hover-shadow-green-500/40 ">
            🔥 Start Your Career Journey Now
          </button>
        </div>
       
      </section>
    );
  };
  
  export default JobSeekerSection;
  