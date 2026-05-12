// src/controllers/teamController.js

import Team from "../models/Team.js";

// Create Team
export const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Teams
export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find()
      .populate("admin", "name email")
      .populate("members", "name email");

    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Team
export const updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!team) {
      return res.status(404).json({
        message: "Team not found",
      });
    }

    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Team
export const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);

    if (!team) {
      return res.status(404).json({
        message: "Team not found",
      });
    }

    res.status(200).json({
      message: "Team deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
