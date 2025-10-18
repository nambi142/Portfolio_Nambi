import React from 'react';
import { FaReact } from 'react-icons/fa';
import '../Css/Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="overlay"></div>
      <div className="home-content">
        <h1>
          Hello! My Self <span>Muthu Nambi</span>
        </h1>
        <p>Aspiring React Js Developer</p>
        <div className="react-icon">
          <FaReact className="spin" />
        </div>
      </div>
    </section>
  );
};

export default Home;
