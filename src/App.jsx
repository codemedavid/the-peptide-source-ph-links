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
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      if (typeof supabase !== 'undefined') {
        // Attempt to fetch if supabase is configured
        let { data, error } = await supabase
          .from('links')
          .select('*')
          .eq('active', true)
          .order('order_index', { ascending: true });

        if (error) throw error;

        if (data && data.length > 0) {
          // Schema Check
          if (typeof data[0].subtext === 'undefined') {
            console.warn("Detected old database schema (missing 'subtext'). Falling back to hardcoded configuration.");
            throw new Error("Old Schema Detected");
          }
          setLinks(data);
          return;
        }
      }
      throw new Error("No links in DB or Supabase not configured");
    } catch (error) {
      console.log('Using default links configuration');
      // Default Fallback Links based on Rebranding
      setLinks([
        { text: 'Primary Actions', variant: 'header' },
        { text: 'Price List', href: 'https://the-peptide-source-ph.vercel.app', icon: '💰', variant: 'primary' },
        { text: 'WhatsApp', href: 'https://wa.me/639953928293', icon: '💬', variant: 'primary' },
        { text: 'Messenger', href: 'https://www.facebook.com/share/176BcpFAUF/?mibextid=wwXIfr', icon: '💬', variant: 'primary' },

        { text: 'Follow & Connect', variant: 'header' },
        { text: 'Facebook', href: 'https://www.facebook.com/share/14a9hoDToGS/?mibextid=wwXIfr', icon: '📘', variant: 'secondary' },
        { text: 'TikTok', href: 'https://www.tiktok.com/@peptidesourceph?_r=1&_t=ZS-931t3ljE9g4', icon: '🎵', variant: 'secondary' },

        { text: 'Contact Details', variant: 'header' },
        { text: '09953928293', href: 'tel:+639953928293', icon: '📱', variant: 'secondary' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* Background Decor - Simplified */}
      {/* <div className="bg-decor bg-orb-1"></div> */}

      {/* Header Section */}
      <header className="header animate-fade-in">
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="The Peptide Source PH Logo"
            className="logo-img"
          />
          <div className="logo-glow"></div>
        </div>

        <h1 className="brand-name">
          The Peptide Source PH
        </h1>
        <p className="brand-tagline">
          Precision Peptides: The Science of a Better You.
        </p>

        <div className="brand-separator-line"></div>

        <p className="brand-description" style={{ maxWidth: '600px', margin: '0.5rem auto 0', lineHeight: '1.6', fontSize: '0.95rem', opacity: 0.9 }}>
          Pure Bio-Logic. Proven Results.
        </p>
      </header>

      {/* Links Section */}
      <main className="links-container">
        {links.map((link, index) => {
          if (link.variant === 'header') {
            return (
              <h2
                key={index}
                className="link-section-header animate-fade-in"
                style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
              >
                {link.text}
              </h2>
            );
          }
          return (
            <LinkButton
              key={index}
              text={link.text}
              subtext={link.subtext}
              href={link.href}
              icon={link.icon}
              delay={0.1 + (index * 0.05)}
              variant={link.variant}
            />
          );
        })}
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
