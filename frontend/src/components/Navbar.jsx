import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Server, Menu, X, User, LogIn, LogOut } from 'lucide-react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/" className="brand-link">
                    <Server className="brand-icon" />
                    <span className="brand-text">CloudTracker</span>
                </Link>
            </div>

            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/dashboard" className={isActive('/dashboard')} onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <Link to="/how-it-works" className={isActive('/how-it-works')} onClick={() => setMenuOpen(false)}>How It Works</Link>
                <Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to="/profile" className={isActive('/profile')} onClick={() => setMenuOpen(false)}>
                    <img src="/omkarprofile.png" alt="Profile" className="nav-avatar" onError={(e) => { e.target.style.display = 'none'; }} />
                    Profile
                </Link>
                <button
                    className="nav-auth-btn"
                    onClick={() => { setLoggedIn(!loggedIn); setMenuOpen(false); }}
                >
                    {loggedIn ? <><LogOut size={16} /> Logout</> : <><LogIn size={16} /> Login</>}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
