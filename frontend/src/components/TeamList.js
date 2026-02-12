import React, { useState, useEffect } from 'react';
import { teamAPI } from '../services/apiService';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTeam, setEditingTeam] = useState(null);
  const [formData, setFormData] = useState({
    teamName: '',
    coachName: '',
    ageLimit: ''
  });

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await teamAPI.getAll();
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTeam) {
        await teamAPI.update(editingTeam.teamId, formData);
      } else {
        await teamAPI.create(formData);
      }
      fetchTeams();
      resetForm();
    } catch (error) {
      console.error('Error saving team:', error);
    }
  };

  const handleEdit = (team) => {
    setEditingTeam(team);
    setFormData({
      teamName: team.teamName,
      coachName: team.coachName || '',
      ageLimit: team.ageLimit || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this team?')) {
      try {
        await teamAPI.delete(id);
        fetchTeams();
      } catch (error) {
        console.error('Error deleting team:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      teamName: '',
      coachName: '',
      ageLimit: ''
    });
    setEditingTeam(null);
    setShowForm(false);
  };

  return (
    <div>
      <h2 className="page-title">Team Management</h2>
      
      <button 
        className="btn btn-primary" 
        onClick={() => setShowForm(!showForm)}
        style={{ marginBottom: '1rem' }}
      >
        {showForm ? 'Cancel' : 'Add New Team'}
      </button>

      {showForm && (
        <div className="form-container">
          <h3>{editingTeam ? 'Edit Team' : 'Add New Team'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Team Name:</label>
              <input
                type="text"
                value={formData.teamName}
                onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Coach Name:</label>
              <input
                type="text"
                value={formData.coachName}
                onChange={(e) => setFormData({...formData, coachName: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Age Limit:</label>
              <input
                type="number"
                value={formData.ageLimit}
                onChange={(e) => setFormData({...formData, ageLimit: e.target.value})}
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-success">
                {editingTeam ? 'Update' : 'Create'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>Coach Name</th>
              <th>Age Limit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.teamId}>
                <td>{team.teamId}</td>
                <td>{team.teamName}</td>
                <td>{team.coachName || 'N/A'}</td>
                <td>{team.ageLimit || 'N/A'}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn btn-primary" onClick={() => handleEdit(team)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(team.teamId)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamList;
