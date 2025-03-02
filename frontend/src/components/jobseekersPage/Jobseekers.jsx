import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import axios from 'axios';

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

const Jobseekers = () => {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border space-x-1 py-6">
                {jobseekers.map((employee) => (
                    <EmployeeCard key={employee._id} employee={employee} />
                ))}
            </div>
        </div>
    );
};

Jobseekers.propTypes = {
    props: PropTypes.any
};

export default Jobseekers;