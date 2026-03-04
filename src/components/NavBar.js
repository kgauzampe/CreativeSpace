import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img 
          src="/img/logo.png" 
          alt="Creative Logo" 
          className="navbar__logo-img"
        />
      </div>

      <ul className="navbar__links">
       <li>
        <a href="#about">About</a>
      </li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
