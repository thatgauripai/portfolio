// Home.jsx
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    const roles = ["Aspiring Full-Stack Engineer", "UI/UX Enthusiast"];
    let i = 0, char = 0, isDeleting = false;
    const speed = 100, hold = 2000;
    const el = document.getElementById("role-text");

    function typeEffect() {
      if (!el) return;
      let currentRole = roles[i % roles.length];
      let displayText = currentRole.substring(0, char);
      el.textContent = displayText;

      if (!isDeleting && char < currentRole.length) {
        char++;
        setTimeout(typeEffect, speed);
      } else if (isDeleting && char > 0) {
        char--;
        setTimeout(typeEffect, speed / 2);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i++;
        setTimeout(typeEffect, hold);
      }
    }

    typeEffect();
  }, []);

  return (
    <div className="home" id="home">
      <div className="hero-section">
        <div className="hero-text">
          <p className="welcome">WELCOME TO MY PORTFOLIO ✨</p>
          <h1 className="main-heading">Hi, I'm <span className="highlight">Gauri Nandana S Pai</span></h1>
          <h2 className="role">
            <span className="typing-text" id="role-text"></span>
          </h2>
          <p className="description">
            Passionate about building responsive and visually appealing web applications. I create intuitive digital experiences and care deeply about frontend polish and UX clarity.
          </p>
          <div className="cta-buttons">
            <a href="/resume.pdf" className="btn primary">Download Resume</a>
            <a href="#projects" className="btn secondary">View Projects</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/thatgauripai" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gauri-nandana-s-pai-3164b7306/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:gaurinandanapai@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/potfolio_pic.png" alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
}
