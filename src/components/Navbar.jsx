// components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/courses-achievements">Courses & Achievements</Link>
      <Link to="/personal-history">Personal History</Link>
    </nav>
  );
}
