import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, PlusCircle, CheckCircle, Clock, Server } from 'lucide-react';
import './index.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [environment, setEnvironment] = useState('Development');
  const [region, setRegion] = useState('us-east-1');
  const [searchQuery, setSearchQuery] = useState('');
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
      // Note: we are sending environment and region, though backend schema only expects title/desc/status right now.
      // We will update backend schema to accept these new fields.
      const { data } = await axios.post(`${API_URL}/resources`, { title, description, environment, region });
      setResources([data, ...resources]);
      setTitle('');
      setDescription('');
      setEnvironment('Development');
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

  const filteredResources = resources.filter(res =>
    res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    res.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="glass-header">
        <Server className="icon header-icon" />
        <h1>Premium Resource Tracker</h1>
        <p>Enterprise-Grade Deployment Management</p>
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
            <div className="input-row">
              <div className="input-group">
                <select value={environment} onChange={(e) => setEnvironment(e.target.value)}>
                  <option value="Development">Development</option>
                  <option value="Staging">Staging</option>
                  <option value="Production">Production</option>
                </select>
              </div>
              <div className="input-group">
                <select value={region} onChange={(e) => setRegion(e.target.value)}>
                  <option value="us-east-1">US East (N. Virginia)</option>
                  <option value="eu-central-1">EU Central (Frankfurt)</option>
                  <option value="ap-south-1">AP South (Mumbai)</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn-primary pulse-hover">
              <PlusCircle className="icon" /> Add Resource
            </button>
          </form>
        </section>

        <section className="list-section">
          <div className="section-header">
            <h2>Active Resources</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          {loading ? (
            <div className="loading">Loading assets...</div>
          ) : resources.length === 0 ? (
            <div className="empty-state glass-panel">No resources found.</div>
          ) : (
            <div className="resource-grid">
              {filteredResources.map((resource) => (
                <div key={resource._id} className="resource-card glass-panel interactive-card">
                  <div className="card-header">
                    <h3>{resource.title}</h3>
                    <span className={`status-badge ${resource.status.toLowerCase().replace(' ', '-')}`}>
                      {resource.status}
                    </span>
                  </div>
                  <div className="meta-tags">
                    <span className="tag env-tag">{resource.environment || 'Development'}</span>
                    <span className="tag region-tag">{resource.region || 'us-east-1'}</span>
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
