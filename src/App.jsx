import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { supabase } from './lib/supabase';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

// Public Home Component
const Home = () => {
  // Using static links for Gellies Peppies rebrand effectively immediately
  const links = [
    {
      text: 'Join Our WhatsApp Community',
      href: 'https://chat.whatsapp.com/Iy46aF2sL44FhFC5a2hqkv',
      icon: '💬',
      variant: 'primary'
    },
    {
      text: 'Contact Us on WhatsApp',
      href: 'https://wa.me/639178520660',
      icon: '📲',
      variant: 'primary'
    },
    {
      text: 'Instagram — Gellies Peppies',
      href: 'https://www.instagram.com/gellies.peppies08',
      icon: '📸',
      variant: 'social'
    },
    {
      text: 'Facebook — Gellies Peppies',
      href: 'https://www.facebook.com/share/1EsjenZVrK/?mibextid=wwXIfr',
      icon: '📘',
      variant: 'social'
    },
    {
      text: 'Telegram — Direct Chat',
      href: 'https://t.me/angie587',
      icon: '📨',
      variant: 'social'
    },
    {
      text: 'TikTok — Gellies Peppies',
      href: 'https://www.tiktok.com/@gellies.peppiesforyou?_r=1&_t=ZS-931dUxI42t7',
      icon: '🎶',
      variant: 'social'
    }
  ];

  /* 
  // Supabase fetch commented out for static rebrand deploy
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLinks();
  }, []);
  ...
  */

  return (
    <div className="app-container">
      {/* Background Decor */}
      <div className="bg-decor bg-orb-1"></div>
      <div className="bg-decor bg-orb-2"></div>
      <div className="bg-decor bg-orb-3"></div>

      {/* Background Line Heart */}
      <img src="/line-heart.svg" alt="" className="bg-heart-decor" />

      {/* Header Section */}
      <header className="header animate-fade-in">
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="Gellies Peppies Logo"
            className="logo-img"
          />
          <div className="logo-glow"></div>
        </div>

        <h1 className="brand-name">
          Gellies Peppies
        </h1>
        <p className="brand-tagline">
          Peptides For You
        </p>

        <img src="/heart-line.svg" alt="Heart Line" className="brand-separator" />

        <p className="brand-description" style={{ maxWidth: '600px', margin: '0.5rem auto 0', lineHeight: '1.6', fontSize: '0.95rem', opacity: 0.9 }}>
          Unlock your body's hidden potential with the purest peptides on the market. Don’t just age — evolve with targeted recovery and peak performance.
        </p>
      </header>

      {/* Links Section */}
      <main className="links-container">
        {links.map((link, index) => (
          <LinkButton
            key={index}
            text={link.text}
            href={link.href}
            icon={link.icon}
            delay={0.1 + (index * 0.05)}
            variant={link.variant}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
