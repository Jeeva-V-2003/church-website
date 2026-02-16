import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../styles/DetailPage.css';

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/events/${id}`).then(res => setEvent(res.data));
  }, [id]);

  if (!event) return <div className="loading">Loading...</div>;

  return (
    <motion.div 
      className="detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="detail-container">
        {event.image && <img src={event.image} alt={event.title} className="detail-image" />}
        <div className="detail-content">
          <h1>{event.title}</h1>
          <div className="event-meta">
            <p><FaCalendar /> {new Date(event.date).toLocaleDateString()}</p>
            {event.time && <p><FaClock /> {event.time}</p>}
            <p><FaMapMarkerAlt /> {event.location}</p>
          </div>
          <p className="detail-description">{event.description}</p>
          {event.speaker && <p className="speaker-info">Speaker: <strong>{event.speaker}</strong></p>}
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetailPage;
