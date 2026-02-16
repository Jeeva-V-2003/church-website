import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaCalendarAlt, FaPray } from 'react-icons/fa';
import '../styles/DailyMannaPage.css';

const DailyMannaPage = () => {
  const [manna, setManna] = useState(null);
  const [allManna, setAllManna] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    axios.get('http://localhost:5000/daily-manna/today').then(res => setManna(res.data));
    axios.get('http://localhost:5000/daily-manna/all').then(res => setAllManna(res.data));
  }, []);

  return (
    <div className="daily-manna-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Daily Manna</h1>
        <p>Your daily bread from Heaven</p>
      </motion.div>

      {manna && (
        <motion.div 
          className="manna-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="manna-header">
            <h2>{manna.title}</h2>
            <div className="manna-meta">
              <FaCalendarAlt /> {new Date(manna.date).toLocaleDateString('en-US', { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
              })}
            </div>
          </div>

          <div className="scripture-box">
            <h3>{manna.scripture}</h3>
            <blockquote>"{manna.verse}"</blockquote>
          </div>

          <div className="devotion-content">
            <p>{manna.content}</p>
          </div>

          {manna.reflection && (
            <div className="reflection-box">
              <h4>Reflection</h4>
              <p>{manna.reflection}</p>
            </div>
          )}

          {manna.prayer && (
            <div className="prayer-box">
              <FaPray className="prayer-icon" />
              <h4>Prayer</h4>
              <p>{manna.prayer}</p>
            </div>
          )}
        </motion.div>
      )}

      <div className="manna-archive">
        <h3>Previous Devotions</h3>
        <div className="archive-grid">
          {allManna.slice(0, 6).map((item, index) => (
            <motion.div 
              key={item._id}
              className="archive-card"
              whileHover={{ scale: 1.03 }}
            >
              <h4>{item.title}</h4>
              <p>{new Date(item.date).toLocaleDateString()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyMannaPage;
