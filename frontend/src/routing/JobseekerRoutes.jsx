import React from "react";
import { Navigate } from "react-router-dom";

function JobseekerRoutes({ children }) {
  const isJobseeker = true;
  if (!isJobseeker) return <Navigate to={"/login"} />;

  return <>{children}</>;
}

export default JobseekerRoutes;
