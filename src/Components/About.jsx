import React from "react";
import "../Css/About.css";
import profileImg from "../assets/handsome1.jpg"; 
import resumePdf from "../assets/Technical_Resume.pdf"; 
import { FaEnvelope, FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">Let's Introduce Myself</h2>

      <div className="about-container">
        {/* Left Side Image */}
        <div className="about-image">
          <img src={profileImg} alt="Muthu Nambi" />

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="mailto:muthu142001@gmail.com"
              className="icon email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/nambi_707?igsh=eHdxeHg3eGdhM3dn"
              className="icon insta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/muthu-nambi-6a463a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="icon linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/muthu.nambi.52"
              className="icon facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/nambi142"
              className="icon github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="about-content">
          <p>
            I’m <span className="highlight">Muthu Nambi</span>, a passionate{" "}
            <strong>Frontend Developer</strong> and emerging{" "}
            <strong>Full Stack MERN Developer</strong> skilled in{" "}
            <strong>
              React.js, JavaScript, Node.js, Express.js, MongoDB, Firebase
            </strong>{" "}
            and <strong>Tailwind CSS</strong>.
          </p>

          <p>
            I’ve developed several professional real-time projects, including a{" "}
            <strong>School Management Website</strong>, a{" "}
            <strong>Donation Platform</strong> with{" "}
            <strong>Razorpay Payment Gateway</strong>, and a{" "}
            <strong>Construction Company Website</strong> for commercial project
            marketing and career opportunities.
          </p>

          <p>
            I specialize in building modern, responsive, and high-performance web
            applications with scalable architecture, secure integrations, and seamless
            user experiences.
          </p>

          <p>
            I’m dedicated to continuous learning and crafting business-driven digital
            solutions that turn ideas into impactful results.
          </p>

          {/* CV Download Button */}
          <a
            href={resumePdf}
            download="Muthu_Nambi_Resume.pdf"
            className="download-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
