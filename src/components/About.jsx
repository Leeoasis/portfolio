import React from 'react'
import { Link } from 'react-router-dom'
import MyImage from '../assets/IMG_7208__2_-removebg-preview.png'
import { FaChessKnight, FaChevronRight, FaDownload, FaEnvelope, FaGuitar, FaMapMarkerAlt, FaMusic } from 'react-icons/fa';

const personalDetails = [
  { label: 'Website', value: 'lamleslie.netlify.app' },
  { label: 'Phone', value: '+27681069901' },
  { label: 'City', value: 'Cape Town, SA' },
  { label: 'Diploma', value: 'Full Stack Development' },
  { label: 'Email', value: 'leeegd99@gmail.com' },
  { label: 'Freelance', value: 'Available' },
];

const focusAreas = [
  'Full-stack web apps with React and Rails',
  'Responsive interfaces with Tailwind CSS',
  'Backend APIs, SQL, and practical integrations',
  'React Native, Expo, and mobile UI fundamentals',
];

const hobbies = [
  { icon: FaChessKnight, label: 'Chess', note: 'Strategy practice, minus the production incidents.' },
  { icon: FaGuitar, label: 'Instruments', note: 'Music keeps the creative side tuned.' },
  { icon: FaMusic, label: 'Creative projects', note: 'Small experiments that usually become useful.' },
];

const About = () => {
  return (
    <div className="home-div">
      <div className="content">
        <div className="heading">
          <p className="about-kicker">About Leslie</p>
          <h1 className="about-heading">Building useful software with care, curiosity, and momentum.</h1>
          <div className="about-content">
            <div className="about-hero-grid">
              <div className="about-image-panel">
                <img className="about-image" src={MyImage} alt="Leslie Gudo" />
                <div className="about-location-card">
                  <FaMapMarkerAlt />
                  <span>Cape Town, South Africa</span>
                </div>
              </div>
              <div className="about-text">
                <h2 className="about-title">Full Stack Developer</h2>
                <p className="my-text">
                  I enjoy turning messy requirements into focused, usable software. I care about clean interfaces, reliable backend logic, and collaborating well with the people around the product. Translation: I like making things work, then making them feel good to use.
                </p>
                <p className="about-para">
                  My experience spans React, JavaScript, Ruby on Rails, SQL, API tooling, and mentoring junior developers. I am also expanding into mobile development with React Native, Expo, React Navigation, and NativeWind so I can bring the same product thinking to mobile apps.
                </p>

                <div className="about-stat-grid">
                  <div>
                    <strong>1500+</strong>
                    <span>hours building</span>
                  </div>
                  <div>
                    <strong>10+</strong>
                    <span>juniors mentored</span>
                  </div>
                  <div>
                    <strong>Mobile</strong>
                    <span>React Native in progress</span>
                  </div>
                </div>

                <div className="about-actions">
                  <a className="resume-btn" href="https://drive.google.com/file/d/1SHeqNOoIEZnWC4lkV57WqqLmEKI9oxli/view?usp=sharing" download="Leslie's-resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FaDownload />
                    Download Resume
                  </a>
                  <Link to="/contact" className="about-contact-btn">
                    <FaEnvelope />
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>

            <div className="about-info-grid">
              {personalDetails.map((detail) => (
                <div className="about-info-card" key={detail.label}>
                  <FaChevronRight className="green" />
                  <div>
                    <strong>{detail.label}</strong>
                    <span>{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-focus-card">
              <div>
                <span className="learning-label">What I bring</span>
                <h3>Practical engineering with a product mindset</h3>
              </div>
              <ul>
                {focusAreas.map((area) => (
                  <li key={area}>
                    <FaChevronRight className="green" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-hobbies-card">
              <div>
                <span className="learning-label">After hours</span>
                <h3>A little personality, responsibly deployed</h3>
                <p>When I am not coding, I am usually playing chess, learning music, or chasing a creative idea before it escapes into the notes app forever.</p>
              </div>
              <div className="hobbies-grid">
                {hobbies.map(({ icon: Icon, label, note }) => (
                  <div className="hobby-item" key={label}>
                    <Icon aria-hidden="true" />
                    <strong>{label}</strong>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default About
