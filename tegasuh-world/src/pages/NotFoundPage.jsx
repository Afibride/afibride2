import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/NotFoundPage.css';
import { 
  FaExclamationTriangle, 
  FaHome, 
  FaArrowLeft, 
  FaSearch, 
  FaCompass, 
  FaPhone,
  FaQuestionCircle,
  FaRocket,
  FaMap,
  FaGlobeAmericas,
  FaPlane,
  FaHotel,
  FaShip,
  FaCar,
  FaCamera,
  FaTaxi
} from 'react-icons/fa';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Show error toast when page loads
    toast.error(
      <div>
        <strong>Page Not Found</strong>
        <br />
        <small>Redirected to 404 page</small>
      </div>,
      {
        position: "top-center",
        autoClose: 4000,
      }
    );
  }, []);

  const handleGoHome = () => {
    toast.success(
      <div>
        <strong>Returning Home</strong>
        <br />
        <small>Redirecting to home page...</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
      }
    );
    
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleGoBack = () => {
    toast.info(
      <div>
        <strong>Going Back</strong>
        <br />
        <small>Returning to previous page...</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
      }
    );
    
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  const handleExploreServices = () => {
    toast.info(
      <div>
        <strong>Exploring Services</strong>
        <br />
        <small>Discover our travel services...</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
      }
    );
    
    setTimeout(() => {
      navigate('/services');
    }, 1000);
  };

  const handleContactSupport = () => {
    toast.success(
      <div>
        <strong>Contacting Support</strong>
        <br />
        <small>Redirecting to contact page...</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
      }
    );
    
    setTimeout(() => {
      navigate('/contact');
    }, 1000);
  };

  const handleSearchRedirect = () => {
    const searchTerm = prompt('What are you looking for?');
    if (searchTerm) {
      toast.info(
        <div>
          <strong>Searching...</strong>
          <br />
          <small>Looking for "{searchTerm}"</small>
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
      
      // You can implement search logic here
      // For now, redirect to services with search term
      setTimeout(() => {
        navigate(`/services?search=${encodeURIComponent(searchTerm)}`);
      }, 1500);
    }
  };

  const popularServices = [
    { name: 'Air Tickets', icon: <FaPlane />, path: '/services#air-tickets' },
    { name: 'Hotel Reservations', icon: <FaHotel />, path: '/services#hotel' },
    { name: 'Cruise Packages', icon: <FaShip />, path: '/services#cruise' },
    { name: 'Car Rentals', icon: <FaCar />, path: '/services#car-rental' },
    { name: 'Sightseeing', icon: <FaCamera />, path: '/services#sightseeing' },
    { name: 'Airport Pickup', icon: <FaTaxi />, path: '/services#airport-pickup' },
  ];

  return (
    <>
      <Header />
      
      <div className="not-found-page">
        {/* Animated Background */}
        <div className="not-found-background">
          <div className="floating-icon icon-1"><FaGlobeAmericas /></div>
          <div className="floating-icon icon-2"><FaMap /></div>
          <div className="floating-icon icon-3"><FaCompass /></div>
          <div className="floating-icon icon-4"><FaRocket /></div>
          <div className="floating-icon icon-5"><FaPlane /></div>
        </div>

        <div className="container">
          {/* Main 404 Content */}
          <div className="not-found-content">
            <div className="error-code-container">
              <div className="error-code">
                <span className="digit">4</span>
                <div className="planet-icon">
                  <FaGlobeAmericas />
                </div>
                <span className="digit">4</span>
              </div>
            </div>
            
            <div className="error-message">
              <h1><FaExclamationTriangle /> Oops! Page Not Found</h1>
              <p className="error-description">
                The page you're looking for seems to have taken a vacation. 
                Don't worry, we'll help you get back on track with your travel plans.
              </p>
              <div className="error-subtitle">
                <FaQuestionCircle /> Maybe the page moved, or you typed the wrong URL.
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <div className="action-card primary-action">
                <div className="action-icon">
                  <FaHome />
                </div>
                <div className="action-content">
                  <h3>Return Home</h3>
                  <p>Go back to our homepage and continue browsing</p>
                </div>
                <button className="btn-action" onClick={handleGoHome}>
                  Go Home <FaArrowRight />
                </button>
              </div>
              
              <div className="action-card secondary-action">
                <div className="action-icon">
                  <FaArrowLeft />
                </div>
                <div className="action-content">
                  <h3>Go Back</h3>
                  <p>Return to the previous page you were viewing</p>
                </div>
                <button className="btn-action" onClick={handleGoBack}>
                  Go Back
                </button>
              </div>
              
              <div className="action-card tertiary-action">
                <div className="action-icon">
                  <FaSearch />
                </div>
                <div className="action-content">
                  <h3>Search Site</h3>
                  <p>Find what you're looking for with our search</p>
                </div>
                <button className="btn-action" onClick={handleSearchRedirect}>
                  Search Now
                </button>
              </div>
            </div>

            {/* Popular Services Section */}
            <div className="popular-services-section">
              <h2><FaCompass /> Popular Destinations</h2>
              <p className="section-subtitle">
                While you're here, explore our most popular travel services
              </p>
              
              <div className="services-grid">
                {popularServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="service-item"
                    onClick={() => {
                      toast.info(
                        <div>
                          <strong>Redirecting to {service.name}</strong>
                          <br />
                          <small>Loading service details...</small>
                        </div>,
                        {
                          position: "top-right",
                          autoClose: 2000,
                        }
                      );
                      setTimeout(() => navigate(service.path), 1000);
                    }}
                  >
                    <div className="service-item-icon">
                      {service.icon}
                    </div>
                    <h4>{service.name}</h4>
                    <button className="btn-service-explore">
                      Explore
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="help-section">
              <div className="help-content">
                <div className="help-icon-large">
                  <FaPhone />
                </div>
                <div className="help-text">
                  <h2>Need Immediate Assistance?</h2>
                  <p>Our travel experts are available 24/7 to help you with your travel needs</p>
                  <div className="contact-options">
                    <button className="btn-contact" onClick={handleContactSupport}>
                      Contact Support
                    </button>
                    <a href="tel:+237677433511" className="btn-phone">
                      <FaPhone /> Call: +237 677 433 511
                    </a>
                    <button className="btn-explore" onClick={handleExploreServices}>
                      <FaCompass /> Explore Services
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Details (Collapsible) */}
            <div className="error-details">
              <details>
                <summary>
                  <FaQuestionCircle /> Technical Details
                </summary>
                <div className="details-content">
                  <div className="detail-item">
                    <span className="detail-label">Error Code:</span>
                    <span className="detail-value">404 Not Found</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Status:</span>
                    <span className="detail-value">Page Not Available</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Timestamp:</span>
                    <span className="detail-value">{new Date().toLocaleString()}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Current URL:</span>
                    <span className="detail-value">{window.location.pathname}</span>
                  </div>
                  <div className="suggestions">
                    <h4>Suggestions:</h4>
                    <ul>
                      <li>Check the URL for typos</li>
                      <li>Use the navigation menu to find your destination</li>
                      <li>Contact support if the problem persists</li>
                      <li>Use the search function to find specific content</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>

            {/* Site Map Preview */}
            <div className="sitemap-preview">
              <h3>Quick Site Navigation</h3>
              <div className="sitemap-links">
                <Link to="/" className="sitemap-link">🏠 Home</Link>
                <Link to="/about" className="sitemap-link">📖 About Us</Link>
                <Link to="/services" className="sitemap-link">✈️ Services</Link>
                <Link to="/book" className="sitemap-link">📅 Book Now</Link>
                <Link to="/contact" className="sitemap-link">📞 Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFoundPage;