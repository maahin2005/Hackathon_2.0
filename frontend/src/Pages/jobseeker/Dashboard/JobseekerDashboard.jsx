import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CandidateProfile from "../../../components/Custom/JobseekerProfile/CandidateProfile";
import {
  setUserData,
  setScore,
} from "../../../redux/features/candidate/candidate";

function JobseekerDashboard() {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCandidateData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/jobseekers/me`, {
          withCredentials: true,
        });

        if (data?.success && data?.data) {
          const {
            createdAt,
            updatedAt,
            githubId,
            githubUsername,
            name,
            profileImage,
            score,
            email,
            _id,
            bio,
            experienceInYear,
            heading,
            areasOfExpertise,
          } = data.data;

          dispatch(
            setUserData({
              name,
              email,
              createdAt,
              updatedAt,
              _id,
              bio,
              experienceInYear,
              heading,
              areasOfExpertise,
              githubId,
              githubUsername,
              profileImage
            })
          );
          dispatch(setScore(score));
        }
      } catch (error) {
        console.error("Error fetching candidate data:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    getCandidateData();
  }, [BASE_URL, dispatch]); // Dependency array

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CandidateProfile isCandidate={true} />
      )}
    </div>
  );
}

export default JobseekerDashboard;
