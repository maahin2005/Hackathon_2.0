import React from "react";
import Navbar from "./../components/Custom/Navbar/Navbar";

function Login() {
  const params = new URLSearchParams(window.location.search);
  const error = params.get("error");

  if (error) {
    try {
      alert(decodeURIComponent(error));
    } catch (e) {
      console.log("No any decoding URI:", e);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="my-20">
        <h1>Login Page</h1>
      </div>
    </div>
  );
}

export default Login;
