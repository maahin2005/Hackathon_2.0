import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import RecruiterCard from "../../../components/Recruiter/RecruiterCard.jsx";
import axios from "axios";
import FilterHeader from "../../../components/Recruiter/FilterHeader/FilterHeader.jsx";
import Footer from "../../../components/Custom/Footer/Footer.jsx";
const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

const RecruiterPage = () => {
  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => {
    const fetchRecruiterCard = async () => {
      try {
        const response = await axios.get(
          `${backendBaseUrl}/companies`, {
          withCredentials: true,
        });
        console.log("response.data.data=> ", response.data.data)

        setRecruiters(response.data.data);
      } catch (error) {
        console.error("Error fetching RecruiterCard:", error);
      }
    };

    fetchRecruiterCard();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">RecruiterCard</h1>
      <FilterHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {recruiters.map((recruiter) => (
          <RecruiterCard key={recruiter._id} recruiter={recruiter} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

RecruiterCard.propTypes = {
  props: PropTypes.any,
};

export default RecruiterPage;
