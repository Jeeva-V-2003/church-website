import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { publicationAPI } from '../services/api';
import { FaNewspaper, FaDownload } from 'react-icons/fa';
import '../styles/MagazinePage.css';

const PublicationPage = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    publicationAPI.getAll()
      .then(res => {
        setPublications(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading Publications...</div>;

  return (
    <div className="magazine-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Publications</h1>
        <p>Bible Standard magazines and literature</p>
      </motion.div>

      <div className="magazine-grid">
        {publications.length === 0 ? (
          <div className="no-content">
            <FaNewspaper />
            <p>No publications available at the moment.</p>
          </div>
        ) : (
          publications.map((publication, index) => (
            <motion.div 
              key={publication._id}
              className="magazine-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {publication.coverImage && (
                <img src={publication.coverImage} alt={publication.title} />
              )}
              <div className="magazine-info">
                <h3>{publication.title}</h3>
                <p className="type">{publication.type}</p>
                <p>{publication.description}</p>
                <p className="date">{new Date(publication.publishedDate).toLocaleDateString()}</p>
                {publication.downloadUrl && (
                  <a href={publication.downloadUrl} className="download-btn">
                    <FaDownload /> Download
                  </a>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default PublicationPage;