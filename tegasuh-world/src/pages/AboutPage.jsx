import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AboutPage.css';
import { FaCheck, FaUsers, FaGlobeAmericas, FaAward, FaHandshake } from 'react-icons/fa';

const AboutPage = () => {
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
            </div>
            <div className="about-image">
              {/* Add your company image here */}
              <div className="image-placeholder">
                <h3>Tegasuh World Team</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Trust & Reliability</h3>
              <p>We build lasting relationships based on trust and consistent, reliable service.</p>
            </div>
            
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We tailor services to meet your specific needs.</p>
            </div>
            
            <div className="value-card">
              <FaGlobeAmericas className="value-icon" />
              <h3>Global Expertise</h3>
              <p>Extensive knowledge of international travel markets and destinations.</p>
            </div>
            
            <div className="value-card">
              <FaAward className="value-icon" />
              <h3>Excellence</h3>
              <p>Committed to delivering excellence in every aspect of our service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Meet Our Travel Experts</h2>
            <p>Our team of experienced professionals is ready to help plan your perfect trip.</p>
            <a href="/contact" className="btn-primary">Contact Our Team</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;