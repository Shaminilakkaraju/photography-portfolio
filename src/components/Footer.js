import React from 'react';
import './Footer.css';
import SocialMedia from './SocialMedia';

const Footer = () => (
  <footer className="footer">
    <div className="footer-bottom"> <SocialMedia />
      <p>&copy; 2024 LENS Photography Studio. All rights reserved.</p>  
    </div>
  </footer>
);

export default Footer;
