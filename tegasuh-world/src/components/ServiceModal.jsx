import React from 'react';
import { FaTimes, FaCheck, FaInfoCircle } from 'react-icons/fa';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <div className="service-modal-icon">{service.icon}</div>
          <h2>{service.title}</h2>
          <p className="modal-subtitle">{service.shortDescription}</p>
        </div>

        <div className="modal-body">
          <div className="service-details">
            <h3>Service Details</h3>
            <p>{service.fullDescription}</p>
            
            <div className="features-section">
              <h4><FaCheck /> Key Features</h4>
              <ul className="features-list">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {service.requirements && (
              <div className="requirements-section">
                <h4><FaInfoCircle /> Requirements</h4>
                <ul className="requirements-list">
                  {service.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {service.benefits && (
              <div className="benefits-section">
                <h4>Benefits</h4>
                <p>{service.benefits}</p>
              </div>
            )}
          </div>

          <div className="modal-actions">
            <a href="/book" className="btn-primary" onClick={onClose}>
              Book This Service
            </a>
            <button className="btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;