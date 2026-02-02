import React, { useState, useEffect } from 'react';
import { matchAPI } from '../services/apiService';

function MatchList() {
  const [matches, setMatches] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingMatch, setEditingMatch] = useState(null);
  const [formData, setFormData] = useState({
    opponent: '',
    matchDate: '',
    venue: '',
    result: ''
  });

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await matchAPI.getAll();
      setMatches(response.data);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingMatch) {
        await matchAPI.update(editingMatch.matchId, formData);
      } else {
        await matchAPI.create(formData);
      }
      fetchMatches();
      resetForm();
    } catch (error) {
      console.error('Error saving match:', error);
    }
  };

  const handleEdit = (match) => {
    setEditingMatch(match);
    setFormData({
      opponent: match.opponent,
      matchDate: match.matchDate,
      venue: match.venue || '',
      result: match.result || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this match?')) {
      try {
        await matchAPI.delete(id);
        fetchMatches();
      } catch (error) {
        console.error('Error deleting match:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      opponent: '',
      matchDate: '',
      venue: '',
      result: ''
    });
    setEditingMatch(null);
    setShowForm(false);
  };

  return (
    <div>
      <h2 className="page-title">Match Management</h2>
      
      <button 
        className="btn btn-primary" 
        onClick={() => setShowForm(!showForm)}
        style={{ marginBottom: '1rem' }}
      >
        {showForm ? 'Cancel' : 'Add New Match'}
      </button>

      {showForm && (
        <div className="form-container">
          <h3>{editingMatch ? 'Edit Match' : 'Add New Match'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Opponent:</label>
              <input
                type="text"
                value={formData.opponent}
                onChange={(e) => setFormData({...formData, opponent: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Match Date:</label>
              <input
                type="date"
                value={formData.matchDate}
                onChange={(e) => setFormData({...formData, matchDate: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Venue:</label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => setFormData({...formData, venue: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Result:</label>
              <input
                type="text"
                value={formData.result}
                onChange={(e) => setFormData({...formData, result: e.target.value})}
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-success">
                {editingMatch ? 'Update' : 'Create'}
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
              <th>Match ID</th>
              <th>Opponent</th>
              <th>Match Date</th>
              <th>Venue</th>
              <th>Result</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {matches.map(match => (
              <tr key={match.matchId}>
                <td>{match.matchId}</td>
                <td>{match.opponent}</td>
                <td>{match.matchDate}</td>
                <td>{match.venue || 'N/A'}</td>
                <td>{match.result || 'N/A'}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn btn-primary" onClick={() => handleEdit(match)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(match.matchId)}>
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

export default MatchList;
