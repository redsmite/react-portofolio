import React from "react";
import { BiCodeAlt, BiServer, BiNetworkChart } from "react-icons/bi"; // React Icons
import "./Skills.css";

const Skills = () => {
  const webSkills = [
    { name: "ReactJS", icon: <BiCodeAlt /> },
    { name: "NodeJS", icon: <BiCodeAlt /> },
    { name: "Express", icon: <BiServer /> },
    { name: "MongoDB", icon: <BiServer /> },
    { name: "JavaScript", icon: <BiCodeAlt /> },
    { name: "HTML", icon: <BiCodeAlt /> },
    { name: "CSS", icon: <BiCodeAlt /> },
    { name: "MySQL", icon: <BiServer /> },
    { name: "PHP", icon: <BiCodeAlt /> },
    { name: "GIT", icon: <BiCodeAlt /> },
    { name: "Python", icon: <BiCodeAlt /> },
    { name: "C#", icon: <BiCodeAlt /> }
  ];

  const networkingSkills = [
    { name: "CCNA Certified", icon: <BiNetworkChart /> },
    { name: "Routing & Switching", icon: <BiNetworkChart /> },
    { name: "Network Troubleshooting", icon: <BiNetworkChart /> },
    { name: "LAN/WAN Management", icon: <BiNetworkChart /> },
    { name: "Cybersecurity", icon: <BiNetworkChart /> },
    { name: "Ethical Hacking", icon: <BiNetworkChart /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      {/* Web Development Skills */}
      <div className="web-skills">
        <h3>Web Development</h3>
        <ul>
          {webSkills.map((skill) => (
            <li key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Networking Skills */}
      <div className="networking-skills">
        <h3>Networking</h3>
        <ul>
          {networkingSkills.map((skill) => (
            <li key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
