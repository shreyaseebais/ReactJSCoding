import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: 30 }}>
      <h2>Welcome, {user.name}</h2>

      <button onClick={logout}>Logout</button>

      <br /><br />

      <Link to="/profile">Profile</Link><br />
      <Link to="/finance">Finance Tracker</Link><br />
      {user.role === "admin" && <Link to="/admin">Admin Panel</Link>}
    </div>
  );
}
