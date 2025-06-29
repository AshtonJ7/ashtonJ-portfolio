import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import menu from '../Assets/menu.svg';
import close from '../Assets/close.svg';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Calculate navbar height dynamically
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="d-flex flex-row-reverse navbar sticky-top">
      <div
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleMobileMenu()}
      >
        <img
          src={isMobileMenuOpen ? close : menu}
          alt="Toggle menu"
          className="menu-icon"
        />
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a
          href="/ashton-react-portfolio/resume"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          Resume
        </a>
      
        <ScrollLink
          to="home"
          smooth={true}
          duration={30}
          offset={-navbarHeight}
          spy={true}
          activeClass="active"
          onClick={handleLinkClick}
        >
          Home
        </ScrollLink>
        
        <ScrollLink
          to="contact"
          smooth={true}
          duration={30}
          offset={-navbarHeight}
          spy={true}
          activeClass="active"
          onClick={handleLinkClick}
        >
          Contact
        </ScrollLink>
        
        <ScrollLink
          to="projects"
          smooth={true}
          duration={30}
          offset={-navbarHeight}
          spy={true}
          activeClass="active"
          onClick={handleLinkClick}
        >
          Projects
        </ScrollLink>
        
        <ScrollLink
          to="about"
          smooth={true}
          duration={30}
          offset={-navbarHeight}
          spy={true}
          activeClass="active"
          onClick={handleLinkClick}
        >
          About
        </ScrollLink>
      </div>
    </nav>
  );
}

export default Navbar;