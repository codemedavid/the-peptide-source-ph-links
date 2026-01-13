import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer animate-fade-in delay-300">
            <p className="footer-tagline">
                Science-backed peptides • Recovery • Performance • Longevity
            </p>
            <p className="footer-copyright">
                © {new Date().getFullYear()} Gellies Peppies
            </p>
        </footer>
    );
};

export default Footer;
