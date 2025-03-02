import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard.jsx";
import axios from "axios";
import FilterHeader from "../../components/FilterHeader/FilterHeader.jsx";
const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
import Footer from "../../components/Footer/Footer.jsx";
const Jobseekers = () => {
  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  const [jobseekers, setJobseekers] = useState([]);

  useEffect(() => {
    const fetchJobseekers = async () => {
      try {
        const response = await axios.get(`${backendBaseUrl}/users/jobseekers`);
        console.log("Jobseekers:", response.data.data);
        setJobseekers(response.data.data);
      } catch (error) {
        console.error("Error fetching jobseekers:", error);
      }
    };

    fetchJobseekers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Jobseekers</h1>
      <FilterHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {" "}
        {jobseekers.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

Jobseekers.propTypes = {
  props: PropTypes.any,
};

export default Jobseekers;
