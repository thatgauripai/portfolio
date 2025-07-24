// Pages/Main.jsx
import Navbar from "../components/Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import CoursesAchievements from "./CoursesAchievements";
import Contact from "./Contact";

import "./Main.css";

export default function Main() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <section id="home"><Home /></section>
        <section id="about"><AboutMe /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section> {/* ✅ Correct usage */}
        <section id="courses"><CoursesAchievements /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}
