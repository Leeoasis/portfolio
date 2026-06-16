// SideCard.js
import React from 'react';
import myImage from '../assets/IMG_1207.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
 faInstagram, 
  faGithub, 
  faLinkedin,
  faMedium,
 } from '@fortawesome/free-brands-svg-icons';

const SideCard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="left-sidebar">
        <div className="side-bar-header">
            <h2 className="logo-name">Leslie</h2>
            <span className="designation">Full Stack & React Native Developer</span>
        </div>
        <img className="sideImage" src={myImage} alt="my logo" />
        <h2 className="email">leeegd99@gmail.com</h2>
        <h2 className="address">Based in CapeTown, SA</h2>
        <p className="copyright"> @{currentYear} Leslie. Built with care and a suspicious amount of coffee.</p>
        <div className="social-profile">
      <a href="https://github.com/Leeoasis" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/leslie-gudo/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://medium.com/@leeegd99" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a href="https://www.instagram.com/gd_leslie/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
    <Link to={"/contact"} className="theme-btn">Hire me!</Link>
    </div>
  );
};

export default SideCard;
