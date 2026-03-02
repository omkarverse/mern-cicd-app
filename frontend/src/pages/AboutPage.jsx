import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

function AboutPage() {
    return (
        <div className="about-page">
            <h1 className="page-title">About This Project</h1>
            <p className="page-subtitle">A Multi-Tier Cloud Application with CI/CD Integration</p>

            {/* Project Info */}
            <section className="about-info glass-panel">
                <h2>What is the Cloud Resource Tracker?</h2>
                <p>
                    The <strong>Cloud Resource Tracker</strong> is a full-stack web application designed to help
                    teams and developers track their cloud infrastructure deployments. Whether it's a frontend
                    server, a backend API, or a database instance — you can log it, monitor its status, and
                    manage it all from one premium dashboard.
                </p>
                <p>
                    This project demonstrates a <strong>production-grade 3-tier architecture</strong> using the
                    MERN stack (MongoDB, Express.js, React.js, Node.js), deployed across multiple cloud platforms
                    with a fully automated CI/CD pipeline — all within a <strong>zero-cost budget</strong>.
                </p>
            </section>

            {/* Developer Card */}
            <section className="developer-section">
                <h2 className="section-title">Meet the Developer</h2>
                <div className="developer-card glass-panel">
                    <div className="dev-avatar-wrapper">
                        <img
                            src="/omkarprofile.png"
                            alt="Omkar Gundale"
                            className="dev-avatar"
                            onError={(e) => {
                                e.target.src = 'https://ui-avatars.com/api/?name=Omkar+Gundale&background=ffd700&color=000&size=200&bold=true';
                            }}
                        />
                    </div>
                    <div className="dev-info">
                        <h3>Omkar Gundale</h3>
                        <p className="dev-role">Full-Stack Developer & Cloud Architect</p>
                        <p className="dev-bio">
                            Passionate about building scalable cloud applications and modern web experiences.
                            This project was built to demonstrate practical implementations of multi-tier architectures,
                            automated CI/CD workflows, and zero-cost cloud deployment strategies.
                        </p>
                        <div className="dev-links">
                            <a href="https://github.com/omkarverse" target="_blank" rel="noopener noreferrer" className="dev-link">
                                <Github size={20} /> GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="dev-link">
                                <Linkedin size={20} /> LinkedIn
                            </a>
                            <a href="mailto:omkar.comp.er@gmail.com" className="dev-link">
                                <Mail size={20} /> Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-section">
                <h2 className="section-title">Technology Stack</h2>
                <div className="tech-grid">
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon-img" />
                        <span className="tech-name">React.js</span>
                        <span className="tech-role">Frontend UI Framework</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-icon-img" />
                        <span className="tech-name">Node.js</span>
                        <span className="tech-role">Server Runtime</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="tech-icon-img express-icon" />
                        <span className="tech-name">Express.js</span>
                        <span className="tech-role">REST API Framework</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="tech-icon-img" />
                        <span className="tech-name">MongoDB Atlas</span>
                        <span className="tech-role">Cloud NoSQL Database</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Actions" className="tech-icon-img github-icon" />
                        <span className="tech-name">GitHub Actions</span>
                        <span className="tech-role">CI/CD Automation</span>
                    </div>
                    <div className="tech-card glass-panel">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="tech-icon-img vercel-icon" />
                        <span className="tech-name">Vercel</span>
                        <span className="tech-role">Edge Hosting (Frontend)</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
