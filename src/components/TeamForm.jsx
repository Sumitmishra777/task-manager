// components/TaskForm.jsx

import React, { useState } from "react";

const TaskForm = ({ onSubmit, initialData = {} }) => {
  const [task, setTask] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    priority: initialData.priority || "MEDIUM",
    status: initialData.status || "TODO",
    dueDate: initialData.dueDate || "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);

    // Reset form after submit
    setTask({
      title: "",
      description: "",
      priority: "MEDIUM",
      status: "TODO",
      dueDate: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Task Form</h2>

      {/* Title */}
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Enter task title"
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Enter task description"
          rows="4"
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Priority */}
      <div>
        <label className="block mb-1 font-medium">Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black">
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block mb-1 font-medium">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black">
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>

      {/* Due Date */}
      <div>
        <label className="block mb-1 font-medium">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
