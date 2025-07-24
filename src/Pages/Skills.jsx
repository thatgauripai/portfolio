// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const skills = [
  {
    category: "Languages",
    icons: [
      { name: "C", img: "/icons/c.png", desc: "Low-level programming language" },
      { name: "C++", img: "/icons/cpp.png", desc: "Object-oriented extension of C" },
      { name: "Python", img: "/icons/python.png", desc: "High-level general-purpose programming language" },
      { name: "Java", img: "/icons/java.png", desc: "Platform-independent object-oriented language" },
    ],
  },
  {
    category: "Tools & Tech",
    icons: [
      { name: "Git", img: "/icons/git.png", desc: "Version control system" },
      { name: "VS Code", img: "/icons/vscode.png", desc: "Source-code editor" },
      { name: "Linux", img: "/icons/linux.png", desc: "Operating system kernel" },
      { name: "MySQL", img: "/icons/mysql.png", desc: "Relational database system" },
    ],
  },
  {
    category: "Concepts",
    icons: [
      { name: "Data Structures", img: "/icons/ds.png", desc: "Efficient data organization" },
      { name: "OOP", img: "/icons/oop.png", desc: "Object-oriented programming concepts" },
      { name: "DBMS", img: "/icons/dbms.png", desc: "Database management systems" },
      { name: "Operating Systems", img: "/icons/os.png", desc: "Core system software" },
    ],
  },
  {
    category: "Frameworks / Libraries",
    icons: [
      { name: "React", img: "/icons/react.png", desc: "JavaScript UI library" },
      { name: "Next.js", img: "/icons/nextjs.png", desc: "React framework for SSR" },
      { name: "Tailwind", img: "/icons/tailwind.png", desc: "Utility-first CSS framework" },
      { name: "Bootstrap", img: "/icons/bootstrap.png", desc: "CSS framework for responsive design" },
      { name: "JavaScript", img: "/icons/js.png", desc: "Scripting language for web development" },
      { name: "Node.js", img: "/icons/nodejs.png", desc: "JavaScript runtime environment" },
      { name: "Express.js", img: "/icons/express.png", desc: "Backend web framework for Node.js" },
      { name: "Flutter", img: "/icons/flutter.png", desc: "UI toolkit for natively compiled apps" },
      { name: "React Native", img: "/icons/reactnative.png", desc: "React for mobile apps" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-container">
        {skills.map((block, index) => (
          <div key={index} className="skill-card">
            <h2>{block.category}</h2>
            <div className="skill-icons">
              {block.icons.map((skill, idx) => (
                <div className="skill-icon" key={idx} title={skill.desc}>
                  <img src={skill.img} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
