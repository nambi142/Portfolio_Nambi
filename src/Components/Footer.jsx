import React from "react";
import "../Css/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="muthu-footer">
      <p className="muthu-footer-text">
        Copyright © {currentYear} All rights reserved | Muthu Nambi
      </p>

      <div className="muthu-footer-icons">
        <a
          href="https://www.facebook.com/muthu.nambi.52"
          target="_blank"
          rel="noopener noreferrer"
          className="muthu-footer-icon"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/nambi_707?igsh=eHdxeHg3eGdhM3dn"
          target="_blank"
          rel="noopener noreferrer"
          className="muthu-footer-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/muthu-nambi-6a463a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="muthu-footer-icon"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/nambi142"
          target="_blank"
          rel="noopener noreferrer"
          className="muthu-footer-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/918637619849"
          target="_blank"
          rel="noopener noreferrer"
          className="muthu-footer-icon"
        >
          <FaWhatsapp />
        </a>

        <a href="mailto:muthu142001@gmail.com" className="muthu-footer-icon">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
