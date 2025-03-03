import React from "react";
import AuthRoutes from "./AuthRoutes";
import JobseekerRoutes from "./JobseekerRoutes";
import NavJobseekers from "../components/Custom/Auth/NavJobseekers";

function ProtectedJobseekerRoutes({ children }) {
  return (
    <AuthRoutes>
      <JobseekerRoutes>
        <NavJobseekers />
        {children}
      </JobseekerRoutes>
    </AuthRoutes>
  );
}

export default ProtectedJobseekerRoutes;
