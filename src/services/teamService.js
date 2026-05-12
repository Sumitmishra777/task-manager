// services/teamService.js

import axios from "axios";

// Base API URL
const API_URL = "http://localhost:5000/api/teams";

// Get Token
const getToken = () => {
  return localStorage.getItem("token");
};

// Axios Config
const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get All Teams
export const getTeams = async () => {
  const response = await axios.get(API_URL, config());

  return response.data;
};

// Create Team
export const createTeam = async (teamData) => {
  const response = await axios.post(API_URL, teamData, config());

  return response.data;
};

// Update Team
export const updateTeam = async (id, teamData) => {
  const response = await axios.put(`${API_URL}/${id}`, teamData, config());

  return response.data;
};

// Delete Team
export const deleteTeam = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, config());

  return response.data;
};
