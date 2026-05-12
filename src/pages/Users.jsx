// pages/Users.jsx

import React from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { useAuth } from "../context/AuthContext";

const Users = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Users
          </h1>

          <p className="text-gray-500 mt-1">
            User management page.
          </p>
        </div>

        {/* User Card */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Current Logged In User
          </h2>

          <div className="mt-4 space-y-2">
            <p>
              <strong>Name:</strong> {user?.name}
            </p>

            <p>
              <strong>Email:</strong> {user?.email}
            </p>

            <p>
              <strong>Role:</strong> {user?.role}
            </p>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Users;