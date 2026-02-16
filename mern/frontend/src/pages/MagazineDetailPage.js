import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../styles/DetailPage.css';

const MagazineDetailPage = () => {
  const { id } = useParams();
  const [magazine, setMagazine] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/magazines/${id}`).then(res => setMagazine(res.data));
  }, [id]);

  if (!magazine) return <div className="loading">Loading...</div>;

  return (
    <motion.div 
      className="detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="detail-container">
        <img src={magazine.coverImage} alt={magazine.title} className="detail-image" />
        <div className="detail-content">
          <h1>{magazine.title}</h1>
          <p className="detail-date">{magazine.month} {magazine.year}</p>
          <p className="detail-description">{magazine.description}</p>
          <a href={magazine.pdfUrl} className="download-btn" download>Download PDF</a>
        </div>
      </div>
    </motion.div>
  );
};

export default MagazineDetailPage;
