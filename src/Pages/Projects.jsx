import "./Projects.css";
import { FaGithub, FaBrain, FaMicrochip, FaCalendarAlt, FaTasks, FaCarCrash } from "react-icons/fa";

export default function Projects() {
  const projectList = [
    {
      title: "MoodFit",
      icon: <FaBrain />,
      description:
        "A responsive web app promoting mental wellness. Built using Next.js with Tailwind CSS for mood tracking, journaling, and daily graphs. Deployed on Vercel.",
      features: ["Mood journaling", "Daily mood graph visualization"],
      github: "https://github.com/thatgauripai/MoodFit",
      badge: "react",
    },
    {
      title: "Interactive Quiz Game",
      icon: <FaMicrochip />,
      description:
        "An Arduino-powered quiz game with LEDs, buzzer feedback, and score tracking. Used LCDs and push buttons for interaction. Programmed in C.",
      features: ["Real-time feedback", "Score tracking", "Educational use"],
      github: "https://github.com/thatgauripai/interactive-quiz-game",
      badge: "arduino",
    },
    {
      title: "Event Insider",
      icon: <FaCalendarAlt />,
      description:
        "A responsive event/movie booking website with dynamic seat selection. Built with HTML, CSS, JS. Scalable design with plans for payment and login.",
      features: ["Event scheduling", "Interactive UI", "Future integrations"],
      github: "https://github.com/thatgauripai/Event-Insider",
      badge: "htmlcss",
    },
    {
      title: "Task Management with FreeRTOS",
      icon: <FaTasks />,
      description:
        "Demonstrates task scheduling, inter-task communication, and synchronization using FreeRTOS on a microcontroller. Includes blinking LEDs for tasks, semaphores for shared resources, and message queues for data exchange.",
      features: ["RTOS task scheduling", "Semaphores and message queues", "Embedded systems programming"],
      github: "https://github.com/thatgauripai/Task-Management-FreeRTOS",
      badge: "freertos",
    },
    {
      title: "Emergency Vehicle Routing",
      icon: <FaCarCrash />,
      description:
        "Developed a simulation model to optimize emergency vehicle routing using shortest path algorithms. The system dynamically reroutes traffic to ensure minimum delay for ambulances and fire trucks in urban scenarios.",
      features: ["Shortest path algorithm", "Traffic rerouting logic", "Efficient response simulation"],
      github: "https://github.com/thatgauripai/Emergency-Vehicle-Rooting",
      badge: "dsa",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="page-title" data-aos="fade-up">My Projects</h1>
      {projectList.map((project, index) => (
        <div
          className="project-card"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <div className="project-header">
            <span className="project-icon">{project.icon}</span>
            <h2>{project.title}</h2>
          </div>
          <span className={`badge ${project.badge}`}>{project.badge.toUpperCase()}</span>
          <p>{project.description}</p>
          <ul>
            {project.features.map((feature, idx) => (
              <li key={idx}>• {feature}</li>
            ))}
          </ul>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}
