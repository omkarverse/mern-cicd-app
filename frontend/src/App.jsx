import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, PlusCircle, CheckCircle, Clock, Server } from 'lucide-react';
import './index.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/resources`);
      setResources(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching resources:', err);
      setLoading(false);
    }
  };

  const addResource = async (e) => {
    e.preventDefault();
    if (!title || !description) return;
    try {
      const { data } = await axios.post(`${API_URL}/resources`, { title, description });
      setResources([data, ...resources]);
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Error adding resource:', err);
    }
  };

  const updateStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'Pending' ? 'In Progress' : 'Completed';
    if (currentStatus === 'Completed') return; // Cannot update beyond completed here
    try {
      const { data } = await axios.put(`${API_URL}/resources/${id}`, { status: nextStatus });
      setResources(resources.map(r => r._id === id ? data : r));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const deleteResource = async (id) => {
    try {
      await axios.delete(`${API_URL}/resources/${id}`);
      setResources(resources.filter(r => r._id !== id));
    } catch (err) {
      console.error('Error deleting resource:', err);
    }
  };

  return (
    <div className="app-container">
      <header className="glass-header">
        <Server className="icon header-icon" />
        <h1>Cloud Resource Tracker</h1>
        <p>Manage your deployment assets dynamically</p>
      </header>

      <main className="main-content">
        <section className="form-section glass-panel">
          <h2>Deploy New Resource</h2>
          <form onSubmit={addResource} className="resource-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Resource Title (e.g. Frontend Server)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Description & Spec Details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary">
              <PlusCircle className="icon" /> Add Resource
            </button>
          </form>
        </section>

        <section className="list-section">
          <h2>Active Resources</h2>
          {loading ? (
            <div className="loading">Loading assets...</div>
          ) : resources.length === 0 ? (
            <div className="empty-state glass-panel">No resources tracked yet. Add one above!</div>
          ) : (
            <div className="resource-grid">
              {resources.map((resource) => (
                <div key={resource._id} className="resource-card glass-panel">
                  <div className="card-header">
                    <h3>{resource.title}</h3>
                    <span className={`status-badge ${resource.status.toLowerCase().replace(' ', '-')}`}>
                      {resource.status}
                    </span>
                  </div>
                  <p className="card-desc">{resource.description}</p>

                  <div className="card-actions">
                    {resource.status !== 'Completed' && (
                      <button
                        className="btn-action status-btn"
                        onClick={() => updateStatus(resource._id, resource.status)}
                      >
                        {resource.status === 'Pending' ? <Clock className="icon-sm" /> : <CheckCircle className="icon-sm" />}
                        {resource.status === 'Pending' ? 'Start' : 'Complete'}
                      </button>
                    )}
                    <button
                      className="btn-action delete-btn"
                      onClick={() => deleteResource(resource._id)}
                    >
                      <Trash2 className="icon-sm" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
