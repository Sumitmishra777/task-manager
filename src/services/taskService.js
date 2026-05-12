// services/taskService.js

import axios from "axios";

// Base API URL
const API_URL = "http://localhost:5000/api/tasks";

// Get Token from localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Axios Config
const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get All Tasks
export const getTasks = async () => {
  const response = await axios.get(API_URL, config());

  return response.data;
};

// Create Task
export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData, config());

  return response.data;
};

// Update Task
export const updateTask = async (id, taskData) => {
  const response = await axios.put(`${API_URL}/${id}`, taskData, config());

  return response.data;
};

// Delete Task
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, config());

  return response.data;
};
