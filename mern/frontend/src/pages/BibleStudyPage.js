import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { bibleStudyAPI } from '../services/api';
import { FaBook } from 'react-icons/fa';
import '../styles/DailyMannaPage.css';

const BibleStudyPage = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bibleStudyAPI.getAll()
      .then(res => {
        setStudies(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading Bible Studies...</div>;

  return (
    <div className="daily-manna-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Bible Studies</h1>
        <p>Deep scriptural studies for spiritual growth</p>
      </motion.div>

      <div className="manna-archive">
        <div className="archive-grid">
          {studies.length === 0 ? (
            <div className="no-content">
              <FaBook />
              <p>No Bible studies available at the moment.</p>
            </div>
          ) : (
            studies.map((study, index) => (
              <motion.div 
                key={study._id}
                className="archive-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{study.title}</h3>
                <p className="scripture">{study.scripture}</p>
                <div className="content">{study.content}</div>
                {study.lesson && <div className="lesson"><strong>Lesson:</strong> {study.lesson}</div>}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BibleStudyPage;