import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import BibleStudyPage from './pages/BibleStudyPage';
import ResourcesPage from './pages/ResourcesPage';
import MagazinePage from './pages/MagazinePage';
import ConventionPage from './pages/ConventionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bible-study" element={<BibleStudyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/conventions" element={<ConventionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
