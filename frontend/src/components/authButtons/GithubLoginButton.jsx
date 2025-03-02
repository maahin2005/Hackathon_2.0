import React, { useEffect, useState } from "react";
import axios from "axios";

const GithubLoginButton = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/auth/user", { withCredentials: true }).then((res) => {
      setUser(res.data);
    });
  }, []);

  const handleLogin = () => {
    window.open("/", "_self");
  };

  const handleLogout = () => {
    axios.get("http://localhost:8080/auth/logout", { withCredentials: true }).then(() => {
      setUser(null);
    });
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <img src={user.photos[0].value} alt="profile" width="50" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with GitHub</button>
      )}
    </div>
  );
};

export default GithubLoginButton;
