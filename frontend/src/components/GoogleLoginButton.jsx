// client/src/components/Login.js
import React from "react";

const GoogleLoginButton = () => {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const handleGoogleLogin = () => {
    window.location.href = `${BASE_URL}/auth/google`;
  };

  return (
    <div>
      <h2>Recruiter Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleLoginButton;
