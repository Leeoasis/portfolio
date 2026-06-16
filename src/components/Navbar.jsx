import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRound } from 'react-icons/cg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `nav-links ${isActive ? 'nav-link-active' : ''}`;

  return (
    <div className="nav-shell">
      {openMenu && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
      <nav className={`main-nav ${openMenu ? 'responsive-nav' : ''}`}>
        <ul>
          <li><NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/skills" className={navLinkClass} onClick={closeMenu}>Skills</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </nav>
      <button
        type="button"
        onClick={toggleMenu}
        className="nav-btn"
        aria-label={openMenu ? 'Close menu' : 'Open menu'}
        aria-expanded={openMenu}
      >
        {openMenu ? <FaTimes /> : <CgMenuRound />}
      </button>
    </div>
  )
}

export default Navbar;
