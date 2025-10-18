import React from "react";
import "../Css/Project.css";
import { Link } from "react-router-dom";
import schoolImg from "/img/ShcoolDonation.jpg";
import constructionImg from "/img/Construction.jpg";
import samsungImg from "/img/SamsungEcomerce.jpg";
import newbalanceImg from "/img/NewbalaceClone.jpg";
import todoImg from "/img/TodoApp.jpg";
import chatbotImg from "/img/ChatbotWalmart.jpg";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Real-Time Projects</h2>
      <div className="projects-container">
        {/* Real-Time Projects */}
        <div className="project-card">
          <img src={schoolImg} alt="School Donation Website" className="project-image" />
          <div className="project-info">
            <h3>School Donation Website</h3>
            <p>
              A real-time donation platform built using <strong>React.js</strong>,{" "}
              <strong>Firebase</strong>, and integrated with{" "}
              <strong>Razorpay Payment Gateway</strong> for secure payments.
            </p>
            <Link to="/project/school-donation" className="project-btn">
              View Project
            </Link>
          </div>
        </div>

        <div className="project-card">
          <img src={constructionImg} alt="Shalom Builders" className="project-image" />
          <div className="project-info">
            <h3>Shalom Builders – Construction Website</h3>
            <p>
              A professional company website built for <strong>Shalom Builders, Tirunelveli</strong>,
              designed to market commercial projects and promote brand visibility.
            </p>
            <Link to="/project/shalom-builders" className="project-btn">
              View Project
            </Link>
          </div>
        </div>
      </div>

      {/* Practice Projects */}
      <h2 className="projects-title practice-title">Practice Projects</h2>
      <div className="projects-container practice-projects-container">
        <div className="project-card">
          <img src={newbalanceImg} alt="New Balance Clone" className="project-image" />
          <div className="project-info">
            <h3>New Balance Clone</h3>
            <p>
              A fully responsive e-commerce clone built using <strong>React.js</strong> and{" "}
              <strong>Tailwind CSS</strong> to replicate a real shopping experience.
            </p>
            <Link to="/project/newbalance" className="project-btn">
              View Project
            </Link>
          </div>
        </div>

        <div className="project-card">
          <img src={samsungImg} alt="Samsung E-Commerce Clone" className="project-image" />
          <div className="project-info">
            <h3>Samsung E-Commerce Clone</h3>
            <p>
              A product showcase and cart management system inspired by Samsung Store using{" "}
              <strong>React.js</strong> and <strong>JSON Database (Axios)</strong>.
            </p>
            <Link to="/project/samsung" className="project-btn">
              View Project
            </Link>
          </div>
        </div>

        <div className="project-card">
          <img src={todoImg} alt="To-Do Application" className="project-image" />
          <div className="project-info">
            <h3>To-Do Application</h3>
            <p>
              A productivity web app that allows users to manage daily tasks efficiently using{" "}
              <strong>React.js</strong> and <strong>Local Storage</strong>.
            </p>
            <Link to="/project/todo" className="project-btn">
              View Project
            </Link>
          </div>
        </div>

        <div className="project-card">
          <img src={chatbotImg} alt="Chatbot Grocery Store" className="project-image" />
          <div className="project-info">
            <h3>Chatbot Grocery Store</h3>
            <p>
              An AI-powered grocery store app with chatbot assistance, built with{" "}
              <strong>React.js</strong> and <strong>Firebase</strong>.
            </p>
            <Link to="/project/chatbot" className="project-btn">
              View Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
