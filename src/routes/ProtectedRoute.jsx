// routes/ProtectedRoute.jsx

import React from "react";

import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import Loader from "../components/Loader";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, loading, user } = useAuth();

  // Loading
  if (loading) {
    return <Loader />;
  }

  // Not Logged In
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Role Check
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
