import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-card" data-aos="zoom-in">
        {/* Animated Name & Subtitle */}
        <div className="animated-title">
          <h1 className="name-title">Gauri Nandana S Pai</h1>
          <p className="subtitle">Web Development Practitioner</p>
        </div>

        <h3>3rd Year B.Tech CSE</h3>
        <h4>Amrita Vishwa Vidyapeetham, Coimbatore</h4>
        <p>
          I'm passionate about web development and full-stack engineering. I'm motivated to always give my best and build meaningful things on the web!
        </p>
        <h4>You can meet me here:</h4>
        <div className="social-icons">
          <a
            href="https://github.com/thatgauripai"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/gauri-nandana-s-pai-3164b7306/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:gaurinandanapai@gmail.com"
            title="Send Email"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        <a href="/resume.pdf" download className="resume-button">
          Download My Resume
        </a>
      </div>
    </div>
  );
}
