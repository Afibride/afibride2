import React, { useState } from 'react';
import { FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content contact-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our travel experts</p>
        </div>

        <div className="modal-body">
          <div className="contact-modal-grid">
            <div className="contact-info-modal">
              <h3>Quick Contact</h3>
              
              <div className="contact-item-modal">
                <FaMapMarkerAlt />
                <div>
                  <strong>Address:</strong>
                  <p>Sanac Street opposite the central post office, Bamenda</p>
                </div>
              </div>

              <div className="contact-item-modal">
                <FaPhone />
                <div>
                  <strong>Phone:</strong>
                  <p>+237 677 433 511</p>
                </div>
              </div>

              <div className="contact-item-modal">
                <FaEnvelope />
                <div>
                  <strong>Email:</strong>
                  <p>tegasuhworld@gmail.com</p>
                </div>
              </div>

              <div className="quick-links">
                <h4>Quick Links</h4>
                <a href="/services" onClick={onClose}>View Services</a>
                <a href="/book" onClick={onClose}>Book Now</a>
                <a href="/about" onClick={onClose}>About Us</a>
              </div>
            </div>

            <div className="contact-form-modal">
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                  />
                </div>

                <button type="submit" className="btn-primary btn-block">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;