import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/username/ecommerce',
      live: 'https://ecommerce-demo.netlify.app'
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application that displays current weather and forecasts using OpenWeatherMap API.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
      github: 'https://github.com/username/weather-app',
      live: 'https://weather-app-demo.netlify.app'
    },
    {
      title: 'Task Management Tool',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/username/task-manager',
      live: 'https://task-manager-demo.netlify.app'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
