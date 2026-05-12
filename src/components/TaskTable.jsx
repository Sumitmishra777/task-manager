// components/TaskTable.jsx

import React from "react";

const TaskTable = ({ tasks = [], onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-xl">
      <table className="w-full text-left border-collapse">
        {/* Table Head */}
        <thead className="bg-black text-white">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Priority</th>
            <th className="p-4">Status</th>
            <th className="p-4">Due Date</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr
                key={task._id}
                className="border-b hover:bg-gray-50 transition">
                {/* Title */}
                <td className="p-4 font-medium">{task.title}</td>

                {/* Priority */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.priority === "HIGH"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "MEDIUM"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                    }`}>
                    {task.priority}
                  </span>
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.status === "DONE"
                        ? "bg-green-100 text-green-600"
                        : task.status === "IN_PROGRESS"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                    }`}>
                    {task.status.replace("_", " ")}
                  </span>
                </td>

                {/* Due Date */}
                <td className="p-4">
                  {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : "N/A"}
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => onEdit(task)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(task._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-6 text-gray-500">
                No tasks found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
