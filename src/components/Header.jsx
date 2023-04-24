import photo from "../assets/photo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="profile">
        <img src={photo} alt="React icon" />
        <h1>Anthony Lenglet</h1>
      </div>
      <ul className="nav">
        <li>
          <a href="#about">A propos</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
