import React from "react";
import profilePic from "../assets/profile.jpg";
import gifSignature from "../assets/signature.gif";
import background from "../assets/background2.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Hero.css";

const Hero = () => {
  const projects = [
    { 
      name: "Subnet Exercise", 
      link: "https://subnet-exercise.web.app/",
      description: "A web app for subnetting exercises"
    },
    { 
      name: "CSC Reviewer", 
      link: "https://csc-reviewer-ph.web.app/", 
      repo: "https://github.com/redsmite/csc-reviewer",
      description: "A reviewer app for CSC exams"
    },
    { 
      name: "Water Rights Permit", 
      link: "https://water-rights-permit.web.app/", 
      repo: "https://github.com/redsmite/nwrb-water-rights-permit",
      description: "A water rights permit management system"
    },
    { 
      name: "WRUS Asset Tracking System", 
      link: "https://wrus-asset-tracking-system.web.app/",
      repo: "https://github.com/redsmite/wrus-asset-tracking-system",
      description: "Information system designed for WRUS"
    },
  ];

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        filter: "grayscale(50%)",
      }}
    >
      <img src={profilePic} alt="Kym Carabeo" className="hero-profile" />

      <div className="hero-title">
        <h1>Hi, I'm Kym Carabeo</h1>
        <p>Web Developer | Network Engineer | Junior Cybersecurity Analyst</p>
      </div>

      <div className="social-buttons">
        <a
          href="https://github.com/redsmite"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          <FaGithub style={{ marginRight: "6px" }} />
          Visit My GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/josonvon-kym-carabeo-35708239a/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-btn"
        >
          <FaLinkedin style={{ marginRight: "6px" }} />
          Visit My LinkedIn
        </a>
      </div>

      <div className="projects-container">
        <h3>My Projects (Live Links)</h3>
        <ul>
          {projects.map((project) => (
            <li key={project.name}>
              <div className="live-link">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="live-link">
                  <span className="recording-dot"></span>
                  Live Version
                </a>
              </div>

              {/* GitHub Repo Link */}
              <div className="project-links">
                {/* GitHub Repo (auto-hide if none) */}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="bi bi-github"></i>
                    Repository
                  </a>
                ) : (
                  <span className="project-link disabled">
                    <i className="bi bi-x-circle"></i>
                    No Repository
                  </span>
                )}

                {/* Documentation (PDF) — Only for WRUS project */}
                {project.documentation && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="bi bi-file-earmark-pdf"></i>
                    Documentation
                  </a>
                )}
              </div>


              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="email-signature">
        <p className="name">Kym Carabeo</p>
        <p className="title">Full Stack Developer | Cisco Certified Network Associate</p>
        <p>
          Email:{" "}
          <a href="mailto:denrncrkvcarabeo@gmail.com">
            denrncrkvcarabeo@gmail.com
          </a>
        </p>
        <p>DENR NCR – Administrative Officer I / Programmer</p>
        <img src={gifSignature} alt="Email Signature GIF" />
      </div>
    </section>
  );
};

export default Hero;
