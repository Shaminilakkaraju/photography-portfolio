import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
    <div className="logo">
       <FontAwesomeIcon icon={faCamera} /> LENS
    </div>
    <ul className="menu">
      <li className="menu-item"><Link to="/">Home</Link></li>
      <li className="menu-item"><Link to="/about">About Us</Link></li>
      <li className="menu-item"><Link to="/gallery">Gallery</Link></li>
      <li className="menu-item"><Link to="/testimonials">Testimonials</Link></li>
      <li className="menu-item"><Link to="/contactus">Contact Us</Link></li>
      <li className="menu-item"><Link to="/client">Client Portal</Link></li>
      <li className="menu-item"><Link to="/feedback">Feedback</Link></li>
    </ul>
  </nav>  
);

export default Navbar;
