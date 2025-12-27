import React from 'react';
import { FaTimes, FaUsers, FaGlobe, FaAward, FaHandshake } from 'react-icons/fa';

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content about-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <h2>About Tegasuh World</h2>
          <p className="modal-subtitle">Your Gateway to Global Travel</p>
        </div>

        <div className="modal-body">
          <div className="about-modal-content">
            <div className="about-intro">
              <h3><FaGlobe /> Our Mission</h3>
              <p>
                To provide exceptional travel services that create unforgettable experiences 
                for our clients, making global travel accessible, seamless, and enjoyable.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <FaUsers className="highlight-icon" />
                <h4>Experienced Team</h4>
                <p>Professional travel experts with years of industry experience</p>
              </div>

              <div className="highlight-card">
                <FaAward className="highlight-icon" />
                <h4>Quality Service</h4>
                <p>Committed to excellence in every travel arrangement</p>
              </div>

              <div className="highlight-card">
                <FaHandshake className="highlight-icon" />
                <h4>Trusted Partner</h4>
                <p>Building lasting relationships with our clients</p>
              </div>
            </div>

            <div className="about-services">
              <h3>Why Choose Us?</h3>
              <ul className="benefits-list">
                <li>Comprehensive travel solutions</li>
                <li>Personalized service</li>
                <li>Competitive pricing</li>
                <li>24/7 customer support</li>
                <li>Extensive global network</li>
                <li>Years of industry experience</li>
              </ul>
            </div>

            <div className="modal-actions">
              <a href="/about" className="btn-primary" onClick={onClose}>
                Learn More About Us
              </a>
              <a href="/contact" className="btn-secondary" onClick={onClose}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;