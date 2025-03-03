import React from "react";
import { Route, Routes } from "react-router-dom";
import HireTalents from "../Pages/Recruiter/hireTalent/HireTalents";
import Home from "../components/Home/Home";
import ProtectedJobseekerRoutes from "./ProtectedJobseekerRoutes";
import ProtectedRecruiterRoutes from "./ProtectedRecruiterRoutes";
import JobseekerDashboard from "../Pages/jobseeker/Dashboard/JobseekerDashboard";
import TalentProfile from "../Pages/recruiter/hireTalent/TalentProfile";
import RecruiterDashboard from "../Pages/recruiter/dashboard/RecruiterDashboard";
import Login from "../Pages/Login";
function Routings() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/jobseeker/dashboard"
        element={
          <ProtectedJobseekerRoutes>
            <JobseekerDashboard />
          </ProtectedJobseekerRoutes>
        }
      />
      <Route
        path="/recruiter/candidate-profile"
        element={
          <ProtectedRecruiterRoutes>
            <TalentProfile />
          </ProtectedRecruiterRoutes>
        }
      />
      <Route
        path="/recruiter/dashboard"
        element={
          <ProtectedRecruiterRoutes>
            <RecruiterDashboard />
          </ProtectedRecruiterRoutes>
        }
      />
      <Route
        path="/recruiter/hire-talent"
        element={
          <ProtectedRecruiterRoutes>
            <HireTalents />
          </ProtectedRecruiterRoutes>
        }
      />
    </Routes>
  );
}

export default Routings;
