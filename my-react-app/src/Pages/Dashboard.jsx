import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome {user?.name || "User"}</h1>
        <button onClick={logout} className="dashboard-btn">
          Logout
        </button>
      </div>
    </div>
  );
}
