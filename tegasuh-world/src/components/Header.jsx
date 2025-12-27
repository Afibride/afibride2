import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaPhone, 
  FaEnvelope, 
  FaChevronDown,
  FaHome,
  FaPlane,
  FaInfoCircle,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import '../css/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuOpen(false);
      setServicesDropdown(false);
      setMobileServicesDropdown(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setMobileServicesDropdown(!mobileServicesDropdown);
  };

  const navLinks = [
    { 
      path: '/', 
      label: 'Home', 
      icon: <FaHome />,
      exact: true 
    },
    { 
      path: '/services', 
      label: 'Services',
      icon: <FaPlane />,
      dropdown: [
        { path: '/services#air-tickets', label: 'Air Tickets', icon: '✈️' },
        { path: '/services#hotel-reservations', label: 'Hotel Reservations', icon: '🏨' },
        { path: '/services#cruise', label: 'Cruise', icon: '🚢' },
        { path: '/services#car-rentals', label: 'Car Rentals', icon: '🚗' },
        { path: '/services#site-seeing', label: 'Site Seeing', icon: '🏛️' },
        { path: '/services#airport-pickup', label: 'Airport Pickup', icon: '🚕' }
      ]
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: <FaInfoCircle /> 
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: <FaEnvelopeOpenText /> 
    },
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info-top">
              <a href="tel:+237677433511" className="top-contact-link">
                <FaPhone /> +237 677 433 511
              </a>
              <a href="mailto:tegasuhworld@gmail.com" className="top-contact-link">
                <FaEnvelope /> tegasuhworld@gmail.com
              </a>
            </div>
            <div className="social-links-top">
              <a 
                href="https://facebook.com" 
                className="social-link-top facebook"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://twitter.com" 
                className="social-link-top twitter"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://instagram.com" 
                className="social-link-top instagram"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/237677433511" 
                className="social-link-top whatsapp"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://linkedin.com" 
                className="social-link-top linkedin"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo-wrapper">
            <div className="logo-container">
              <div className="logo">
                <img src="/logo.png" alt="TEGASUH WORLD Logo" className="logo-image" />
                <div className="logo-main">
                  <span className="logo-primary">TEGASUH</span>
                  <span className="logo-secondary">WORLD</span>
                </div>
              </div>
              <div className="logo-tagline">MAJOR SERVICES</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li 
                    key={link.path} 
                    className={`nav-item ${isActive(link.path, link.exact) ? 'active' : ''} ${
                      link.dropdown ? 'has-dropdown' : ''
                    }`}
                  >
                    {link.dropdown ? (
                      <div 
                        className="dropdown-container"
                        onMouseEnter={() => setServicesDropdown(true)}
                        onMouseLeave={() => setServicesDropdown(false)}
                      >
                        <button 
                          className="nav-link dropdown-toggle"
                          aria-expanded={servicesDropdown}
                          aria-haspopup="true"
                        >
                          <span className="nav-icon">{link.icon}</span>
                          {link.label}
                          <FaChevronDown className="dropdown-chevron" />
                        </button>
                        <div 
                          className={`dropdown-menu ${servicesDropdown ? 'show' : ''}`}
                          aria-hidden={!servicesDropdown}
                        >
                          {link.dropdown.map((subLink) => (
                            <div key={subLink.path} className="dropdown-item">
                              <Link 
                                to={subLink.path} 
                                className="dropdown-link"
                                onClick={() => setServicesDropdown(false)}
                              >
                                <span className="dropdown-link-icon">{subLink.icon}</span>
                                {subLink.label}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link 
                        to={link.path} 
                        className="nav-link"
                      >
                        <span className="nav-icon">{link.icon}</span>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                
                {/* Book Now Button */}
                <li className="nav-item book-now-item">
                  <Link 
                    to="/book" 
                    className="nav-link book-now-btn"
                    aria-label="Book Now"
                  >
                    <span className="book-now-icon">✈️</span>
                    BOOK NOW
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu Overlay */}
            <div 
              className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-hidden={!isMenuOpen}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {/* Mobile Header */}
        <div className="mobile-nav-header">
          <div className="mobile-logo">
            <div className="mobile-logo-main">
              <span className="mobile-logo-primary">TEGASUH</span>
              <span className="mobile-logo-secondary">WORLD</span>
            </div>
            <div className="mobile-logo-tagline">MAJOR SERVICES</div>
          </div>
          <button 
            className="close-menu-btn"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Navigation List */}
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <React.Fragment key={link.path}>
              <li className="mobile-nav-item">
                {link.dropdown ? (
                  <>
                    <button 
                      className="mobile-dropdown-toggle"
                      onClick={toggleMobileServicesDropdown}
                      aria-expanded={mobileServicesDropdown}
                      aria-haspopup="true"
                    >
                      <div className="mobile-nav-link-content">
                        <span className="mobile-nav-link-icon">{link.icon}</span>
                        {link.label}
                      </div>
                      <FaChevronDown className={`mobile-dropdown-chevron ${mobileServicesDropdown ? 'rotated' : ''}`} />
                    </button>
                    <div 
                      className={`mobile-dropdown-menu ${mobileServicesDropdown ? 'show' : ''}`}
                      aria-hidden={!mobileServicesDropdown}
                    >
                      {link.dropdown.map((subLink) => (
                        <div key={subLink.path} className="mobile-dropdown-item">
                          <Link 
                            to={subLink.path} 
                            className="mobile-dropdown-link"
                            onClick={() => {
                              toggleMenu();
                              setMobileServicesDropdown(false);
                            }}
                          >
                            <span className="mobile-dropdown-link-icon">{subLink.icon}</span>
                            {subLink.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`mobile-nav-link ${isActive(link.path, link.exact) ? 'active' : ''}`}
                    onClick={toggleMenu}
                  >
                    <span className="mobile-nav-link-icon">{link.icon}</span>
                    {link.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
          
          {/* Mobile Book Now Button */}
          <li className="mobile-nav-item">
            <Link 
              to="/book" 
              className="mobile-book-now-btn"
              onClick={toggleMenu}
              aria-label="Book Now"
            >
              <span className="book-now-icon">✈️</span>
              BOOK NOW
            </Link>
          </li>
        </ul>

        {/* Mobile Contact Info */}
        <div className="mobile-contact-info">
          <div className="mobile-contact-item">
            <FaMapMarkerAlt className="mobile-contact-icon" aria-hidden="true" />
            <div className="mobile-contact-text">
              <strong>Address:</strong><br />
              Sanac Street opposite the central post office, Bamenda
            </div>
          </div>
          
          <div className="mobile-contact-item">
            <FaPhone className="mobile-contact-icon" aria-hidden="true" />
            <div className="mobile-contact-text">
              <strong>Phone:</strong><br />
              <a href="tel:+237677433511">+237 677 433 511</a>
            </div>
          </div>
          
          <div className="mobile-contact-item">
            <FaEnvelope className="mobile-contact-icon" aria-hidden="true" />
            <div className="mobile-contact-text">
              <strong>Email:</strong><br />
              <a href="mailto:tegasuhworld@gmail.com">tegasuhworld@gmail.com</a>
            </div>
          </div>
          
          <div className="mobile-contact-item">
            <FaClock className="mobile-contact-icon" aria-hidden="true" />
            <div className="mobile-contact-text">
              <strong>Hours:</strong><br />
              Mon-Fri: 8:00 AM - 6:00 PM<br />
              Sat: 9:00 AM - 4:00 PM
            </div>
          </div>
          
          {/* Mobile Social Links */}
          <div className="mobile-social-links">
            <a 
              href="https://facebook.com" 
              className="mobile-social-link facebook"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://twitter.com" 
              className="mobile-social-link twitter"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://instagram.com" 
              className="mobile-social-link instagram"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://wa.me/237677433511" 
              className="mobile-social-link whatsapp"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;