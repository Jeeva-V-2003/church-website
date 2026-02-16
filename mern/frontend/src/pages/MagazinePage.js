import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaDownload, FaEye } from 'react-icons/fa';
import '../styles/MagazinePage.css';

const MagazinePage = () => {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/magazines').then(res => setMagazines(res.data));
  }, []);

  return (
    <div className="magazine-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Monthly Magazines</h1>
        <p>Explore our collection of spiritual publications</p>
      </motion.div>

      <div className="magazines-grid">
        {magazines.map((magazine, index) => (
          <motion.div
            key={magazine._id}
            className="magazine-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="magazine-cover">
              <img src={magazine.coverImage || '/placeholder-magazine.jpg'} alt={magazine.title} />
              <div className="magazine-overlay">
                <Link to={`/magazines/${magazine._id}`} className="view-btn">
                  <FaEye /> View
                </Link>
                <a href={magazine.pdfUrl} className="download-btn" download>
                  <FaDownload /> Download
                </a>
              </div>
            </div>
            <div className="magazine-info">
              <h3>{magazine.title}</h3>
              <p className="magazine-date">{magazine.month} {magazine.year}</p>
              <p className="magazine-desc">{magazine.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MagazinePage;
