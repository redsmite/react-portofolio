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
    { name: "NoSQL", icon: <BiServer /> },
    { name: "Firestore", icon: <BiServer /> },
    { name: "PHP Laravel", icon: <BiCodeAlt /> },
    { name: "REST API", icon: <BiCodeAlt /> },
    { name: "GIT", icon: <BiCodeAlt /> },
    { name: "Python", icon: <BiCodeAlt /> },
    { name: "Docker", icon: <BiCodeAlt /> },
    { name: "C#", icon: <BiCodeAlt /> },
    { name: "AI Fundamentals", icon: <BiCodeAlt /> },
  ];

  const networkingSkills = [
    { name: "Linux (Ubuntu, Kali)", icon: <BiNetworkChart /> },
    { name: "Wireshark", icon: <BiNetworkChart /> },
    { name: "Firewall Configuration", icon: <BiNetworkChart /> },
    { name: "Routing & Switching", icon: <BiNetworkChart /> },
    { name: "Network Troubleshooting", icon: <BiNetworkChart /> },
    { name: "VLAN/VTP Trunking", icon: <BiNetworkChart /> },
    { name: "Load Balancing", icon: <BiNetworkChart /> },
    { name: "Endpoint Security", icon: <BiNetworkChart /> },
    { name: "Network Defense", icon: <BiNetworkChart /> },
    { name: "Cyber Threat Management", icon: <BiNetworkChart /> },
    { name: "Penetration Testing", icon: <BiNetworkChart /> },
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
