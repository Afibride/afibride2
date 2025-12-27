import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;