import React from "react";

function RecruiterDashboard() {
  return (
    <div className="my-20 flex justify-center">
      <div className="max-w-4xl w-full rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 relative">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <img
              className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
              src="https://via.placeholder.com/150"
              alt="Recruiter Profile Picture"
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-sm text-gray-600">Senior Recruiter at TechCorp</p>
        </div>

        <div className="flex justify-center mt-6 space-x-8">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">10+</p>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">500+</p>
            <p className="text-sm text-gray-600">Candidates Placed</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800">95%</p>
            <p className="text-sm text-gray-600">Success Rate</p>
          </div>
        </div>

        <div className="px-8 py-6">
          <p className="text-gray-700 text-base text-center">
            John is a seasoned recruiter with over 10 years of experience in the
            tech industry. He specializes in finding top talent for software
            engineering roles and has a proven track record of placing
            candidates in leading tech companies.
          </p>
        </div>

        <div className="px-8 py-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Software Engineering
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Product Management
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              Data Science
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              UI/UX Design
            </span>
          </div>
        </div>

        <div className="px-8 pt-4 pb-8">
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
            Contact John
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
