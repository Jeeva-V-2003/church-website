import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaCalendar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../styles/EventsPage.css';

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');

  useEffect(() => {
    axios.get('http://localhost:5000/events/upcoming').then(res => setUpcomingEvents(res.data));
    axios.get('http://localhost:5000/events/past').then(res => setPastEvents(res.data));
  }, []);

  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="events-page">
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Our Events</h1>
        <p>Join us in fellowship and worship</p>
      </motion.div>

      <div className="events-tabs">
        <button 
          className={activeTab === 'upcoming' ? 'active' : ''}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Events
        </button>
        <button 
          className={activeTab === 'past' ? 'active' : ''}
          onClick={() => setActiveTab('past')}
        >
          Past Events
        </button>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <motion.div
            key={event._id}
            className="event-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            {event.image && (
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
            )}
            <div className="event-content">
              <h3>{event.title}</h3>
              <div className="event-details">
                <p><FaCalendar /> {new Date(event.date).toLocaleDateString()}</p>
                {event.time && <p><FaClock /> {event.time}</p>}
                <p><FaMapMarkerAlt /> {event.location}</p>
              </div>
              <p className="event-description">{event.description}</p>
              {event.speaker && <p className="event-speaker">Speaker: {event.speaker}</p>}
              <Link to={`/events/${event._id}`} className="details-btn">View Details</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
