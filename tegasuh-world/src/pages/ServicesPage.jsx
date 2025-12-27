import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceModal from '../components/ServiceModal';
import { servicesData } from '../data/services';
import '../css/ServicesPage.css';
import { 
  FaFilter, 
  FaStar, 
  FaFire, 
  FaCalendarAlt, 
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaHeadset,
  FaShieldAlt,
  FaPhone,
  FaQuestionCircle,
  FaRocket,
  FaCrown,
  FaBolt,
  FaPercent,
  FaPlane,
  FaHotel,
  FaShip,
  FaCar,
  FaCamera,
  FaTaxi,
  FaInfoCircle,
  FaClock
} from 'react-icons/fa';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    toast.info(
      <div>
        <strong>Explore Our Services</strong>
        <br />
        <small>Find the perfect travel solution for you</small>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      }
    );
  }, []);

  const serviceCategories = [
    { id: 'all', label: 'All Services', icon: <FaFilter />, count: servicesData.length },
    { id: 'popular', label: 'Most Popular', icon: <FaFire />, count: servicesData.filter(s => s.popular).length },
    { id: 'transport', label: 'Transport', icon: <FaRocket />, count: servicesData.filter(s => s.category === 'transport').length },
    { id: 'accommodation', label: 'Accommodation', icon: <FaCalendarAlt />, count: servicesData.filter(s => s.category === 'accommodation').length },
    { id: 'experiences', label: 'Experiences', icon: <FaStar />, count: servicesData.filter(s => s.category === 'experiences').length },
  ];

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : activeFilter === 'popular'
    ? servicesData.filter(service => service.popular)
    : servicesData.filter(service => service.category === activeFilter);

  const popularServices = servicesData.filter(service => service.popular);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    
    const filterNames = {
      all: 'All Services',
      popular: 'Popular Services',
      transport: 'Transport Services',
      accommodation: 'Accommodation',
      experiences: 'Experiences'
    };
    
    const count = filteredServices.length;
    
    toast.info(
      <div>
        <strong>Showing {filterNames[filterId]}</strong>
        <br />
        <small>{count} {count === 1 ? 'service' : 'services'} found</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        toastId: 'filter-change',
      }
    );
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    toast.info(
      <div>
        <strong>Service Details</strong>
        <br />
        <small>Opening {service.title} information</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      }
    );
  };

  const handleQuickBook = (service) => {
    setLoading(true);
    const toastId = toast.loading(
      <div>
        <strong>Starting Quick Booking</strong>
        <br />
        <small>Preparing {service.title} booking form...</small>
      </div>,
      {
        position: "top-center",
        autoClose: false,
      }
    );

    setTimeout(() => {
      setLoading(false);
      toast.update(toastId, {
        render: (
          <div>
            <strong>Ready to Book!</strong>
            <br />
            <small>Redirecting to booking page...</small>
          </div>
        ),
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setTimeout(() => {
        window.location.href = `/book?service=${encodeURIComponent(service.title)}`;
      }, 1000);
    }, 1500);
  };

  const handleServiceHover = (serviceName) => {
    const service = servicesData.find(s => s.title === serviceName);
    toast.info(
      <div>
        <strong>{serviceName}</strong>
        <br />
        <small>{service?.shortDescription}</small>
      </div>,
      {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        toastId: serviceName,
      }
    );
  };

  const handlePackageSelect = (packageName) => {
    toast.success(
      <div>
        <strong>{packageName} Selected</strong>
        <br />
        <small>Redirecting to customization page...</small>
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
      }
    );
  };

  const handleFreeConsultation = () => {
    toast.success(
      <div>
        <strong>Free Consultation Requested</strong>
        <br />
        <small>Our experts will contact you shortly</small>
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
      }
    );
    
    setTimeout(() => {
      window.location.href = '/contact';
    }, 1000);
  };

  const handleCallNow = () => {
    toast.info(
      <div>
        <strong>Calling Our Hotline</strong>
        <br />
        <small>Dialing +237 677 433 511...</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
      }
    );
  };

  const handleLearnMore = (service) => {
    setSelectedService(service);
    toast.info(
      <div>
        <strong>Learn More</strong>
        <br />
        <small>Opening detailed information about {service.title}</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
      }
    );
  };

  const serviceIcons = {
    'Air Tickets': <FaPlane />,
    'Hotel Reservations': <FaHotel />,
    'Cruise Packages': <FaShip />,
    'International Car Rentals': <FaCar />,
    'Site Seeing Tours': <FaCamera />,
    'Airport Pickup': <FaTaxi />
  };

  const serviceColors = {
    'Air Tickets': '#2196F3',
    'Hotel Reservations': '#FF9800',
    'Cruise Packages': '#4CAF50',
    'International Car Rentals': '#795548',
    'Site Seeing Tours': '#9C27B0',
    'Airport Pickup': '#607D8B'
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <div className="hero-text">
              <h1>Your Gateway to World Travel</h1>
              <p className="hero-subtitle">Comprehensive travel solutions tailored to your unique journey</p>
              <div className="hero-stats">
                <div className="stat">
                  <FaUsers />
                  <div>
                    <span className="stat-number">5000+</span>
                    <span className="stat-label">Happy Travelers</span>
                  </div>
                </div>
                <div className="stat">
                  <FaStar />
                  <div>
                    <span className="stat-number">4.9</span>
                    <span className="stat-label">Rating</span>
                  </div>
                </div>
                <div className="stat">
                  <FaHeadset />
                  <div>
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                </div>
                <div className="stat">
                  <FaShieldAlt />
                  <div>
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Secure</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-cta">
              <div className="cta-card">
                <h3>Ready to Travel?</h3>
                <p>Get personalized assistance from our experts</p>
                <button 
                  className="btn-primary"
                  onClick={handleFreeConsultation}
                >
                  Get Free Consultation <FaArrowRight />
                </button>
                <div className="cta-features">
                  <span><FaCheckCircle /> No Hidden Fees</span>
                  <span><FaCheckCircle /> Best Price Guarantee</span>
                  <span><FaCheckCircle /> 24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="services-filter-section">
        <div className="container">
          <div className="filter-header">
            <h2><FaFilter /> Browse Our Services</h2>
            <p>Find the perfect travel solution for your needs</p>
          </div>
          <div className="filter-categories">
            {serviceCategories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => handleFilterChange(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-label">{category.label}</span>
                <span className="filter-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main">
        <div className="container">
          {/* Popular Services */}
          {activeFilter === 'all' && popularServices.length > 0 && (
            <div className="section-popular">
              <div className="section-header">
                <h2><FaCrown /> Most Popular Services</h2>
                <p>These are our clients' favorite travel solutions</p>
              </div>
              <div className="services-grid popular-grid">
                {popularServices.map((service, index) => (
                  <div 
                    key={index}
                    className="service-card featured"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="service-card-badge">
                      <FaFire /> Popular
                    </div>
                    <div className="service-card-header">
                      <div 
                        className="service-icon-large"
                        style={{ color: serviceColors[service.title] || '#1a237e' }}
                      >
                        {serviceIcons[service.title] || service.icon}
                      </div>
                      <h3>{service.title}</h3>
                      <p className="service-description">{service.shortDescription}</p>
                    </div>
                    <div className="service-features">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <FaCheckCircle /> {feature}
                        </div>
                      ))}
                    </div>
                    <div className="service-card-footer">
                      <button 
                        className="btn-service-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLearnMore(service);
                        }}
                      >
                        View Details <FaArrowRight />
                      </button>
                      <button 
                        className="btn-service-book"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickBook(service);
                        }}
                        disabled={loading}
                      >
                        {loading ? 'Loading...' : 'Book Now'}
                      </button>
                    </div>
                    {hoveredService === index && (
                      <div className="service-hover-info">
                        <h4>Why It's Popular</h4>
                        <p>{service.popularReason || 'Trusted by thousands of travelers'}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Services Grid */}
          <div className="section-all">
            <div className="section-header">
              <h2>All Travel Services</h2>
              <p>Comprehensive solutions for every aspect of your journey</p>
            </div>
            <div className="services-grid full-grid">
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className={`service-card ${service.popular ? 'popular' : ''}`}
                  onMouseEnter={() => {
                    setHoveredService(index + 100);
                    handleServiceHover(service.title);
                  }}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="service-card-header">
                    <div 
                      className="service-icon"
                      style={{ color: serviceColors[service.title] || '#1a237e' }}
                    >
                      {serviceIcons[service.title] || service.icon}
                    </div>
                    <div className="service-title-wrapper">
                      <h3>{service.title}</h3>
                      {service.popular && (
                        <span className="popular-tag">
                          <FaFire /> Popular
                        </span>
                      )}
                    </div>
                    <p className="service-excerpt">{service.shortDescription}</p>
                  </div>
                  
                  <div className="service-features">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <FaCheckCircle /> {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="service-stats">
                    <div className="stat-item">
                      <FaStar />
                      <span>4.8+ Rating</span>
                    </div>
                    <div className="stat-item">
                      <FaUsers />
                      <span>1000+ Bookings</span>
                    </div>
                  </div>
                  
                  <div className="service-card-footer">
                    <button 
                      className="btn-service-details"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLearnMore(service);
                      }}
                    >
                      Learn More
                    </button>
                    <button 
                      className="btn-service-book"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickBook(service);
                      }}
                      disabled={loading}
                    >
                      <FaBolt /> Quick Book
                    </button>
                  </div>
                  
                  {hoveredService === index + 100 && (
                    <div className="service-hover-card">
                      <h4>Perfect For:</h4>
                      <ul>
                        {service.perfectFor?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )) || [
                          'Business travelers',
                          'Family vacations',
                          'Adventure seekers',
                          'Luxury experiences'
                        ]}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="service-packages">
        <div className="container">
          <div className="packages-header">
            <h2><FaCrown /> Tailored Travel Packages</h2>
            <p>Choose from our expertly crafted packages or create your own</p>
          </div>
          <div className="packages-grid">
            <div className="package-card basic">
              <div className="package-badge">Basic</div>
              <h3 className="package-name">Essentials Package</h3>
              <div className="package-price">
                <span className="price">Starting at</span>
                <span className="amount">$599</span>
                <span className="period">/person</span>
              </div>
              <p className="package-description">Perfect for budget-conscious travelers</p>
              <ul className="package-features">
                <li><FaCheckCircle /> Flight + Hotel Combo</li>
                <li><FaCheckCircle /> Airport Transfers</li>
                <li><FaCheckCircle /> Travel Insurance</li>
                <li><FaCheckCircle /> 24/7 Support</li>
              </ul>
              <button 
                className="btn-package-select"
                onClick={() => handlePackageSelect('Essentials Package')}
              >
                Select Package
              </button>
            </div>
            
            <div className="package-card popular">
              <div className="package-badge">
                <FaCrown /> Most Popular
              </div>
              <h3 className="package-name">Premium Experience</h3>
              <div className="package-price">
                <span className="price">Starting at</span>
                <span className="amount">$1,299</span>
                <span className="period">/person</span>
              </div>
              <p className="package-description">Luxury travel with premium amenities</p>
              <ul className="package-features">
                <li><FaCheckCircle /> All Basic Features</li>
                <li><FaCheckCircle /> 5-Star Accommodations</li>
                <li><FaCheckCircle /> Guided Tours & Activities</li>
                <li><FaCheckCircle /> VIP Airport Services</li>
                <li><FaCheckCircle /> Personal Travel Consultant</li>
              </ul>
              <button 
                className="btn-package-select featured"
                onClick={() => handlePackageSelect('Premium Experience')}
              >
                Get Premium Package
              </button>
              <div className="special-offer">
                <FaPercent /> Save 15% on Early Bookings
              </div>
            </div>
            
            <div className="package-card luxury">
              <div className="package-badge">Luxury</div>
              <h3 className="package-name">Ultimate Journey</h3>
              <div className="package-price">
                <span className="price">Custom</span>
                <span className="amount">Premium</span>
                <span className="period">Experience</span>
              </div>
              <p className="package-description">Fully customized luxury travel experience</p>
              <ul className="package-features">
                <li><FaCheckCircle /> All Premium Features</li>
                <li><FaCheckCircle /> Private Jet Options</li>
                <li><FaCheckCircle /> Butler & Concierge Service</li>
                <li><FaCheckCircle /> Exclusive Access Events</li>
                <li><FaCheckCircle /> Personalized Itinerary</li>
                <li><FaCheckCircle /> Dedicated Support Team</li>
              </ul>
              <button 
                className="btn-package-select luxury-btn"
                onClick={() => handlePackageSelect('Ultimate Journey')}
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-services">
        <div className="container">
          <div className="why-choose-header">
            <h2>Why Choose Tegasuh World?</h2>
            <p>We go beyond booking to create memorable experiences</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaShieldAlt />
              </div>
              <h3>Secure & Trusted</h3>
              <p>Your safety and security are our top priorities with 100% protection guarantee.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaPercent />
              </div>
              <h3>Best Price Guarantee</h3>
              <p>We guarantee the best prices for all our services or we'll match the difference.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaHeadset />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for all your travel needs, no matter where you are.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaStar />
              </div>
              <h3>Expert Guidance</h3>
              <p>Professional travel consultants with extensive destination knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Contact our travel experts for personalized planning and booking</p>
            <div className="cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={handleFreeConsultation}
              >
                <FaHeadset /> Get Free Consultation
              </button>
              <a href="/book" className="btn-cta-secondary">
                <FaBolt /> Quick Booking
              </a>
              <button 
                className="btn-cta-call"
                onClick={handleCallNow}
              >
                <FaPhone /> Call Now
              </button>
            </div>
            <div className="cta-info">
              <p><FaCheckCircle /> No obligation consultation</p>
              <p><FaCheckCircle /> Personalized travel planning</p>
              <p><FaCheckCircle /> Best price guarantee</p>
              <p><FaClock /> 24/7 availability</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <ServiceModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
};

export default ServicesPage;