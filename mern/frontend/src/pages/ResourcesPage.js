import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaNewspaper } from 'react-icons/fa';
import '../styles/ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Resources</h1>
        <p>Magazines and Bible Studies</p>
      </motion.div>

      <section className="resources-section">
        <div className="container">
          <div className="resources-grid">
            <motion.div 
              className="resource-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <FaNewspaper className="resource-icon" />
              <h2>Magazines</h2>
              <p>The Bible Standard magazine - Nearly a century of Bible truth and answers to religious questions</p>
              <Link to="/magazine" className="resource-btn">View Magazines</Link>
            </motion.div>

            <motion.div 
              className="resource-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <FaBook className="resource-icon" />
              <h2>Bible Studies</h2>
              <p>Comprehensive examination of Bible subjects designed to aid in personal and group Bible study</p>
              <Link to="/bible-study" className="resource-btn">View Studies</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
