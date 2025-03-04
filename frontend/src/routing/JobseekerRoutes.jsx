import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function JobseekerRoutes({ children }) {
  const { role } = useSelector((state) => state.auth);
  const isJobseeker = role === "jobseeker";
  if (!isJobseeker) return <Navigate to={"/recruiter/dashboard"} />;

  return <>{children}</>;
}

export default JobseekerRoutes;
