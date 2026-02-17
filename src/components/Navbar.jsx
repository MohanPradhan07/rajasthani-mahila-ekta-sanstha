import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} className="ngo-logo" alt="NGO Logo" />
        <h2 className="logo-text">Rajasthani Mahila Ekta Sanstha</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
