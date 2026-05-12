// components/Sidebar.jsx

import React from "react";

import { Link, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaTasks,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();

  const { user } = useAuth();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
      roles: ["SUPER_ADMIN", "TEAM_ADMIN", "TEAM_MEMBER"],
    },

    {
      name: "Tasks",
      path: "/tasks",
      icon: <FaTasks />,
      roles: ["SUPER_ADMIN", "TEAM_ADMIN", "TEAM_MEMBER"],
    },

    {
      name: "Teams",
      path: "/teams",
      icon: <FaUserFriends />,
      roles: ["SUPER_ADMIN", "TEAM_ADMIN"],
    },

    {
      name: "Users",
      path: "/users",
      icon: <FaUsers />,
      roles: ["SUPER_ADMIN"],
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-black text-white p-5">
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-10">Task Manager</h1>

      {/* Menu */}
      <ul className="space-y-3">
        {menuItems
          .filter((item) => item.roles.includes(user?.role))
          .map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  location.pathname === item.path
                    ? "bg-white text-black"
                    : "hover:bg-gray-800"
                }`}>
                {item.icon}

                <span>{item.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
