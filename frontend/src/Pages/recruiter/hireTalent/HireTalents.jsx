import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./../../../components/Custom/Footer/Footer";
import CandidateCard from "./../../../components/Jobseeker/candidateCard/CandidateCard";
import FilterHeader from "./../../../components/Recruiter/FilterHeader/FilterHeader";
// import Footer from "./../../../components/Custom/Footer/Footer";

const HireTalents = () => {
  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  const [jobseekers, setJobseekers] = useState([]);
  useEffect(() => {
    const fetchJobseekers = async () => {
      try {
        const response = await axios.get(
          `${backendBaseUrl}/recruiters/hire-talents`,
          {
            withCredentials: true,
          }
        );
        console.log("response.data.data=> ", response.data.data);

        setJobseekers(response.data.data);
      } catch (error) {
        console.error("Error fetching jobseekers:", error);
      }
    };

    fetchJobseekers();
  }, []);

  return (
    <>
      <div className="container mx-auto my-5 md:my-14 px-4 py-8 flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-grow">
          <h1 className="text-5xl text-blue-950 tracking-wide font-[Kanit] font-semibold my-8 text-center">
            Top Talented Candidates
          </h1>
          <FilterHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mx-5 py-6">
            {jobseekers.map((candidate) => (
              <CandidateCard key={candidate._id} candidate={candidate} />
            ))}
          </div>
        </main>
  
        {/* Footer (Sticks to Bottom) */}
        <Footer />
      </div>
    </>
  );
  };

HireTalents.propTypes = {
  props: PropTypes.any,
};

export default HireTalents;
