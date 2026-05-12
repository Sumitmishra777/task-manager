// pages/Teams.jsx

import React, { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import TeamForm from "../components/TeamForm";

import {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../services/teamService";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const [editingTeam, setEditingTeam] = useState(null);

  const [loading, setLoading] = useState(false);

  // Fetch Teams
  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      setLoading(true);

      const data = await getTeams();

      setTeams(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Add Team
  const handleAddTeam = async (teamData) => {
    try {
      const createdTeam = await createTeam(teamData);

      setTeams([...teams, createdTeam]);
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Team
  const handleEditTeam = (team) => {
    setEditingTeam(team);
  };

  // Update Team
  const handleUpdateTeam = async (updatedTeam) => {
    try {
      await updateTeam(editingTeam._id, updatedTeam);

      fetchTeams();

      setEditingTeam(null);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Team
  const handleDeleteTeam = async (id) => {
    try {
      await deleteTeam(id);

      fetchTeams();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Teams</h1>

          <p className="text-gray-500 mt-1">Manage your teams here.</p>
        </div>

        {/* Team Form */}
        <TeamForm
          onSubmit={editingTeam ? handleUpdateTeam : handleAddTeam}
          initialData={editingTeam || {}}
        />

        {/* Loading */}
        {loading ? (
          <p className="text-gray-500">Loading teams...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.length > 0 ? (
              teams.map((team) => (
                <div
                  key={team._id}
                  className="bg-white shadow-md rounded-xl p-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    {team.name}
                  </h2>

                  <p className="text-gray-500 mt-2">{team.description}</p>

                  {/* Actions */}
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => handleEditTeam(team)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteTeam(team._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No teams found</p>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Teams;
