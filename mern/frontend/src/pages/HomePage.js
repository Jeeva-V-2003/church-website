import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaYoutube, FaFacebook } from 'react-icons/fa';
import dispensationChart from '../assets/images/dispensation_chart.jpg';
import mottoCard from '../assets/images/motto.png';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Dispensation Chart and Motto */}
      <section className="hero-section">
        <div className="hero-images">
          <motion.img 
            src={dispensationChart} 
            alt="Dispensation Chart - Plan of the Ages"
            className="dispensation-chart"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img 
            src={mottoCard} 
            alt="Motto Card 2026"
            className="motto-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </section>

      {/* Welcome Section with Background */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome<br />Treasure Seekers</h2>
          <p className="large-text">to the home of<br /><em><Link to="/resources">The Bible Standard</Link></em><br />magazine</p>
          <blockquote>Spreading the Truth of God's Plan of the Ages for nearly a century</blockquote>
        </div>
      </section>

      {/* YouTube & Social Media Promo */}
      <section className="social-promo">
        <div className="container">
          <div className="promo-content">
            <FaYoutube className="youtube-icon" />
            <div className="promo-text">
              <h3>Watch us on YouTube</h3>
              <p>Subscribe to LHMM India for in-depth teachings on the Plan of the Ages</p>
            </div>
            <div className="promo-buttons">
              <a href="https://www.youtube.com/c/LHMMIndia/featured" target="_blank" rel="noopener noreferrer" className="youtube-btn">
                <FaYoutube /> Watch us on LHMM India
              </a>
              <a href="https://www.facebook.com/Bible-Standard-India-LHMM-193859267613294/" target="_blank" rel="noopener noreferrer" className="facebook-btn">
                <FaFacebook /> Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section - Content Categories */}
      <section className="parallax-section">
        <div className="parallax-overlay"></div>
        <div className="container">
          <motion.div 
            className="content-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>famous topical studies</h2>
            <p>A comprehensive examination of Bible subjects designed to aid in personal and group Bible study.</p>
            <Link to="/bible-study" className="learn-more">Explore Studies →</Link>
          </motion.div>

          <motion.div 
            className="content-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>magazines and resources</h2>
            <p>The Bible Standard magazine and comprehensive resources on Bible subjects.</p>
            <Link to="/resources" className="learn-more">View Resources →</Link>
          </motion.div>



          <motion.div 
            className="content-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>daily food from God's Word</h2>
            <p>A collection of Scriptures with appropriate quotations and poem for each day in the year.</p>
            <Link to="/daily-manna" className="learn-more">Daily Manna →</Link>
          </motion.div>
        </div>
      </section>

      {/* LHMM Identity Section */}
      <section className="identity-section">
        <div className="container">
          <h2>Bible Standard Ministries - LHMM India</h2>
          <div className="identity-content">
            <div className="identity-card">
              <h3>Our Identity</h3>
              <p>Part of the Bible Student movement — a restoration-style Christianity returning to original apostolic Christianity before church traditions developed. We are a teaching movement restoring lost Bible truths.</p>
            </div>
            <div className="identity-card">
              <h3>The Plan of the Ages</h3>
              <p>History divided into stages: Patriarchal Age → Jewish Age → Gospel Age (current) → Millennial Age (future). The present time is NOT Judgment Day for the world — it is selection time for the Church.</p>
            </div>
            <div className="identity-card">
              <h3>Our Mission</h3>
              <p>Founded by Pastor Paul Johnson and Pastor Raymond Jolly to preach Bible truth, promote Christ-likeness, and encourage non-sectarian Bible study through publications in various languages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs Section */}
      <section className="beliefs-section">
        <div className="container">
          <h2>What We Believe</h2>
          <div className="beliefs-grid">
            <div className="belief-item">
              <h4>Jehovah - The Most High God</h4>
              <p>Infinite, eternal, unchangeable. His Son Jesus Christ had prehuman existence as the Logos, "the beginning of the creation of God" (John 6:51; 17:5)</p>
            </div>
            <div className="belief-item">
              <h4>The Ransom Doctrine</h4>
              <p>Christ's death = exact substitute for Adam. All humans legally released from Adamic condemnation. Benefits applied in stages: Church first → world later</p>
            </div>
            <div className="belief-item">
              <h4>Hell & Death</h4>
              <p>Hell = Sheol/Hades = unconscious death state, NOT eternal torment. Future punishment = corrective discipline. Final destruction = annihilation</p>
            </div>
            <div className="belief-item">
              <h4>The Four Elect Classes</h4>
              <p>The 144,000 Church, Great Multitude (heavenly), Ancient Worthies and Youthful Worthies (earthly princes) will assist Restitutionists during the Millennial Age (Rev 14:1; 7:9-17)</p>
            </div>
            <div className="belief-item">
              <h4>Two-Stage Salvation</h4>
              <p>Now: Small class consecrated (Church/Bride of Christ). Later (Millennium): Rest of mankind receives opportunity. Most humans never had a fair chance yet</p>
            </div>
            <div className="belief-item">
              <h4>Christ's Millennial Kingdom</h4>
              <p>Literal earthly reign. Christ and Church will rule on EARTH. Governments replaced, Satan bound, worldwide education in righteousness. Israel returned 1948 - sign of Christ's presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tamil Section */}
      <section className="tamil-section">
        <div className="container">
          <h2>பைபிள் ஸ்டாண்டர்ட் மினிஸ்ட்ரீஸ் - LHMM இந்தியா</h2>
          <p className="tamil-text">
            இது ஒரு மத அடிப்படையிலான இயக்கம். இந்த இயக்கத்தில் அனேக கிறிஸ்தவர்கள் கர்த்தருடைய வார்த்தையை பரப்புவதில் ஒத்துழைப்பு கொடுத்து வருகின்றனர். இந்த ஊழியத்தின் நோக்கம் என்னவெனில், வேதாகம சத்தியத்தை பிரசங்கிப்பதும், கிறிஸ்தவ குண பண்புகளில் வளர்ச்சியை அதிகரித்து, சபை பாகுபாடற்ற முறையில் தனி நபர் மற்றும் குழு வேத பாட ஆராய்ச்சி வாயிலாக சத்தியத்தில் ஆர்வத்தை ஏற்படுத்தி அதை பரப்புவதாகும். இந்த நோக்கங்களை நிறைவேற்ற இந்த இயக்கம், அனேக வேதாகமம் சம்பந்தமான புத்தகங்கள், சிறு புத்தகங்கள் (கையேடுகள்), பத்திரிகைகள் மற்றும் இலவச பிரதிகளை பல மொழிகளில் வெளியிடுகிறது.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
