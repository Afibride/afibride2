import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaWhatsapp,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
  FaHome,
  FaPlane,
  FaInfoCircle,
  FaEnvelopeOpenText
} from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Logo & Description */}
            <div className="footer-logo-section">
              <div className="footer-logo">
                <div className="footer-logo-main">
                  <span className="footer-logo-primary">TEGASUH</span>
                  <span className="footer-logo-secondary">WORLD</span>
                </div>
                <p className="footer-tagline">MAJOR SERVICES</p>
              </div>
              <p className="footer-description">
                Your trusted partner for global travel solutions. We provide comprehensive 
                travel services to make your journeys memorable and hassle-free.
              </p>
              
              <div className="footer-social">
                <a href="https://facebook.com" className="social-link facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" className="social-link twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" className="social-link instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://wa.me/237677433511" className="social-link whatsapp" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-section">
              <h3>Quick Links</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <Link to="/" className="footer-link">
                    <FaHome /> Home
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/services" className="footer-link">
                    <FaPlane /> Services
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/about" className="footer-link">
                    <FaInfoCircle /> About Us
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/contact" className="footer-link">
                    <FaEnvelopeOpenText /> Contact
                  </Link>
                </li>
                <li className="footer-link-item">
                  <Link to="/book" className="footer-link">
                    ✈️ Book Now
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="footer-services-section">
              <h3>Our Services</h3>
              <ul className="footer-services-list">
                <li className="footer-service-item">
                  <a href="/services#air-tickets" className="footer-service-link">
                    ✈️ Air Tickets
                  </a>
                </li>
                <li className="footer-service-item">
                  <a href="/services#hotel-reservations" className="footer-service-link">
                    🏨 Hotel Reservations
                  </a>
                </li>
                <li className="footer-service-item">
                  <a href="/services#cruise" className="footer-service-link">
                    🚢 Cruise
                  </a>
                </li>
                <li className="footer-service-item">
                  <a href="/services#car-rentals" className="footer-service-link">
                    🚗 Car Rentals
                  </a>
                </li>
                <li className="footer-service-item">
                  <a href="/services#site-seeing" className="footer-service-link">
                    🏛️ Site Seeing
                  </a>
                </li>
                <li className="footer-service-item">
                  <a href="/services#airport-pickup" className="footer-service-link">
                    🚕 Airport Pickup
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="footer-contact-section">
              <h3>Contact Info</h3>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div className="contact-text">
                    <strong>Address:</strong><br />
                    Sanac Street opposite the central post office,<br />
                    Bamenda, Cameroon
                  </div>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div className="contact-text">
                    <strong>Phone:</strong><br />
                    <a href="tel:+237677433511">+237 677 433 511</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-text">
                    <strong>Email:</strong><br />
                    <a href="mailto:tegasuhworld@gmail.com">tegasuhworld@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <div className="contact-text">
                    <strong>Hours:</strong><br />
                    Mon-Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 4:00 PM
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="footer-newsletter">
                <h4 className="newsletter-title">Stay Updated</h4>
                {subscribed ? (
                  <div className="success-message">
                    Thank you for subscribing!
                  </div>
                ) : (
                  <form className="newsletter-form" onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      className="newsletter-input"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="newsletter-btn">
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              &copy; {currentYear} <Link to="/">Tegasuh World</Link>. All rights reserved.
            </div>
            
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="/terms" className="footer-bottom-link">Terms of Service</a>
              <a href="/sitemap" className="footer-bottom-link">Sitemap</a>
              <a href="/faq" className="footer-bottom-link">FAQ</a>
            </div>
            
            <div className="payment-methods">
              <div className="payment-method" title="Cash">💵</div>
              <div className="payment-method" title="Bank Transfer">🏦</div>
              <div className="payment-method" title="Mobile Money">📱</div>
              <div className="payment-method" title="Credit Card">💳</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer Menu */}
      <div className="mobile-footer-menu">
        <div className="container">
          <nav className="mobile-footer-nav">
            <Link to="/" className="mobile-footer-link">
              <FaHome className="mobile-footer-icon" />
              <span>Home</span>
            </Link>
            <Link to="/services" className="mobile-footer-link">
              <FaPlane className="mobile-footer-icon" />
              <span>Services</span>
            </Link>
            <Link to="/book" className="mobile-footer-link">
              <FaEnvelopeOpenText className="mobile-footer-icon" />
              <span>Book</span>
            </Link>
            <Link to="/contact" className="mobile-footer-link">
              <FaPhone className="mobile-footer-icon" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;