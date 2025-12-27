import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutPage.css';
import { FaCheck, FaUsers, FaGlobeAmericas, FaAward, FaHandshake, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AboutPage = () => {
  useEffect(() => {
    // Welcome toast when page loads
    toast.info(
      <div>
        <strong>Welcome to Tegasuh World!</strong>
        <br />
        <small>Discover our story and values</small>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      }
    );
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    
    toast.success(
      <div>
        <strong>Redirecting to Contact Page</strong>
        <br />
        <small>Our team is ready to assist you!</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      }
    );

    setTimeout(() => {
      window.location.href = '/contact';
    }, 1000);
  };

  const handleValueHover = (valueName) => {
    const messages = {
      'Trust & Reliability': 'Built on years of trusted service',
      'Customer Focus': 'Your satisfaction is our priority',
      'Global Expertise': 'Experience across 100+ destinations',
      'Excellence': 'Committed to exceptional service'
    };
    
    toast.info(messages[valueName] || valueName, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      icon: false,
      toastId: valueName,
    });
  };

  const handleMeetTeamClick = () => {
    toast.info(
      <div>
        <strong>Meet Our Team</strong>
        <br />
        <small>Team photos and profiles coming soon!</small>
      </div>,
      {
        position: "bottom-center",
        autoClose: 3000,
      }
    );
  };

  const handleLearnMoreClick = (topic) => {
    toast.info(
      <div>
        <strong>Learn More</strong>
        <br />
        <small>More information about {topic} coming soon!</small>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
      }
    );
  };

  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1>About Tegasuh World</h1>
          <p>Your trusted partner in global travel experiences</p>
        </div>
      </div>

      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Tegasuh World has been providing exceptional travel services since our founding. 
                Based in Bamenda, Cameroon, we've grown to become a trusted name in the travel 
                industry, helping clients explore destinations worldwide.
              </p>
              <p>
                Our mission is to make travel accessible, enjoyable, and memorable for everyone. 
                We believe that every journey should be a seamless experience, from the initial 
                booking to the final return home.
              </p>
              <button 
                className="btn-learn-more-about"
                onClick={() => handleLearnMoreClick('our story')}
              >
                Learn More About Our Journey <FaStar />
              </button>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <h3>Tegasuh World Team</h3>
                <button 
                  className="btn-meet-team"
                  onClick={handleMeetTeamClick}
                >
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">These principles guide everything we do at Tegasuh World</p>
          
          <div className="values-grid">
            <div 
              className="value-card"
              onMouseEnter={() => handleValueHover('Trust & Reliability')}
              onClick={() => handleLearnMoreClick('Trust & Reliability')}
            >
              <FaHandshake className="value-icon" />
              <h3>Trust & Reliability</h3>
              <p>We build lasting relationships based on trust and consistent, reliable service.</p>
              <span className="value-badge">Core Value</span>
            </div>
            
            <div 
              className="value-card"
              onMouseEnter={() => handleValueHover('Customer Focus')}
              onClick={() => handleLearnMoreClick('Customer Focus')}
            >
              <FaUsers className="value-icon" />
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We tailor services to meet your specific needs.</p>
              <span className="value-badge">Priority #1</span>
            </div>
            
            <div 
              className="value-card"
              onMouseEnter={() => handleValueHover('Global Expertise')}
              onClick={() => handleLearnMoreClick('Global Expertise')}
            >
              <FaGlobeAmericas className="value-icon" />
              <h3>Global Expertise</h3>
              <p>Extensive knowledge of international travel markets and destinations.</p>
              <span className="value-badge">Worldwide</span>
            </div>
            
            <div 
              className="value-card"
              onMouseEnter={() => handleValueHover('Excellence')}
              onClick={() => handleLearnMoreClick('Excellence')}
            >
              <FaAward className="value-icon" />
              <h3>Excellence</h3>
              <p>Committed to delivering excellence in every aspect of our service.</p>
              <span className="value-badge">Gold Standard</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-container">
            <div className="mission-card">
              <div className="mv-icon">
                <FaStar />
              </div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-description">
                To provide exceptional travel experiences through personalized service, 
                expert guidance, and seamless arrangements that create unforgettable 
                memories for every client.
              </p>
              <button 
                className="btn-mv-details"
                onClick={() => handleLearnMoreClick('our mission')}
              >
                Read Full Mission Statement
              </button>
            </div>
            
            <div className="vision-card">
              <div className="mv-icon">
                <FaGlobeAmericas />
              </div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-description">
                To be Africa's most trusted and innovative travel partner, 
                connecting people to the world's wonders while setting new 
                standards in travel excellence and customer satisfaction.
              </p>
              <button 
                className="btn-mv-details"
                onClick={() => handleLearnMoreClick('our vision')}
              >
                Explore Our Vision
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-header">
            <h2>Our Impact in Numbers</h2>
            <p>Years of excellence reflected in our achievements</p>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Meet Our Travel Experts</h2>
            <p>Our team of experienced professionals is ready to help plan your perfect trip.</p>
            <div className="cta-actions">
              <a href="/contact" className="btn-primary" onClick={handleContactClick}>
                Contact Our Team
              </a>
              <button 
                className="btn-secondary"
                onClick={() => toast.info('Team profiles loading...', { position: 'top-right' })}
              >
                View Team Profiles
              </button>
            </div>
            <div className="quick-contact-info">
              <p>
                <FaPhone /> <strong>Call:</strong> +237 677 433 511 | 
                <FaEnvelope /> <strong>Email:</strong> tegasuhworld@gmail.com | 
                <FaMapMarkerAlt /> <strong>Visit:</strong> Sanac Street, Bamenda
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;