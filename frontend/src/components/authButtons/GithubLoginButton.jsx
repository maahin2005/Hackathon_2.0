import React, { useEffect, useState } from "react";
import axios from "axios";

const GithubLoginButton = () => {
  const [user, setUser] = useState(null);
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/auth/user`, { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  const handleLogin = () => {
    window.open(`${BASE_URL}/auth/github/callback`, "_self");
  };

  const handleLogout = () => {
    axios.get(`${BASE_URL}/auth/logout`, { withCredentials: true }).then(() => {
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
