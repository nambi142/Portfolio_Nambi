import React, { useEffect, useState, useRef } from "react";
import "../Css/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Muthu Nambi</div>

      {/* Desktop Navigation */}
      <nav className="nav-links desktop-nav">
        <ScrollLink to="about" smooth={true} duration={500} className="link">
          About
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} className="link">
          Projects
        </ScrollLink>
        <ScrollLink to="video" smooth={true} duration={500} className="link">
          Video
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} className="link">
          Contact
        </ScrollLink>
      </nav>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Slide Menu */}
      <div ref={menuRef} className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="link"
          onClick={() => setMenuOpen(false)}
        >
          About
        </ScrollLink>

        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="link"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </ScrollLink>

        <ScrollLink
          to="video"
          smooth={true}
          duration={500}
          offset={-70} // for fixed header
          className="link"
          onClick={() => setMenuOpen(false)}
        >
          Video
        </ScrollLink>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="link"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </ScrollLink>
      </div>
    </header>
  );
};

export default Header;
