// pages/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-black">404</h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 text-center">
        The page you are looking for does not exist.
      </p>

      {/* Back Button */}
      <Link
        to="/dashboard"
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
