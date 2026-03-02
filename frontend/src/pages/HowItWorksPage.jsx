import React from 'react';
import { ArrowRight, ArrowDown, Server, Database, Globe, GitBranch, Rocket } from 'lucide-react';

function HowItWorksPage() {
    return (
        <div className="how-page">
            <h1 className="page-title">How It Works</h1>
            <p className="page-subtitle">Understanding the 3-Tier Cloud Architecture & CI/CD Pipeline</p>

            {/* Architecture Diagram */}
            <section className="architecture-section">
                <h2 className="section-title">Architecture Diagram</h2>
                <div className="arch-diagram glass-panel">
                    <div className="arch-tier">
                        <div className="arch-box frontend-box">
                            <Globe size={32} />
                            <h3>Frontend</h3>
                            <p>React.js + Vite</p>
                            <span className="arch-host">Hosted on Vercel</span>
                        </div>
                    </div>
                    <div className="arch-arrow"><ArrowDown size={32} className="arrow-icon" /><span>API Calls</span></div>
                    <div className="arch-tier">
                        <div className="arch-box backend-box">
                            <Server size={32} />
                            <h3>Backend</h3>
                            <p>Node.js + Express</p>
                            <span className="arch-host">Hosted on Render</span>
                        </div>
                    </div>
                    <div className="arch-arrow"><ArrowDown size={32} className="arrow-icon" /><span>Mongoose ORM</span></div>
                    <div className="arch-tier">
                        <div className="arch-box db-box">
                            <Database size={32} />
                            <h3>Database</h3>
                            <p>MongoDB Atlas</p>
                            <span className="arch-host">Cloud NoSQL (Free Tier)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CI/CD Flow */}
            <section className="cicd-section">
                <h2 className="section-title">CI/CD Pipeline Flow</h2>
                <p className="section-subtitle">What happens when you push code to GitHub</p>
                <div className="pipeline-flow">
                    <div className="pipeline-step glass-panel">
                        <div className="step-number">1</div>
                        <GitBranch size={28} />
                        <h3>Git Push</h3>
                        <p>Developer pushes code to the GitHub <code>main</code> branch</p>
                    </div>
                    <ArrowRight size={28} className="pipeline-arrow" />
                    <div className="pipeline-step glass-panel">
                        <div className="step-number">2</div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="step-icon github-icon" />
                        <h3>GitHub Actions</h3>
                        <p>CI pipeline installs dependencies and runs build checks on both frontend & backend</p>
                    </div>
                    <ArrowRight size={28} className="pipeline-arrow" />
                    <div className="pipeline-step glass-panel">
                        <div className="step-number">3</div>
                        <Rocket size={28} />
                        <h3>Auto Deploy</h3>
                        <p>Vercel deploys the frontend and Render deploys the backend — automatically!</p>
                    </div>
                </div>
            </section>

            {/* Simple Explanation */}
            <section className="simple-explain glass-panel">
                <h2>🤔 Still confused? Here's the simple version:</h2>
                <div className="simple-steps">
                    <p>Think of it like ordering food online:</p>
                    <ul>
                        <li><strong>Frontend (Vercel)</strong> = The food delivery app on your phone — what you see and tap on.</li>
                        <li><strong>Backend (Render)</strong> = The kitchen — it receives your order, processes it, and sends back the food.</li>
                        <li><strong>Database (MongoDB)</strong> = The notebook where the kitchen writes down all orders so they don't forget.</li>
                        <li><strong>CI/CD (GitHub Actions)</strong> = An automatic system that updates the app and kitchen whenever the chef improves a recipe — no manual work needed!</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default HowItWorksPage;
