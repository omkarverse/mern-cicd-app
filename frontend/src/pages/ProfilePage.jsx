import React from 'react';
import { Github, Mail, Linkedin, MapPin, Briefcase } from 'lucide-react';

function ProfilePage() {
    return (
        <div className="profile-page">
            <h1 className="page-title">Developer Profile</h1>

            <div className="profile-hero glass-panel">
                <div className="profile-banner"></div>
                <div className="profile-content">
                    <div className="profile-avatar-wrapper">
                        <img
                            src="/omkarprofile.png"
                            alt="Omkar Gundale"
                            className="profile-avatar"
                            onError={(e) => {
                                e.target.src = 'https://ui-avatars.com/api/?name=Omkar+Gundale&background=ffd700&color=000&size=200&bold=true';
                            }}
                        />
                    </div>
                    <h2 className="profile-name">Omkar Gundale</h2>
                    <p className="profile-title">Full-Stack Developer & Cloud Architect</p>
                    <div className="profile-meta">
                        <span><MapPin size={16} /> India</span>
                        <span><Briefcase size={16} /> MERN Stack Developer</span>
                    </div>
                    <p className="profile-bio">
                        Building scalable, beautiful, and production-ready web applications.
                        Passionate about cloud infrastructure, CI/CD automation, and modern JavaScript frameworks.
                    </p>
                    <div className="profile-links">
                        <a href="https://github.com/omkarverse" target="_blank" rel="noopener noreferrer" className="profile-link-btn">
                            <Github size={18} /> GitHub
                        </a>
                        <a href="mailto:omkar.comp.er@gmail.com" className="profile-link-btn">
                            <Mail size={18} /> Email
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="profile-link-btn">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <section className="skills-section">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="skills-grid">
                    {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML/CSS', 'Git/GitHub', 'CI/CD', 'Vercel', 'REST APIs'].map(skill => (
                        <span key={skill} className="skill-tag glass-panel">{skill}</span>
                    ))}
                </div>
            </section>

            {/* Project Stats */}
            <section className="project-highlight glass-panel">
                <h2>🏆 This Project Highlights</h2>
                <div className="highlight-grid">
                    <div className="highlight-item">
                        <span className="highlight-num">MERN</span>
                        <span className="highlight-label">Full Stack</span>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-num">3-Tier</span>
                        <span className="highlight-label">Architecture</span>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-num">CI/CD</span>
                        <span className="highlight-label">Automated</span>
                    </div>
                    <div className="highlight-item">
                        <span className="highlight-num">₹0</span>
                        <span className="highlight-label">Total Cost</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProfilePage;
