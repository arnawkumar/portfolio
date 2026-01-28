import React from 'react';
import './Skills.css';
import { FaJsSquare, FaReact, FaHtml5, FaNodeJs, FaPython, FaGit } from 'react-icons/fa';

function Skills() {
  const skills = [
    { name: 'JavaScript', percentage: 100, icon: <FaJsSquare /> },
    { name: 'React', percentage: 100, icon: <FaReact /> },
    { name: 'HTML/CSS', percentage: 100, icon: <FaHtml5 /> },
    { name: 'Node.js', percentage: 100, icon: <FaNodeJs /> },
    { name: 'Python', percentage: 100, icon: <FaPython /> },
    { name: 'Git', percentage: 100, icon: <FaGit /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-content">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
