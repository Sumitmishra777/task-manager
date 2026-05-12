// src/routes/teamRoutes.js

import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createTeam,
  getTeams,
  updateTeam,
  deleteTeam,
} from "../controllers/teamController.js";

const router = express.Router();

// Routes
router.post("/", protect, createTeam);

router.get("/", protect, getTeams);

router.put("/:id", protect, updateTeam);

router.delete("/:id", protect, deleteTeam);

export default router;
