import React, { useState, useEffect } from 'react';
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
  FaClock
} from 'react-icons/fa';
import { servicesData } from '../data/services';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "John M.",
      role: "Business Traveler",
      content: "Excellent service! My flight and hotel were perfectly arranged. Will definitely use Tegasuh World again.",
      rating: 5
    },
    {
      name: "Sarah K.",
      role: "Family Vacation",
      content: "Our family trip to Dubai was seamless thanks to Tegasuh. They handled everything from flights to tours.",
      rating: 5
    },
    {
      name: "Michael T.",
      role: "Honeymoon",
      content: "The cruise package was amazing! Everything was perfect for our honeymoon. Highly recommended!",
      rating: 5
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
  };

  const handleBookNow = (service = null) => {
    if (service) {
      navigate('/book', { state: { serviceType: service.title } });
    } else {
      navigate('/book');
    }
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
                    onClick={() => setShowAboutModal(true)}
                  >
                    Learn About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="slider-controls">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
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
            <Link to="/services" className="view-all-link">
              View All Services <FaArrowRight />
            </Link>
          </div>
          
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div 
                className="service-card-featured" 
                key={index}
                onClick={() => openServiceModal(service)}
              >
                <div className="service-card-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <h3>{service.title}</h3>
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
                      handleBookNow(service);
                    }}
                  >
                    Book Now
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
                  onClick={() => setShowAboutModal(true)}
                >
                  Learn More About Us
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => setShowContactModal(true)}
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
            
            <div className="why-choose-image">
              <div className="image-placeholder">
                {/* Add your image here */}
                <div className="placeholder-content">
                  <h3>Travel With Confidence</h3>
                  <p>Your journey is our priority</p>
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
              <div className="testimonial-card" key={index}>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
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
                onClick={() => setShowContactModal(true)}
              >
                <FaHeadset /> Contact Us Now
              </button>
              <Link to="/book" className="btn-secondary btn-cta">
                <FaClock /> Book Instantly
              </Link>
            </div>
            <div className="cta-contact-info">
              <p>
                <strong>Call:</strong> +237 677 433 511 | 
                <strong> Email:</strong> tegasuhworld@gmail.com | 
                <strong> Address:</strong> Sanac Street, Bamenda
              </p>
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