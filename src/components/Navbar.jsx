// components/Navbar.jsx

import React from "react";

import { FaUserCircle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  // Handle Logout
  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Left Side */}
      <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* User Info */}
        <div className="flex items-center gap-2 text-gray-700">
          <FaUserCircle size={24} />

          <span className="font-medium">{user?.name || "User"}</span>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
