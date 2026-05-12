// pages/Tasks.jsx

import React, { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);

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

  // Add Task
  const handleAddTask = async (taskData) => {
    try {
      const createdTask = await createTask(taskData);

      setTasks([...tasks, createdTask]);
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Task
  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  // Update Task
  const handleUpdateTask = async (updatedTask) => {
    try {
      await updateTask(editingTask._id, updatedTask);

      fetchTasks();

      setEditingTask(null);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Task
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>

          <p className="text-gray-500 mt-1">Manage your tasks here.</p>
        </div>

        {/* Task Form */}
        <TaskForm
          onSubmit={editingTask ? handleUpdateTask : handleAddTask}
          initialData={editingTask || {}}
        />

        {/* Loading */}
        {loading ? (
          <p className="text-gray-500">Loading tasks...</p>
        ) : (
          <TaskTable
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
