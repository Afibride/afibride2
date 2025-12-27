import React, { useState } from 'react';
import { toast } from 'react-toastify';
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
  FaChevronLeft,
  FaHeadset,
  FaClock,
  FaInfoCircle
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
      popular: true,
      color: '#2196F3'
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
      ],
      color: '#FF9800'
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
      popular: true,
      color: '#4CAF50'
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
      ],
      color: '#795548'
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
      ],
      color: '#9C27B0'
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
      ],
      color: '#607D8B'
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
    const service = services.find(s => s.name === serviceName);
    setFormData(prev => ({ ...prev, serviceType: serviceName }));
    
    toast.success(
      <div>
        <strong>{serviceName} selected!</strong>
        <br />
        <small>{service?.description}</small>
      </div>,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        icon: service?.icon
      }
    );
    
    setTimeout(() => {
      if (step === 1) nextStep();
    }, 500);
  };

  const nextStep = () => {
    if (validateStep()) {
      const stepMessages = {
        1: 'Great choice! Moving to personal details',
        2: 'Information saved! Moving to travel details',
        3: 'Travel plans added! Final review step'
      };
      
      if (stepMessages[step]) {
        toast.success(stepMessages[step], {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
      }
      
      setStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const errorMessages = {
        1: 'Please select a service to continue',
        2: 'Please fill in all required personal details',
        3: 'Please provide destination and departure date',
        4: 'Please accept terms and conditions'
      };
      
      toast.error(errorMessages[step] || 'Please fill in all required fields', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
      });
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const stepNames = {
      1: 'service selection',
      2: 'personal details',
      3: 'travel details',
      4: 'confirmation'
    };
    
    toast.info(`Returning to ${stepNames[step - 1]}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
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
      toast.error('Please complete all required fields before submitting', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
      });
      return;
    }

    const toastId = toast.loading(
      <div>
        <strong>Processing your booking request...</strong>
        <br />
        <small>Please wait a moment</small>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
      }
    );

    setTimeout(() => {
      console.log('Booking submitted:', formData);
      
      toast.update(toastId, {
        render: (
          <div>
            <strong>🎉 Booking Request Submitted!</strong>
            <br />
            <small>We'll contact you within 24 hours</small>
          </div>
        ),
        type: "success",
        isLoading: false,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
      });

      setTimeout(() => {
        toast.success(
          <div>
            <strong>📞 Contact Information</strong>
            <br />
            <small>Phone: +237 {formData.phone}</small>
            <br />
            <small>Email: {formData.email}</small>
            <br />
            <small>Service: {formData.serviceType}</small>
          </div>,
          {
            position: "top-center",
            autoClose: 8000,
            hideProgressBar: false,
          }
        );
      }, 1000);

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
      
      setStep(1);
      
      toast.info(
        <div>
          <strong>📋 New Booking Available</strong>
          <br />
          <small>Ready to plan your next adventure?</small>
        </div>,
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
        }
      );
    }, 2000);
  };

  const handlePaymentSelect = (methodId) => {
    setFormData(prev => ({ ...prev, paymentMethod: methodId }));
    
    const method = paymentMethods.find(m => m.id === methodId);
    if (method) {
      toast.info(
        <div>
          <strong>{method.icon} {method.name} selected</strong>
          <br />
          <small>{method.description}</small>
        </div>,
        {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          icon: false,
        }
      );
    }
  };

  const handleTermsChange = (e) => {
    const { checked } = e.target;
    setFormData(prev => ({ ...prev, termsAccepted: checked }));
    
    if (checked) {
      toast.success('✓ Terms and conditions accepted', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } else {
      toast.warning('Terms and conditions not accepted', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
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
            <li key={idx}><FaCheckCircle /> {feature}</li>
          ))}
        </ul>
      </div>
    );
  };

  const handleHelpClick = (type) => {
    const messages = {
      phone: 'Call our travel experts for immediate assistance',
      faq: 'Browse our frequently asked questions',
      secure: 'Your information is protected with 256-bit SSL encryption',
      info: 'Need help? Our team is available 24/7'
    };
    
    toast.info(messages[type], {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const handleServiceHover = (serviceName) => {
    const service = services.find(s => s.name === serviceName);
    toast.info(
      <div>
        <strong>{serviceName}</strong>
        <br />
        <small>{service?.description}</small>
      </div>,
      {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        toastId: serviceName,
      }
    );
  };

  const handleEditDetails = () => {
    setStep(1);
    toast.info('Returning to edit details', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleClearService = () => {
    setFormData(prev => ({ ...prev, serviceType: '' }));
    toast.info('Service selection cleared', {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Header />
      
      <div className="booking-page">
        <div className="container">
          <div className="booking-header">
            <h1>Book Your Travel Service</h1>
            <p>Complete the form below to book your travel with Tegasuh World</p>
            <div className="booking-subtitle">
              <FaInfoCircle /> Simple 4-step process | Secure booking | 24/7 support
            </div>
          </div>

          <div className="booking-progress-tracker">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${getStepProgress()}%` }}
              ></div>
            </div>
            <div className="progress-steps">
              {[1, 2, 3, 4].map((stepNum) => (
                <div 
                  key={stepNum} 
                  className={`progress-step ${step >= stepNum ? 'active' : ''}`}
                  onClick={() => stepNum < step ? setStep(stepNum) : null}
                >
                  <span className="step-number">{stepNum}</span>
                  <span className="step-label">
                    {stepNum === 1 ? 'Select Service' : 
                     stepNum === 2 ? 'Your Details' : 
                     stepNum === 3 ? 'Travel Info' : 'Confirm'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="booking-form-container">
            {step === 1 && (
              <div className="booking-step service-selection-step">
                <div className="step-header">
                  <h2><FaPlane /> Select Your Travel Service</h2>
                  <p>Choose the service you want to book. We offer comprehensive travel solutions for all your needs.</p>
                </div>
                
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
                          onMouseEnter={() => handleServiceHover(service.name)}
                        >
                          <div className="service-option-header">
                            <div className="service-icon" style={{ color: service.color }}>
                              {service.icon}
                            </div>
                            <div className="service-info">
                              <h3>{service.name}</h3>
                              <p className="service-description">{service.description}</p>
                            </div>
                            <span className="popular-badge">🔥 Popular</span>
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
                        onMouseEnter={() => handleServiceHover(service.name)}
                      >
                        <div className="service-option-header">
                          <div className="service-icon" style={{ color: service.color }}>
                            {service.icon}
                          </div>
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
                
                {formData.serviceType && (
                  <div className="selected-service-summary">
                    <div className="selected-service-header">
                      <h3>Selected Service</h3>
                      <button 
                        type="button" 
                        className="btn-change"
                        onClick={handleClearService}
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

            {step === 4 && (
              <div className="booking-step confirmation-step">
                <div className="step-header">
                  <h2><FaCreditCard /> Review & Confirm</h2>
                  <p>Review your booking details and choose payment method.</p>
                </div>
                
                <div className="confirmation-grid">
                  <div className="booking-summary-card">
                    <div className="summary-header">
                      <h3>Booking Summary</h3>
                      <button 
                        type="button" 
                        className="btn-edit"
                        onClick={handleEditDetails}
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

                  <div className="payment-section">
                    <div className="payment-methods-card">
                      <h3>Select Payment Method</h3>
                      <p>Choose how you'd like to pay for your booking</p>
                      
                      <div className="payment-options-grid">
                        {paymentMethods.map(method => (
                          <div 
                            key={method.id}
                            className={`payment-option ${formData.paymentMethod === method.id ? 'selected' : ''}`}
                            onClick={() => handlePaymentSelect(method.id)}
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
                            onChange={handleTermsChange}
                            required
                          />
                          <label htmlFor="termsAccepted">
                            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer" onClick={(e) => {
                              e.preventDefault();
                              toast.info('Opening Terms & Conditions', {
                                position: 'bottom-right',
                              });
                            }}>Terms & Conditions</a> and 
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

          <div className="booking-help-section">
            <div className="help-grid">
              <div className="help-card" onClick={() => handleHelpClick('phone')}>
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
              
              <div className="help-card" onClick={() => handleHelpClick('faq')}>
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
              
              <div className="help-card" onClick={() => handleHelpClick('secure')}>
                <div className="help-icon">
                  <FaShieldAlt />
                </div>
                <div className="help-content">
                  <h3>Secure Booking</h3>
                  <p>Your information is protected with 256-bit SSL encryption</p>
                  <span className="security-badge">SSL Secured</span>
                </div>
              </div>
              
              <div className="help-card" onClick={() => handleHelpClick('info')}>
                <div className="help-icon">
                  <FaHeadset />
                </div>
                <div className="help-content">
                  <h3>24/7 Support</h3>
                  <p>Get assistance anytime, day or night</p>
                  <span className="support-badge">Always Available</span>
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