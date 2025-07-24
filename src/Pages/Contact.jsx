import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle"><i>Feel free to reach out if you want to collaborate, have questions, or just want to say hi!</i></p>

      <div className="contact-content">
        {/* Left side - Contact Info */}
        <div className="contact-left">
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+91 9343670121</p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p><a href="mailto:gaurinandanapai@gmail.com" className="contact-link">gaurinandanapai@gmail.com</a></p>
          </div>
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>Kochi, India</p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="contact-right">
          <form
            className="contact-form"
            action="https://formspree.io/f/xdkdgokl"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
