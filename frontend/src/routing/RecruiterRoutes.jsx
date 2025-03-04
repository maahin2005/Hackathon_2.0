import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RecruiterRoutes({ children }) {
  const { role } = useSelector((state) => state.auth);

  const isRecruiter = role === "recruiter";
  if (!isRecruiter) return <Navigate to={"/jobseeker/dashboard"} />;
  return children;
}

export default RecruiterRoutes;
