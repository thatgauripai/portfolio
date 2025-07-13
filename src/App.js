// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import CoursesAchievements from "./Pages/CoursesAchievements";
import PersonalHistory from "./Pages/PersonalHistory";
import "./index.css";

// 🔥 AOS Imports
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // animation happens only once per element
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses-achievements" element={<CoursesAchievements />} />
        <Route path="/personal-history" element={<PersonalHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
