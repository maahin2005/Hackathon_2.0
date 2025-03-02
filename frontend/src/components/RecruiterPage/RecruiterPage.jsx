import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import RecruiterCard from '../Recruiter Card/RecruiterCard.jsx';
import axios from 'axios';
import FilterHeader from '../FilterHeader/FilterHeader.jsx'

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

const RecruiterCard = () => {
    const [RecruiterCard, setRecruiterCard] = useState([]);

    useEffect(() => {
        const fetchRecruiterCard = async () => {
            try {
                const response = await axios.get(`${backendBaseUrl}/users/RecruiterCard`);
                console.log("RecruiterCard:", response.data.data);
                setRecruiterCard(response.data.data);
            } catch (error) {
                console.error("Error fetching RecruiterCard:", error);
            }
        };

        fetchRecruiterCard();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">RecruiterCard</h1>
            <FilterHeader/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border space-x-1 py-6">
                {RecruiterCard.map((recruiter) => (
                    <RecruiterCard key={recruiter._id} recruiter={recruiter} />
                ))}
            </div>
        </div>
    );
};

RecruiterCard.propTypes = {
    props: PropTypes.any
};

export default RecruiterCard;