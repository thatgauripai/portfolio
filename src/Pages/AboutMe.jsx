// Pages/AboutMe.jsx
import "./AboutMe.css";
import { FaBookOpen, FaRocket } from 'react-icons/fa';


export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-grid">
        <h2 className="about-title">About Me</h2>

        <div className="cards-container">
          <div className="card">
            <h3><FaBookOpen/>My Story & Journey</h3>
            <p>
              I have participated in MUNs and Youth Parliaments, which helped me develop strong leadership and communication skills. I have a passion for design and web development, and enjoy crafting creative digital experiences. My technical background includes a solid foundation in Data Structures and Algorithms, enhancing my problem-solving abilities.
            </p>
          </div>

          <div className="card">
            <h3><FaRocket />My Goals</h3>
            <p>
              I’m currently pursuing my Bachelor's in Computer Science and have developed strong skills in full stack development through academic and personal projects. I enjoy problem-solving, learning new tech, and working in collaborative environments. My future goals involve research and impactful software development — especially in health tech and education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
