import React from "react";
import { Navigate } from "react-router-dom";

function RecruiterRoutes({ children }) {
  const isRecruiter = true;
  if (!isRecruiter) return <Navigate to={"/login"} />;

  return children;
}

export default RecruiterRoutes;
