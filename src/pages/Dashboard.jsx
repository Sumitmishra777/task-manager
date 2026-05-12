// pages/Dashboard.jsx

import React, { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getTasks } from "../services/taskService";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(false);

  // Fetch Tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Dashboard Stats
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.status === "DONE").length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "IN_PROGRESS",
  ).length;

  const pendingTasks = tasks.filter((task) => task.status === "TODO").length;

  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
    },
    {
      title: "Completed",
      value: completedTasks,
    },
    {
      title: "In Progress",
      value: inProgressTasks,
    },
    {
      title: "Pending",
      value: pendingTasks,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <p className="text-gray-500 mt-1">
            Welcome to your task management dashboard.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <p className="text-gray-500">Loading dashboard...</p>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-xl p-6">
                  <h2 className="text-gray-500 text-sm">{item.title}</h2>

                  <p className="text-3xl font-bold mt-2 text-black">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Tasks */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>

              <div className="space-y-4">
                {tasks.length > 0 ? (
                  tasks.slice(0, 5).map((task) => (
                    <div
                      key={task._id}
                      className="border rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{task.title}</h3>

                        <p className="text-sm text-gray-500">
                          Status: {task.status.replace("_", " ")}
                        </p>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          task.priority === "HIGH"
                            ? "bg-red-100 text-red-700"
                            : task.priority === "MEDIUM"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                        }`}>
                        {task.priority}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No tasks available</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
