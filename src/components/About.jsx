import "../styles/About.css";
import react from "../assets/react.png";
import node from "../assets/node.png";
import ocr from "../assets/ocr.jpg";

function About() {
  return (
    <div id="about">
      <h2>A propos</h2>

      <p className="catch">
        Spécialisé sur l'écosystème <strong>JavaScript</strong>, je recherche
        actuellement un poste de <strong>développeur full stack</strong>.
      </p>

      <div className="skills-container">
        <div className="skills-item">
          <h3>Front-end</h3>
          <ul className="skills-details">
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
          </ul>
          <div>
            <img src={react} alt="React icon" />
          </div>
        </div>

        <div className="skills-item">
          <h3>Back-end</h3>
          <ul className="skills-details">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
          <div>
            <img src={node} alt="Node icon" />
          </div>
        </div>

        <div className="skills-item">
          <h3>Formation</h3>
          <div className="skills-details">
            <p>Développeur web</p>
            <p>6 mois</p>
            <p>6 projets</p>
            <p>OpenClassrooms</p>
          </div>
          <div>
            <img src={ocr} alt="OpenClassrooms icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
