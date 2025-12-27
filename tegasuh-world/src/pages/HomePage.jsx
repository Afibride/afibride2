import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceModal from '../components/ServiceModal';
import ContactModal from '../components/ContactModal';
import AboutModal from '../components/AboutModal';
import '../css/Home.css'
import { 
  FaPlane, 
  FaHotel, 
  FaShip, 
  FaCar, 
  FaCamera, 
  FaTaxi,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaGlobeAmericas,
  FaHeadset,
  FaClock,
  FaBolt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { servicesData } from '../data/services';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    toast.success(
      <div>
        <strong>Welcome to Tegasuh World!</strong>
        <br />
        <small>Your trusted travel partner</small>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      }
    );
  }, []);

  const testimonials = [
    {
      name: "John M.",
      role: "Business Traveler",
      content: "Excellent service! My flight and hotel were perfectly arranged. Will definitely use Tegasuh World again.",
      rating: 5,
      date: "2 weeks ago"
    },
    {
      name: "Sarah K.",
      role: "Family Vacation",
      content: "Our family trip to Dubai was seamless thanks to Tegasuh. They handled everything from flights to tours.",
      rating: 5,
      date: "1 month ago"
    },
    {
      name: "Michael T.",
      role: "Honeymoon",
      content: "The cruise package was amazing! Everything was perfect for our honeymoon. Highly recommended!",
      rating: 5,
      date: "3 weeks ago"
    }
  ];

  const slides = [
    {
      title: "Your Gateway to Global Travel",
      subtitle: "Professional travel services for all your needs",
      background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
      ctaText: "Book Your Adventure",
      ctaLink: "/book"
    },
    {
      title: "Luxury Cruise Experiences",
      subtitle: "Sail the world's most beautiful seas",
      background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
      ctaText: "Explore Cruises",
      ctaLink: "/services#cruise"
    },
    {
      title: "Hotel Reservations Worldwide",
      subtitle: "Find the perfect stay anywhere in the world",
      background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
      ctaText: "Find Hotels",
      ctaLink: "/services#hotel-reservations"
    }
  ];

  // Auto slide for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const openServiceModal = (service) => {
    setSelectedService(service);
    toast.info(
      <div>
        <strong>Service Details</strong>
        <br />
        <small>Loading {service.title} information...</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      }
    );
  };

  const handleContactClick = () => {
    setShowContactModal(true);
    toast.info(
      <div>
        <strong>Contact Form Opening</strong>
        <br />
        <small>Our team is ready to assist you!</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      }
    );
  };

  const handleAboutClick = () => {
    setShowAboutModal(true);
    toast.info(
      <div>
        <strong>About Tegasuh World</strong>
        <br />
        <small>Discover our story and values</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      }
    );
  };

  const handleServiceHover = () => {
    // Show subtle toast on service hover (optional)
    // toast.info(`${serviceName} service`, {
    //   position: "bottom-right",
    //   autoClose: 1000,
    //   hideProgressBar: true,
    //   toastId: serviceName,
    // });
  };

  const handleQuickBooking = (service) => {
    const toastId = toast.loading(
      <div>
        <strong>Quick Booking Initiated</strong>
        <br />
        <small>Preparing {service.title} booking...</small>
      </div>,
      {
        position: "top-center",
        autoClose: false,
      }
    );

    setTimeout(() => {
      toast.update(toastId, {
        render: (
          <div>
            <strong>Quick Booking Ready!</strong>
            <br />
            <small>Redirecting to booking page...</small>
          </div>
        ),
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate('/book', { state: { serviceType: service.title } });
      }, 1000);
    }, 1500);
  };

  const handleTestimonialClick = (testimonial) => {
    toast.success(
      <div>
        <strong>Happy Customer!</strong>
        <br />
        <small>{testimonial.name} - {testimonial.role}</small>
        <br />
        <small>"Read more testimonials on our about page"</small>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
      }
    );
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    toast.info(
      <div>
        <strong>{slides[index].title}</strong>
        <br />
        <small>{slides[index].subtitle}</small>
      </div>,
      {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        toastId: `slide-${index}`,
      }
    );
  };

  const handleViewAllServices = () => {
    toast.info(
      <div>
        <strong>All Services</strong>
        <br />
        <small>Browsing all available travel services...</small>
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
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
    setShowContactModal(true);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? "star filled" : "star"} />
    ));
  };

  return (
    <>
      <Header />
      
      {/* Hero Slider */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: slide.background }}
          >
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-actions">
                  <Link to={slide.ctaLink} className="btn-primary btn-hero">
                    {slide.ctaText} <FaArrowRight />
                  </Link>
                  <button 
                    className="btn-secondary btn-hero"
                    onClick={handleAboutClick}
                  >
                    Learn About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="slider-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="quick-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div className="stat-content">
                <h3>5000+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="stat-item">
              <FaGlobeAmericas className="stat-icon" />
              <div className="stat-content">
                <h3>100+</h3>
                <p>Destinations</p>
              </div>
            </div>
            <div className="stat-item">
              <FaPlane className="stat-icon" />
              <div className="stat-content">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="stat-item">
              <FaHeadset className="stat-icon" />
              <div className="stat-content">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Major Services</h2>
            <p className="section-subtitle">Comprehensive travel solutions tailored to your needs</p>
            <Link 
              to="/services" 
              className="view-all-link"
              onClick={handleViewAllServices}
            >
              View All Services <FaArrowRight />
            </Link>
          </div>
          
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div 
                className="service-card-featured" 
                key={index}
                onClick={() => openServiceModal(service)}
                onMouseEnter={() => handleServiceHover(service.title)}
              >
                <div className="service-card-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <h3>{service.title}</h3>
                  {service.popular && <span className="popular-tag">🔥 Popular</span>}
                </div>
                <p className="service-description">{service.shortDescription}</p>
                <ul className="service-highlights">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-card-footer">
                  <button 
                    className="btn-learn-more"
                    onClick={(e) => {
                      e.stopPropagation();
                      openServiceModal(service);
                    }}
                  >
                    Learn More
                  </button>
                  <button 
                    className="btn-book-now"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickBooking(service);
                    }}
                  >
                    <FaBolt /> Quick Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose Tegasuh World?</h2>
              <p>We stand out with our commitment to excellence and customer satisfaction</p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <FaCheckCircle className="benefit-icon" />
                  <div>
                    <h4>Best Price Guarantee</h4>
                    <p>We ensure you get the best value for your money</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <FaCheckCircle className="benefit-icon" />
                  <div>
                    <h4>24/7 Customer Support</h4>
                    <p>Round-the-clock assistance for all your travel needs</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <FaCheckCircle className="benefit-icon" />
                  <div>
                    <h4>Expert Travel Consultants</h4>
                    <p>Professional guidance from experienced travel experts</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <FaCheckCircle className="benefit-icon" />
                  <div>
                    <h4>Customized Travel Plans</h4>
                    <p>Personalized itineraries tailored to your preferences</p>
                  </div>
                </div>
              </div>
              
              <div className="why-choose-actions">
                <button 
                  className="btn-primary"
                  onClick={handleAboutClick}
                >
                  Learn More About Us
                </button>
                <button 
                  className="btn-secondary"
                  onClick={handleFreeConsultation}
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
            
            <div className="why-choose-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <h3>Travel With Confidence</h3>
                  <p>Your journey is our priority</p>
                  <button 
                    className="btn-trust-us"
                    onClick={() => toast.info('Learn why travelers trust us', { position: 'top-right' })}
                  >
                    Why Trust Us?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Hear from travelers who have experienced our services</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                className="testimonial-card" 
                key={index}
                onClick={() => handleTestimonialClick(testimonial)}
              >
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                  <span className="rating-number">{testimonial.rating}.0</span>
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <span className="testimonial-date">{testimonial.date}</span>
                  </div>
                </div>
                <button 
                  className="btn-read-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    toast.info('More details about this testimonial', { position: 'top-right' });
                  }}
                >
                  Read Full Story
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Contact us today for personalized travel planning and booking assistance</p>
            <div className="cta-actions">
              <button 
                className="btn-primary btn-cta"
                onClick={handleContactClick}
              >
                <FaHeadset /> Contact Us Now
              </button>
              <Link to="/book" className="btn-secondary btn-cta">
                <FaClock /> Book Instantly
              </Link>
              <button 
                className="btn-tertiary btn-cta"
                onClick={() => toast.info('Calling our hotline...', { position: 'top-right' })}
              >
                <FaPhone /> Call: +237 677 433 511
              </button>
            </div>
            <div className="cta-contact-info">
              <p>
                <FaPhone /> <strong>Call:</strong> +237 677 433 511 | 
                <FaEnvelope /> <strong>Email:</strong> tegasuhworld@gmail.com | 
                <FaMapMarkerAlt /> <strong>Address:</strong> Sanac Street, Bamenda
              </p>
              <div className="cta-badges">
                <span className="cta-badge">✓ 24/7 Support</span>
                <span className="cta-badge">✓ Free Consultation</span>
                <span className="cta-badge">✓ Best Price Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Modals */}
      <ServiceModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
      
      <ContactModal 
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
      
      <AboutModal 
        isOpen={showAboutModal}
        onClose={() => setShowAboutModal(false)}
      />
    </>
  );
};

export default HomePage;