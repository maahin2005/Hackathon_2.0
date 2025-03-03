import React, { useEffect, useState } from "react";
import CandidateProfile from "../../../components/Custom/JobseekerProfile/CandidateProfile";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCandidateData,
  setGithubProfile,
  setScore,
} from "../../../redux/features/candidate/candidate";

function JobseekerDashboard() {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const candidate = useSelector((state) => state.candidate);

  const getCandidateData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/jobseekers/me`, {
        withCredentials: true,
      });

      if (res.data?.success) {
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
        } = res.data?.data;

        dispatch(setGithubProfile({ githubId, githubUsername, profileImage }));
        dispatch(setCandidateData({ name, email, createdAt, updatedAt, _id }));
        dispatch(setScore(score));
      }
    } catch (error) {
      console.error("Error fetching candidate data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCandidateData();
  }, [dispatch]);

  return (
    <div>
      {loading ? "Loading..." : <CandidateProfile candidate={candidate} />}
    </div>
  );
}

export default JobseekerDashboard;
