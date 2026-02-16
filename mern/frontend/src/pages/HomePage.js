import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaCalendar, FaNewspaper, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import '../styles/HomePage.css';

const HomePage = () => {
  const [todayManna, setTodayManna] = useState(null);
  const [latestMagazine, setLatestMagazine] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/daily-manna/today').then(res => setTodayManna(res.data));
    axios.get('http://localhost:5000/magazines/latest').then(res => setLatestMagazine(res.data));
    axios.get('http://localhost:5000/events/upcoming').then(res => setUpcomingEvents(res.data.slice(0, 3)));
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Welcome to Bible Standard Ministries</h1>
          <p>Nourishing souls with the Word of God daily</p>
          <Link to="/daily-manna" className="cta-button">
            Today's Manna <FaArrowRight />
          </Link>
        </motion.div>
        <div className="floating-elements">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </section>

      <section className="features-section">
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaBook className="feature-icon" />
          <h3>Daily Manna</h3>
          <p>Fresh spiritual nourishment every day</p>
          <Link to="/daily-manna">Read More</Link>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaNewspaper className="feature-icon" />
          <h3>Monthly Magazine</h3>
          <p>In-depth articles and teachings</p>
          <Link to="/magazines">View Magazines</Link>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaCalendar className="feature-icon" />
          <h3>Events</h3>
          <p>Join our community gatherings</p>
          <Link to="/events">See Events</Link>
        </motion.div>
      </section>

      {todayManna && (
        <section className="today-manna-preview">
          <h2>Today's Manna</h2>
          <motion.div 
            className="manna-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3>{todayManna.title}</h3>
            <p className="scripture">{todayManna.scripture}</p>
            <p className="verse">"{todayManna.verse}"</p>
            <Link to="/daily-manna" className="read-more">Read Full Devotion</Link>
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
