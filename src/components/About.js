import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm Arnaw kumar, an 18-year-old front-end developer passionate about creating beautiful and functional applications using modern technologies.
            </p>
            <p>
              I specialize in React, JavaScript, and have a keen interest in user experience design.
              When I'm not coding, you can find me exploring new technologies or contributing to open source projects.
            </p>
          </div>
          <div className="about-image">
            <img src="/arnaw.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
