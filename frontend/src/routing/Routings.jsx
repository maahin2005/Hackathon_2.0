import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./../components/Dashboard";
import GoogleLoginButton from "./../components/GoogleLoginButton";
import GithubLoginButton from "./../components/authButtons/GithubLoginButton";
import EmployeeProfile from "./../Pages/Singleemployee/SingleEmplee";
import Home from "./../components/Home/Home";
import JobseekerRoutes from "./JobseekerRoutes";
import Jobseekers from "../Pages/jobseekersPage/Jobseekers";
import AuthRoutes from "./AuthRoutes";

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
          <AuthRoutes>
            <JobseekerRoutes>
              <Dashboard />
            </JobseekerRoutes>
          </AuthRoutes>
        }
      />
      <Route
        path="/jobseekers"
        element={
          <AuthRoutes>
            <JobseekerRoutes>
              <Jobseekers />
            </JobseekerRoutes>
          </AuthRoutes>
        }
      />
      <Route
        path="/jobseekers/profile"
        element={
          <AuthRoutes>
            <JobseekerRoutes>
              <EmployeeProfile />
            </JobseekerRoutes>
          </AuthRoutes>
        }
      />
    </Routes>
  );
}

export default Routings;
