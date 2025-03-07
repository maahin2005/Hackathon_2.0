import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import ProtectedJobseekerRoutes from "./ProtectedJobseekerRoutes";
import ProtectedRecruiterRoutes from "./ProtectedRecruiterRoutes";
import Login from "../Pages/Login";
import HireTalents from "./../Pages/recruiter/hireTalent/HireTalents";
import JobseekerDashboard from "./../Pages/jobseeker/Dashboard/JobseekerDashboard";
import TalentProfile from "./../Pages/recruiter/hireTalent/TalentProfile";
import RecruiterDashboard from "./../Pages/recruiter/dashboard/RecruiterDashboard";
import ProfileUdpateForm from "../Pages/jobseeker/ProfileUpdateForm";
import AboutUs from '../Pages/About/About.jsx'
import ContactPage from "../Pages/Contact/Contact";
import RecruiterPage from "../Pages/recruiter/RecruiterPage/RecruiterPage";
function Routings() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactPage />} />

      <Route
        path="/jobseeker/dashboard"
        element={
          <ProtectedJobseekerRoutes>
            <JobseekerDashboard />
          </ProtectedJobseekerRoutes>
        }
      />
      <Route
        path="/jobseeker/companies"
        element={
          <ProtectedJobseekerRoutes>
            <RecruiterPage />
          </ProtectedJobseekerRoutes>
        }
      />
      <Route
        path="/jobseeker/profile/edit"
        element={
          <ProtectedJobseekerRoutes>
            <ProfileUdpateForm />
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
