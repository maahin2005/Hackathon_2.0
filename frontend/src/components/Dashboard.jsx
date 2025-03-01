// client/src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = new URLSearchParams(window.location.search).get("token");
        if (!token) return navigate("/");

        try {
            const decoded = jwtDecode(token);
            setUser(decoded);
        } catch (error) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div>
            <h2>Welcome, {user?.id}</h2>
            <a href="http://localhost:8080/auth/logout">Logout</a>
        </div>
    );
};

export default Dashboard;
