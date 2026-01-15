import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer animate-fade-in delay-300">
            <p className="footer-tagline">
                Authentic peptides • Trusted sourcing • PH-based support
            </p>
            <p className="footer-copyright">
                © {new Date().getFullYear()} The Peptide Source PH
            </p>
        </footer>
    );
};

export default Footer;
