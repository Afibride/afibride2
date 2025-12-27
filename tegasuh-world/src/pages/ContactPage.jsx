import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
import '../css/ContactPage.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaHeadset,
  FaStar,
  FaArrowRight,
  FaShieldAlt
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgent (Within 24 hours)', icon: '🚨' },
    { value: 'normal', label: 'Normal (2-3 business days)', icon: '📅' },
    { value: 'planning', label: 'Future Planning', icon: '📋' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  // Show loading toast
  const toastId = toast.loading(
    <div>
      <strong>Sending your message...</strong>
      <br />
      <small>Please wait a moment</small>
    </div>,
    {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
    }
  );

  // Simulate API call
  setTimeout(() => {
    console.log('Form submitted:', formData);
    
    // Update toast to success
    toast.update(toastId, {
      render: (
        <div>
          <strong>✓ Message Sent Successfully!</strong>
          <br />
          <small>We'll respond within 24 hours</small>
        </div>
      ),
      type: "success",
      isLoading: false,
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
    });

    // Additional success info
    setTimeout(() => {
      toast.info(
        <div>
          <strong>📞 Emergency Contact</strong>
          <br />
          <small>For urgent matters, call +237 677 433 511</small>
        </div>,
        {
          position: "bottom-right",
          autoClose: 4000,
        }
      );
    }, 1000);

    setSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgency: 'normal'
      });
    }, 5000);
  }, 1500);
};

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-text">
              <h1>Let's Plan Your Next Adventure Together</h1>
              <p>Our travel experts are ready to help you create unforgettable memories</p>
              <div className="hero-stats">
                <div className="stat">
                  <FaStar />
                  <div>
                    <span className="stat-number">4.9</span>
                    <span className="stat-label">Customer Rating</span>
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
                  <FaUser />
                  <div>
                    <span className="stat-number">5000+</span>
                    <span className="stat-label">Happy Travelers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-hero-image">
              <div className="floating-card">
                <FaPhone className="floating-icon" />
                <h3>Call Us Anytime</h3>
                <a href="tel:+237677433511" className="cta-number">
                  +237 677 433 511
                </a>
                <p>Available 24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information Card */}
            <div className="contact-info-card">
              <div className="card-header">
                <h2><FaMapMarkerAlt /> Get In Touch</h2>
                <p className="subtitle">Visit our office or reach out digitally</p>
              </div>
              
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-info-content">
                    <h3>Visit Our Office</h3>
                    <p>Sanac Street opposite the central post office, Bamenda, Cameroon</p>
                    <a href="#" className="get-directions">
                      Get Directions <FaArrowRight />
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <FaPhone />
                  </div>
                  <div className="contact-info-content">
                    <h3>Call Us Directly</h3>
                    <a href="tel:+237677433511" className="contact-link highlight">
                      +237 677 433 511
                    </a>
                    <p className="contact-sub">Primary contact line</p>
                    <a href="tel:+237677433512" className="contact-link">
                      +237 677 433 512
                    </a>
                    <p className="contact-sub">Alternative line</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <FaEnvelope />
                  </div>
                  <div className="contact-info-content">
                    <h3>Email Us</h3>
                    <a href="mailto:tegasuhworld@gmail.com" className="contact-link highlight">
                      tegasuhworld@gmail.com
                    </a>
                    <p className="contact-sub">Main email (24-hour response)</p>
                    <a href="mailto:support@tegasuhworld.com" className="contact-link">
                      support@tegasuhworld.com
                    </a>
                    <p className="contact-sub">Customer support</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <FaClock />
                  </div>
                  <div className="contact-info-content">
                    <h3>Business Hours</h3>
                    <div className="hours-grid">
                      <div className="hour-item">
                        <span className="day">Monday - Friday</span>
                        <span className="time">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hour-item">
                        <span className="day">Saturday</span>
                        <span className="time">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="hour-item highlight">
                        <span className="day">Emergency Support</span>
                        <span className="time">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="https://facebook.com" className="social-btn facebook">
                    <FaFacebook /> Facebook
                  </a>
                  <a href="https://twitter.com" className="social-btn twitter">
                    <FaTwitter /> Twitter
                  </a>
                  <a href="https://instagram.com" className="social-btn instagram">
                    <FaInstagram /> Instagram
                  </a>
                  <a href="https://wa.me/237677433511" className="social-btn whatsapp">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="contact-form-card">
              <div className="card-header">
                <h2><FaPaperPlane /> Send Us a Message</h2>
                <p className="subtitle">Fill out the form below and we'll get back to you ASAP</p>
              </div>

              {submitted && (
                <div className="success-message-contact">
                  <div className="success-icon">
                    <FaCheckCircle />
                  </div>
                  <div className="success-content">
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for contacting Tegasuh World. We'll respond within 24 hours. For urgent matters, call us at +237 677 433 511.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group-contact">
                    <label htmlFor="name">
                      <FaUser /> Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="with-icon"
                    />
                  </div>

                  <div className="form-group-contact">
                    <label htmlFor="email">
                      <FaEnvelope /> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="with-icon"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group-contact">
                    <label htmlFor="phone">
                      <FaPhone /> Phone Number *
                    </label>
                    <div className="phone-input">
                      <span className="country-code">+237</span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="677 433 511"
                        pattern="[0-9\s]{9,}"
                      />
                    </div>
                  </div>

                  <div className="form-group-contact">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="styled-select"
                    >
                      <option value="">Select a service</option>
                      <option value="Air Tickets">✈️ Air Tickets</option>
                      <option value="Hotel Reservations">🏨 Hotel Reservations</option>
                      <option value="Cruise">🚢 Cruise Packages</option>
                      <option value="Car Rentals">🚗 International Car Rentals</option>
                      <option value="Site Seeing">🏛️ Site Seeing Tours</option>
                      <option value="Airport Pickup">🚕 Airport Pickup</option>
                      <option value="Package Deal">🎯 Complete Package Deal</option>
                      <option value="Visa Assistance">📋 Visa Assistance</option>
                      <option value="Travel Insurance">🛡️ Travel Insurance</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-contact">
                  <label>How Urgent Is Your Request?</label>
                  <div className="urgency-options">
                    {urgencyOptions.map(option => (
                      <label key={option.value} className="urgency-option">
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleChange}
                        />
                        <span className="urgency-label">
                          <span className="urgency-icon">{option.icon}</span>
                          <span className="urgency-text">{option.label}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group-contact">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your travel plans, destinations, budget, number of travelers, special requirements, and any other details that will help us serve you better..."
                    className="message-box"
                  />
                  <div className="char-count">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <div className="form-security">
                  <FaShieldAlt />
                  <span>Your information is secure and will only be used to contact you regarding your travel inquiry.</span>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit-contact"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                <p className="response-time">
                  <FaClock /> Average response time: 2 hours during business hours
                </p>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <div className="map-header">
              <h2>📍 Find Us Easily</h2>
              <p>Visit our conveniently located office in Bamenda</p>
            </div>
            <div className="map-container">
              <div className="map-placeholder-contact">
                <div className="map-overlay">
                  <div className="map-marker">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="map-info">
                    <h3>Tegasuh World Office</h3>
                    <p>Sanac Street opposite the Central Post Office</p>
                    <p>Bamenda, Cameroon</p>
                    <div className="map-actions">
                      <button className="btn-map-action">
                        <FaMapMarkerAlt /> Get Directions
                      </button>
                      <button className="btn-map-action secondary">
                        <FaPhone /> Call Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="map-instructions">
                  <h4>How to Reach Us:</h4>
                  <ul>
                    <li>📍 Located opposite the Central Post Office</li>
                    <li>🚗 Ample parking available</li>
                    <li>🚌 Accessible by public transport</li>
                    <li>♿ Wheelchair accessible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="quick-contact">
            <div className="quick-contact-content">
              <div className="quick-contact-text">
                <h2>Need Immediate Assistance?</h2>
                <p>Our travel experts are standing by to help you right now</p>
              </div>
              <div className="quick-contact-actions">
                <a href="tel:+237677433511" className="btn-call-now">
                  <FaPhone /> Call Now: +237 677 433 511
                </a>
                <a href="https://wa.me/237677433511" className="btn-whatsapp">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                <button className="btn-schedule">
                  <FaClock /> Schedule Callback
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="contact-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What is your response time?</h3>
                <p>We typically respond within 2 hours during business hours (8 AM - 6 PM) and within 24 hours for emails received outside business hours.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer emergency travel assistance?</h3>
                <p>Yes! We provide 24/7 emergency support for all our clients. Call our emergency line at +237 677 433 511 anytime.</p>
              </div>
              <div className="faq-item">
                <h3>What information should I provide?</h3>
                <p>Please include travel dates, destinations, number of travelers, budget, and any special requirements for faster service.</p>
              </div>
              <div className="faq-item">
                <h3>Are your services free?</h3>
                <p>Consultation and planning are free! We only charge for confirmed bookings and our service fees are transparent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;