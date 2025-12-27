import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaPlane, 
  FaHotel, 
  FaShip, 
  FaCar, 
  FaCamera, 
  FaTaxi,
  FaCheckCircle,
  FaCreditCard,
  FaShieldAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaStar,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import '../css/Booking.css';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    departureDate: '',
    returnDate: '',
    destination: '',
    specialRequests: '',
    paymentMethod: 'cash',
    termsAccepted: false
  });

  const services = [
    { 
      id: 'air-tickets', 
      name: 'Air Tickets', 
      icon: <FaPlane />, 
      description: 'Domestic & International Flights',
      features: [
        'Best price guarantee',
        '24/7 booking support',
        'Multi-airline options',
        'Flexible date searches',
        'Group booking discounts'
      ],
      popular: true
    },
    { 
      id: 'hotel', 
      name: 'Hotel Reservations', 
      icon: <FaHotel />, 
      description: 'Hotels & Accommodations',
      features: [
        'Luxury to budget options',
        'Customer reviews',
        'Best locations',
        'Package deals'
      ]
    },
    { 
      id: 'cruise', 
      name: 'Cruise', 
      icon: <FaShip />, 
      description: 'Cruise Packages',
      features: [
        'All-inclusive packages',
        'Various cruise lines',
        'Shore excursions',
        'Romantic getaways'
      ],
      popular: true
    },
    { 
      id: 'car-rental', 
      name: 'International Car Rentals', 
      icon: <FaCar />, 
      description: 'Car Rentals Worldwide',
      features: [
        'Wide vehicle range',
        'Insurance included',
        '24/7 assistance',
        'One-way rentals'
      ]
    },
    { 
      id: 'sightseeing', 
      name: 'Site Seeing', 
      icon: <FaCamera />, 
      description: 'Tours & Activities',
      features: [
        'Local expert guides',
        'Cultural experiences',
        'Customizable itineraries',
        'Photography tours'
      ]
    },
    { 
      id: 'airport-pickup', 
      name: 'Airport Pickup', 
      icon: <FaTaxi />, 
      description: 'Transfers & Pickups',
      features: [
        'Meet and greet service',
        'Flight monitoring',
        'Comfortable vehicles',
        '24/7 availability'
      ]
    }
  ];

  const popularServices = services.filter(service => service.popular);

  const paymentMethods = [
    { id: 'cash', name: 'Cash Payment', icon: '💵', description: 'Pay in cash at our office' },
    { id: 'bank', name: 'Bank Transfer', icon: '🏦', description: 'Direct bank transfer' },
    { id: 'mobile', name: 'Mobile Money', icon: '📱', description: 'MTN Mobile Money, Orange Money' },
    { id: 'card', name: 'Credit Card', icon: '💳', description: 'Visa, MasterCard accepted' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceSelect = (serviceName) => {
    setFormData(prev => ({ ...prev, serviceType: serviceName }));
    // Auto-advance to next step after selecting a service
    setTimeout(() => {
      if (step === 1) nextStep();
    }, 500);
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Please fill in all required fields before proceeding.');
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateStep = () => {
    switch(step) {
      case 1:
        return formData.serviceType !== '';
      case 2:
        return formData.name && formData.email && formData.phone;
      case 3:
        return formData.departureDate && formData.destination;
      case 4:
        return formData.termsAccepted;
      default:
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateStep()) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate API call
    console.log('Booking submitted:', formData);
    
    // Show success message
    alert(`Booking request submitted successfully!\n\nWe will contact you within 24 hours at ${formData.phone} to confirm your ${formData.serviceType} booking.`);
    
    // Reset form
    setFormData({
      serviceType: '',
      name: '',
      email: '',
      phone: '',
      travelers: 1,
      departureDate: '',
      returnDate: '',
      destination: '',
      specialRequests: '',
      paymentMethod: 'cash',
      termsAccepted: false
    });
    
    // Reset to first step
    setStep(1);
  };

  const getStepProgress = () => {
    return (step / 4) * 100;
  };

  const renderServiceFeatures = (serviceName) => {
    const service = services.find(s => s.name === serviceName);
    if (!service) return null;
    
    return (
      <div className="service-features-preview">
        <h4>Features included:</h4>
        <ul>
          {service.features.map((feature, idx) => (
            <li key={idx}><FaStar /> {feature}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Header />
      
      <div className="booking-page">
        <div className="container">
          {/* Booking Header */}
          <div className="booking-header">
            <h1>Book Your Travel Service</h1>
            <p>Complete the form below to book your travel with Tegasuh World</p>
          </div>

          {/* Progress Tracker */}
          <div className="booking-progress-tracker">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${getStepProgress()}%` }}
              ></div>
            </div>
            <div className="progress-steps">
              <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                <span className="step-number">1</span>
                <span className="step-label">Select Service</span>
              </div>
              <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                <span className="step-number">2</span>
                <span className="step-label">Your Details</span>
              </div>
              <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                <span className="step-number">3</span>
                <span className="step-label">Travel Info</span>
              </div>
              <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
                <span className="step-number">4</span>
                <span className="step-label">Confirm</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="booking-form-container">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="booking-step service-selection-step">
                <div className="step-header">
                  <h2><FaPlane /> Select Your Travel Service</h2>
                  <p>Choose the service you want to book. We offer comprehensive travel solutions for all your needs.</p>
                </div>
                
                {/* Popular Services */}
                {popularServices.length > 0 && (
                  <div className="services-section">
                    <h3 className="section-subtitle">
                      <FaStar /> Most Popular Services
                    </h3>
                    <div className="services-grid popular-services">
                      {popularServices.map(service => (
                        <div 
                          key={service.id}
                          className={`service-option ${formData.serviceType === service.name ? 'selected' : ''}`}
                          onClick={() => handleServiceSelect(service.name)}
                        >
                          <div className="service-option-header">
                            <div className="service-icon">{service.icon}</div>
                            <div className="service-info">
                              <h3>{service.name}</h3>
                              <p className="service-description">{service.description}</p>
                            </div>
                            {service.popular && (
                              <span className="popular-badge">Popular</span>
                            )}
                          </div>
                          <div className="service-features">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="feature-tag">{feature}</span>
                            ))}
                          </div>
                          {formData.serviceType === service.name && (
                            <div className="selected-indicator">
                              <FaCheckCircle /> Selected
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* All Services */}
                <div className="services-section">
                  <h3 className="section-subtitle">
                    <FaCheckCircle /> All Services
                  </h3>
                  <div className="services-grid all-services">
                    {services.map(service => (
                      <div 
                        key={service.id}
                        className={`service-option ${formData.serviceType === service.name ? 'selected' : ''}`}
                        onClick={() => handleServiceSelect(service.name)}
                      >
                        <div className="service-option-header">
                          <div className="service-icon">{service.icon}</div>
                          <div className="service-info">
                            <h3>{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                          </div>
                        </div>
                        <div className="service-features">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="feature-tag">{feature}</span>
                          ))}
                        </div>
                        {formData.serviceType === service.name && (
                          <div className="selected-indicator">
                            <FaCheckCircle /> Selected
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Selected Service Display */}
                {formData.serviceType && (
                  <div className="selected-service-summary">
                    <div className="selected-service-header">
                      <h3>Selected Service</h3>
                      <button 
                        type="button" 
                        className="btn-change"
                        onClick={() => setFormData(prev => ({ ...prev, serviceType: '' }))}
                      >
                        Change
                      </button>
                    </div>
                    <div className="selected-service-details">
                      <div className="selected-service-icon">
                        {services.find(s => s.name === formData.serviceType)?.icon}
                      </div>
                      <div className="selected-service-info">
                        <h4>{formData.serviceType}</h4>
                        <p>{services.find(s => s.name === formData.serviceType)?.description}</p>
                        {renderServiceFeatures(formData.serviceType)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Personal Details */}
            {step === 2 && (
              <div className="booking-step personal-details-step">
                <div className="step-header">
                  <h2><FaUser /> Personal Information</h2>
                  <p>Please provide your contact details so we can reach you for confirmation.</p>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
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
                    />
                    <small className="form-help">As it appears on your ID/passport</small>
                  </div>

                  <div className="form-group">
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
                    />
                    <small className="form-help">We'll send confirmation to this email</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone /> Phone Number *
                    </label>
                    <div className="phone-input-group">
                      <span className="phone-prefix">+237</span>
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
                    <small className="form-help">We'll call/SMS you for confirmation</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="travelers">
                      <FaUsers /> Number of Travelers
                    </label>
                    <div className="travelers-select">
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Traveler' : 'Travelers'}
                          </option>
                        ))}
                      </select>
                      <div className="travelers-hint">
                        <FaQuestionCircle />
                        <span>Group discounts available for 5+ travelers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Travel Details */}
            {step === 3 && (
              <div className="booking-step travel-details-step">
                <div className="step-header">
                  <h2><FaCalendarAlt /> Travel Details</h2>
                  <p>Tell us about your travel plans and preferences.</p>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="destination">
                      <FaMapMarkerAlt /> Destination *
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      placeholder="City, Country or Region"
                    />
                    <small className="form-help">e.g., "Dubai, UAE" or "Paris, France"</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="departureDate">Departure Date *</label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <small className="form-help">Earliest possible departure date</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="returnDate">Return Date (Optional)</label>
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      min={formData.departureDate || new Date().toISOString().split('T')[0]}
                    />
                    <small className="form-help">Leave blank for one-way trips</small>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="specialRequests">Special Requests & Preferences</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Any special requirements, preferences, dietary restrictions, accessibility needs, or additional information about your travel plans..."
                    />
                    <small className="form-help">We'll do our best to accommodate your needs</small>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment & Confirmation */}
            {step === 4 && (
              <div className="booking-step confirmation-step">
                <div className="step-header">
                  <h2><FaCreditCard /> Review & Confirm</h2>
                  <p>Review your booking details and choose payment method.</p>
                </div>
                
                <div className="confirmation-grid">
                  {/* Booking Summary */}
                  <div className="booking-summary-card">
                    <div className="summary-header">
                      <h3>Booking Summary</h3>
                      <button 
                        type="button" 
                        className="btn-edit"
                        onClick={() => setStep(1)}
                      >
                        Edit Details
                      </button>
                    </div>
                    
                    <div className="summary-content">
                      <div className="summary-section">
                        <h4><FaPlane /> Service Details</h4>
                        <div className="summary-item">
                          <span>Service Type:</span>
                          <strong>{formData.serviceType}</strong>
                        </div>
                        <div className="summary-item">
                          <span>Travelers:</span>
                          <strong>{formData.travelers} {formData.travelers === 1 ? 'person' : 'people'}</strong>
                        </div>
                      </div>
                      
                      <div className="summary-section">
                        <h4><FaUser /> Personal Information</h4>
                        <div className="summary-item">
                          <span>Name:</span>
                          <strong>{formData.name}</strong>
                        </div>
                        <div className="summary-item">
                          <span>Email:</span>
                          <strong>{formData.email}</strong>
                        </div>
                        <div className="summary-item">
                          <span>Phone:</span>
                          <strong>+237 {formData.phone}</strong>
                        </div>
                      </div>
                      
                      {formData.destination && (
                        <div className="summary-section">
                          <h4><FaMapMarkerAlt /> Travel Details</h4>
                          <div className="summary-item">
                            <span>Destination:</span>
                            <strong>{formData.destination}</strong>
                          </div>
                          {formData.departureDate && (
                            <div className="summary-item">
                              <span>Departure:</span>
                              <strong>{new Date(formData.departureDate).toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</strong>
                            </div>
                          )}
                          {formData.returnDate && (
                            <div className="summary-item">
                              <span>Return:</span>
                              <strong>{new Date(formData.returnDate).toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</strong>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {formData.specialRequests && (
                        <div className="summary-section">
                          <h4>Special Requests</h4>
                          <div className="summary-requests">
                            <p>{formData.specialRequests}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="payment-section">
                    <div className="payment-methods-card">
                      <h3>Select Payment Method</h3>
                      <p>Choose how you'd like to pay for your booking</p>
                      
                      <div className="payment-options-grid">
                        {paymentMethods.map(method => (
                          <div 
                            key={method.id}
                            className={`payment-option ${formData.paymentMethod === method.id ? 'selected' : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, paymentMethod: method.id }))}
                          >
                            <div className="payment-option-header">
                              <span className="payment-icon">{method.icon}</span>
                              <div>
                                <h4>{method.name}</h4>
                                <p className="payment-description">{method.description}</p>
                              </div>
                              {formData.paymentMethod === method.id && (
                                <FaCheckCircle className="payment-check" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="terms-card">
                      <div className="terms-header">
                        <FaShieldAlt />
                        <h3>Secure Booking & Terms</h3>
                      </div>
                      
                      <div className="terms-content">
                        <div className="terms-checkbox">
                          <input
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="termsAccepted">
                            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and 
                            confirm that the information provided is accurate. I understand that this is a booking request 
                            and final confirmation is subject to availability.
                          </label>
                        </div>
                        
                        <div className="security-features">
                          <div className="security-item">
                            <FaShieldAlt />
                            <span>Your information is secure and encrypted</span>
                          </div>
                          <div className="security-item">
                            <FaCheckCircle />
                            <span>No payment required at this stage</span>
                          </div>
                          <div className="security-item">
                            <FaPhone />
                            <span>We'll contact you within 24 hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="booking-navigation">
              {step > 1 && (
                <button 
                  type="button" 
                  className="btn-prev"
                  onClick={prevStep}
                >
                  <FaChevronLeft /> Back
                </button>
              )}
              
              {step < 4 ? (
                <button 
                  type="button" 
                  className="btn-next"
                  onClick={nextStep}
                  disabled={!validateStep()}
                >
                  Continue to {step === 1 ? 'Personal Details' : step === 2 ? 'Travel Info' : 'Confirmation'} 
                  <FaChevronRight />
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={!formData.termsAccepted}
                >
                  <FaCheckCircle /> Confirm Booking Request
                </button>
              )}
            </div>
          </form>

          {/* Help & Support Section */}
          <div className="booking-help-section">
            <div className="help-grid">
              <div className="help-card">
                <div className="help-icon">
                  <FaPhone />
                </div>
                <div className="help-content">
                  <h3>Need Help?</h3>
                  <p>Our travel experts are here to assist you with your booking</p>
                  <a href="tel:+237677433511" className="help-link">
                    Call: +237 677 433 511
                  </a>
                </div>
              </div>
              
              <div className="help-card">
                <div className="help-icon">
                  <FaQuestionCircle />
                </div>
                <div className="help-content">
                  <h3>FAQs</h3>
                  <p>Find answers to common questions about booking with us</p>
                  <a href="/faq" className="help-link">
                    View FAQs
                  </a>
                </div>
              </div>
              
              <div className="help-card">
                <div className="help-icon">
                  <FaShieldAlt />
                </div>
                <div className="help-content">
                  <h3>Secure Booking</h3>
                  <p>Your information is protected with 256-bit SSL encryption</p>
                  <span className="security-badge">SSL Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BookingPage;