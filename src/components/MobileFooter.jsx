import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-socials">
        <a href="https://github.com/Leeoasis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/leslie-gudo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://medium.com/@leeegd99" target="_blank" rel="noopener noreferrer" aria-label="Medium">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a href="https://www.instagram.com/gd_leslie/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <Link to="/contact" className="mobile-footer-cta">Hire me</Link>
    </footer>
  );
};

export default MobileFooter;
