import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { conventionAPI } from '../services/api';
import { FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/EventsPage.css';

const ConventionPage = () => {
  const [conventions, setConventions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    conventionAPI.getAll()
      .then(res => {
        setConventions(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading Conventions...</div>;

  return (
    <div className="events-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Bible Conventions</h1>
        <p>Join us for fellowship and Bible study</p>
      </motion.div>

      <div className="events-grid">
        {conventions.length === 0 ? (
          <div className="no-content">
            <FaCalendar />
            <p>No conventions scheduled at the moment.</p>
          </div>
        ) : (
          conventions.map((convention, index) => (
            <motion.div 
              key={convention._id}
              className="event-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="event-date">
                <FaCalendar />
                <span>{new Date(convention.startDate).toLocaleDateString()} - {new Date(convention.endDate).toLocaleDateString()}</span>
              </div>
              <h3>{convention.title}</h3>
              <div className="event-location">
                <FaMapMarkerAlt />
                <span>{convention.location}</span>
              </div>
              <p>{convention.description}</p>
              {convention.registrationUrl && (
                <a href={convention.registrationUrl} className="register-btn" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Register
                </a>
              )}
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConventionPage;