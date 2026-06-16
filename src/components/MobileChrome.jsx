import React from 'react';
import { Link } from 'react-router-dom';

const MobileChrome = () => {
  return (
    <Link to="/" className="mobile-brand">
      <span className="mobile-brand-name">Leslie</span>
      <span className="mobile-brand-role">Full Stack + React Native</span>
    </Link>
  );
};

export default MobileChrome;
