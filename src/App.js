// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

import Main from "./Pages/Main";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills"; // ✅ Skills added
import Contact from "./Pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} /> {/* ✅ Route for Skills */}
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
