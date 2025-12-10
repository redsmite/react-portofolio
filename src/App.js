import React from "react";
import { Helmet } from "react-helmet"; // <--- import Helmet
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div>
      <Helmet>
        <title>Kym Carabeo | Full Stack Developer & CCNA</title>
        <meta name="description" content="Portfolio of Kym Carabeo – Full Stack Developer specializing in MERN stack and networking skills. Projects, skills, and professional experience." />
        <meta name="keywords" content="Kym Carabeo, Full Stack Developer, MERN, CCNA, ReactJS, NodeJS, Web Portfolio" />
        <meta name="author" content="Kym Carabeo" />

        {/* Open Graph */}
        <meta property="og:title" content="Kym Carabeo | Full Stack Developer" />
        <meta property="og:description" content="Portfolio of Kym Carabeo – showcasing web apps, networking skills, and projects." />
        <meta property="og:image" content="%PUBLIC_URL%/social-preview.png" />
        <meta property="og:url" content="https://your-portfolio-site.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kym Carabeo | Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio of Kym Carabeo – showcasing web apps, networking skills, and projects." />
        <meta name="twitter:image" content="%PUBLIC_URL%/social-preview.png" />
      </Helmet>

      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
