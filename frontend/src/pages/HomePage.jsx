import React from 'react';
import { Link } from 'react-router-dom';
import { Server, ArrowRight, Database, Globe, GitBranch, Zap } from 'lucide-react';

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-glow"></div>
                <Server className="hero-icon" />
                <h1 className="hero-title">Premium Resource Tracker</h1>
                <p className="hero-subtitle">Enterprise-Grade Cloud Deployment Management</p>
                <p className="hero-description">
                    A powerful, real-time dashboard to <strong>track, manage, and monitor</strong> all your cloud
                    infrastructure resources in one place. Built with the MERN stack and deployed using a fully
                    automated CI/CD pipeline — at zero cost.
                </p>
                <div className="hero-actions">
                    <Link to="/dashboard" className="btn-primary pulse-hover hero-btn">
                        <Zap size={20} /> Open Dashboard <ArrowRight size={20} />
                    </Link>
                    <Link to="/how-it-works" className="btn-outline hero-btn">
                        How It Works
                    </Link>
                </div>
            </section>

            {/* What Is This Section */}
            <section className="explainer-section">
                <h2 className="section-title">What Does This App Do?</h2>
                <div className="explainer-grid">
                    <div className="explainer-card glass-panel">
                        <div className="explainer-number">1</div>
                        <Database className="explainer-icon" />
                        <h3>Add Your Resources</h3>
                        <p>Got a new server, database, or website? Log it here with a name, description, environment (Dev/Staging/Prod), and region.</p>
                    </div>
                    <div className="explainer-card glass-panel">
                        <div className="explainer-number">2</div>
                        <GitBranch className="explainer-icon" />
                        <h3>Track Their Status</h3>
                        <p>Every resource starts as "Pending". Click to move it to "In Progress" when you're working on it, then "Completed" when it's live.</p>
                    </div>
                    <div className="explainer-card glass-panel">
                        <div className="explainer-number">3</div>
                        <Globe className="explainer-icon" />
                        <h3>Monitor Everything</h3>
                        <p>Search, filter, and manage all your cloud assets from one beautiful dashboard. Delete old resources when they're no longer needed.</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stat-card glass-panel">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Tier Architecture</span>
                </div>
                <div className="stat-card glass-panel">
                    <span className="stat-number">0</span>
                    <span className="stat-label">Cost (₹0 Budget)</span>
                </div>
                <div className="stat-card glass-panel">
                    <span className="stat-number">∞</span>
                    <span className="stat-label">Auto Deploys</span>
                </div>
                <div className="stat-card glass-panel">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Cloud Services</span>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-section">
                <h2 className="section-title">Built With</h2>
                <p className="section-subtitle">The technologies and services powering this application</p>
                <div className="tech-grid">
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon-img" />
                        <span className="tech-name">React.js</span>
                        <span className="tech-role">Frontend UI</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-icon-img" />
                        <span className="tech-name">Node.js</span>
                        <span className="tech-role">Runtime</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="tech-icon-img express-icon" />
                        <span className="tech-name">Express.js</span>
                        <span className="tech-role">REST API</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="tech-icon-img" />
                        <span className="tech-name">MongoDB Atlas</span>
                        <span className="tech-role">Cloud Database</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="tech-icon-img github-icon" />
                        <span className="tech-name">GitHub Actions</span>
                        <span className="tech-role">CI/CD Pipeline</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="tech-icon-img vercel-icon" />
                        <span className="tech-name">Vercel</span>
                        <span className="tech-role">Frontend Hosting</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
