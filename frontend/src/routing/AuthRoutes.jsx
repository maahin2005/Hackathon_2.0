import React from "react";
import { Navigate } from "react-router-dom";

function AuthRoutes({ children }) {
  const isAuth = true;
  if (!isAuth) return <Navigate to={"/login"} />;

  return children;
}

export default AuthRoutes;
