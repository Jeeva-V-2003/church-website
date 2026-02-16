import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBook, FaUsers, FaGlobe } from 'react-icons/fa';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>About Us</h1>
        <p>Serving God's people since 1918</p>
      </motion.div>

      <section className="mission-section">
        <motion.div 
          className="mission-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Our Mission</h2>
          <p>Bible Standard Ministries is dedicated to spreading the Gospel of Jesus Christ through daily devotions, publications, and community outreach. We believe in the power of God's Word to transform lives and bring hope to all who seek Him.</p>
        </motion.div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <motion.div 
            className="value-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaBook className="value-icon" />
            <h3>Biblical Truth</h3>
            <p>We stand firmly on the Word of God as our foundation</p>
          </motion.div>

          <motion.div 
            className="value-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaHeart className="value-icon" />
            <h3>Love & Compassion</h3>
            <p>Serving others with Christ's love in our hearts</p>
          </motion.div>

          <motion.div 
            className="value-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="value-icon" />
            <h3>Community</h3>
            <p>Building strong fellowship among believers</p>
          </motion.div>

          <motion.div 
            className="value-card"
            whileHover={{ scale: 1.05 }}
          >
            <FaGlobe className="value-icon" />
            <h3>Global Reach</h3>
            <p>Spreading the Gospel to all nations</p>
          </motion.div>
        </div>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>1918</h3>
            <p>Bible Standard Ministries was founded with a vision to provide daily spiritual nourishment</p>
          </div>
          <div className="timeline-item">
            <h3>1950</h3>
            <p>Launched our monthly magazine reaching thousands of readers</p>
          </div>
          <div className="timeline-item">
            <h3>2000</h3>
            <p>Expanded our ministry with community events and outreach programs</p>
          </div>
          <div className="timeline-item">
            <h3>2024</h3>
            <p>Embracing digital platforms to reach a global audience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
