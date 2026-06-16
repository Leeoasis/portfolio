import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

// Initialize EmailJS with your public key
emailjs.init('2NxF4OqnIoJV0DlyM');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendError('');

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSending(true);
      emailjs
        .send('service_dee4oun', 'template_1m5fhl5', formData)
        .then(
          () => {
            setIsSubmitted(true);
            setFormData({
              name: '',
              email: '',
              message: '',
            });
            setErrors({});
          },
          () => {
            setSendError('The message did not send. You can try again or use the WhatsApp button for a faster route.');
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    } else {
      setErrors(newErrors);
    }
  };

  const contactDetails = [
    {
      icon: FaEnvelope,
      value: 'leeegd99@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      value: 'Cape Town, South Africa',
    },
  ];

  return (
    <div className="home-div">
      <div className="content">
        <div className="heading">
          <div className="contact-shell">
            <div className="contact-copy">
              <p className="about-kicker">Contact</p>
              <h1 className="contact-heading">Let us build something useful.</h1>
              <p className="contact-intro">
                Got a role, project, collaboration, or freelance idea? Send a short note and I will get back to you.
              </p>

              <div className="contact-detail-list">
                {contactDetails.map(({ icon: Icon, value }) => (
                  <div className="contact-detail-card" key={value}>
                    <Icon aria-hidden="true" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-panel">
              {isSubmitted ? (
                <div className="success-card">
                  <FaPaperPlane aria-hidden="true" />
                  <p className="success-message">Message sent successfully.</p>
                  <span>I will reply soon, after the inbox does its tiny victory lap.</span>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                      {errors.name && (
                        <p className="error-message">{errors.name}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                      {errors.email && (
                        <p className="error-message">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me what you are building..."
                      required
                    />
                    {errors.message && (
                      <p className="error-message">{errors.message}</p>
                    )}
                  </div>
                  {sendError && (
                    <p className="send-error-message" role="alert">{sendError}</p>
                  )}
                  <button className="submit-btn" type="submit" disabled={isSending}>
                    <FaPaperPlane aria-hidden="true" />
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
