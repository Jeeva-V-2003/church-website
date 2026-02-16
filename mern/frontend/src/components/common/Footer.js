import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Bible Standard Ministries</h3>
          <p>Spreading the Word of God through daily devotions, publications, and community events.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/daily-manna">Daily Manna</Link>
          <Link to="/magazines">Magazines</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaEnvelope /> info@biblestandard.org</p>
          <p><FaPhone /> +1 (555) 123-4567</p>
          <p><FaMapMarkerAlt /> 123 Faith Street, City</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Bible Standard Ministries. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
