import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./../components/Dashboard";
import GoogleLoginButton from "./../components/GoogleLoginButton";
import GithubLoginButton from "./../components/authButtons/GithubLoginButton";
// import Jobseekers from "./../components/jobseekersPage/Jobseekers";
import EmployeeProfile from "./../Pages/Singleemployee/SingleEmplee";
import Home from "./../components/Home/Home";
import JobseekerRoutes from "./JobseekerRoutes";
import Jobseekers from "../Pages/jobseekersPage/Jobseekers";

function Routings() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <>
            <GoogleLoginButton />
            <GithubLoginButton />
          </>
        }
      />
      <Route
        path="/dashboard"
        element={
          <JobseekerRoutes>
            <Dashboard />
          </JobseekerRoutes>
        }
      />
      <Route
        path="/jobseekers"
        element={
          <JobseekerRoutes>
            <Jobseekers/>
          </JobseekerRoutes>
        }
      />
      <Route
        path="/jobseekers/profile"
        element={
          <JobseekerRoutes>
            <EmployeeProfile />
          </JobseekerRoutes>
        }
      />
    </Routes>
  );
}

export default Routings;
