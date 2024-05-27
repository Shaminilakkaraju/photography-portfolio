import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => (
  <div className="social-container">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
      <FaFacebook className="social-icon" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
      <FaTwitter className="social-icon" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
      <FaInstagram className="social-icon" />
    </a>
  </div>
);

export default SocialMedia;

