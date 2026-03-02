import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, PlusCircle, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function DashboardPage() {
    const [resources, setResources] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [environment, setEnvironment] = useState('Development');
    const [region, setRegion] = useState('us-east-1');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchResources();
    }, []);

    // Auto-clear notifications
    useEffect(() => {
        if (success || error) {
            const timer = setTimeout(() => { setSuccess(''); setError(''); }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success, error]);

    const fetchResources = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/resources`);
            setResources(data);
        } catch (err) {
            console.error('Error fetching resources:', err);
            setError('Could not connect to the server. Make sure the backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const addResource = async (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) {
            setError('Please fill in both Title and Description.');
            return;
        }
        try {
            const { data } = await axios.post(`${API_URL}/resources`, { title: title.trim(), description: description.trim(), environment, region });
            setResources([data, ...resources]);
            setTitle('');
            setDescription('');
            setEnvironment('Development');
            setRegion('us-east-1');
            setSuccess(`"${data.title}" added successfully!`);
            setError('');
        } catch (err) {
            console.error('Error adding resource:', err);
            setError('Failed to add resource. Please check if the backend server is running.');
        }
    };

    const updateStatus = async (id, currentStatus) => {
        const nextStatus = currentStatus === 'Pending' ? 'In Progress' : 'Completed';
        if (currentStatus === 'Completed') return;
        try {
            const { data } = await axios.put(`${API_URL}/resources/${id}`, { status: nextStatus });
            setResources(resources.map(r => r._id === id ? data : r));
            setSuccess(`Status updated to "${nextStatus}"!`);
        } catch (err) {
            console.error('Error updating status:', err);
            setError('Failed to update status.');
        }
    };

    const deleteResource = async (id) => {
        try {
            await axios.delete(`${API_URL}/resources/${id}`);
            setResources(resources.filter(r => r._id !== id));
            setSuccess('Resource deleted.');
        } catch (err) {
            console.error('Error deleting resource:', err);
            setError('Failed to delete resource.');
        }
    };

    const filteredResources = resources.filter(res =>
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const counts = {
        total: resources.length,
        pending: resources.filter(r => r.status === 'Pending').length,
        inProgress: resources.filter(r => r.status === 'In Progress').length,
        completed: resources.filter(r => r.status === 'Completed').length,
    };

    return (
        <div className="dashboard-page">
            <h1 className="page-title">Resource Dashboard</h1>
            <p className="page-subtitle">Add, track, and manage your cloud deployments</p>

            {/* Notification Toasts */}
            {success && <div className="toast toast-success">{success}</div>}
            {error && <div className="toast toast-error"><AlertCircle size={16} /> {error}</div>}

            {/* Stats Row */}
            <div className="dashboard-stats">
                <div className="mini-stat glass-panel"><span className="mini-stat-num">{counts.total}</span><span className="mini-stat-label">Total</span></div>
                <div className="mini-stat glass-panel pending-glow"><span className="mini-stat-num">{counts.pending}</span><span className="mini-stat-label">Pending</span></div>
                <div className="mini-stat glass-panel progress-glow"><span className="mini-stat-num">{counts.inProgress}</span><span className="mini-stat-label">In Progress</span></div>
                <div className="mini-stat glass-panel complete-glow"><span className="mini-stat-num">{counts.completed}</span><span className="mini-stat-label">Completed</span></div>
            </div>

            {/* Add Resource Form */}
            <section className="form-section glass-panel">
                <h2>Deploy New Resource</h2>
                <form onSubmit={addResource} className="resource-form">
                    <div className="input-group">
                        <input type="text" placeholder="Resource Title (e.g. Frontend Server)" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Description & Spec Details" value={description} onChange={(e) => setDescription(e.target.value)} />
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
                        <PlusCircle size={20} /> Add Resource
                    </button>
                </form>
            </section>

            {/* Resource List */}
            <section className="list-section">
                <div className="section-header">
                    <h2>Active Resources</h2>
                    <div className="search-bar">
                        <input type="text" placeholder="Search resources..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </div>
                {loading ? (
                    <div className="loading">Loading assets...</div>
                ) : resources.length === 0 ? (
                    <div className="empty-state glass-panel">
                        <PlusCircle size={48} className="empty-icon" />
                        <h3>No Resources Yet</h3>
                        <p>Add your first cloud resource using the form above to get started!</p>
                    </div>
                ) : filteredResources.length === 0 ? (
                    <div className="empty-state glass-panel">
                        <p>No results matching "{searchQuery}"</p>
                    </div>
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
                                        <button className="btn-action status-btn" onClick={() => updateStatus(resource._id, resource.status)}>
                                            {resource.status === 'Pending' ? <Clock size={16} /> : <CheckCircle size={16} />}
                                            {resource.status === 'Pending' ? 'Start' : 'Complete'}
                                        </button>
                                    )}
                                    <button className="btn-action delete-btn" onClick={() => deleteResource(resource._id)}>
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default DashboardPage;
