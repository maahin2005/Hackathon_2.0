import React from "react";
import AuthRoutes from "./AuthRoutes";
import RecruiterRoutes from "./RecruiterRoutes";
import NavRecruiters from "../components/Custom/Auth/NavRecruiters";

function ProtectedRecruiterRoutes({ children }) {
  return (
    <AuthRoutes>
      <RecruiterRoutes>
        <NavRecruiters />
        {children}
      </RecruiterRoutes>
    </AuthRoutes>
  );
}

export default ProtectedRecruiterRoutes;
