import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <footer className="app-footer">
        <p>Built with ❤️ by <strong>Omkar Gundale</strong> | Zero-Cost Cloud Architecture</p>
      </footer>
    </div>
  );
}

export default App;
