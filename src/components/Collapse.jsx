import { useState } from "react";
import "../styles/Collapse.css";

function Collapse({ textProblems, textSkills }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <div
        className="buttonCollapse"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <p>+ d'infos</p>
      </div>

      {/* texte à afficher ou non en fonction de l'état de la collapse ouvert/fermé */}
      {isOpen ? (
        <div className="textCollapse">
          <div className="textProblems">
            <h4 className="titlesCollapse">
              Problématiques rencontrées et solutions pour les surmonter
            </h4>
            <ul>
              {textProblems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>
          <div className="textSkills">
            <h4 className="titlesCollapse">Compétences acquises</h4>
            <ul>
              {textSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Collapse;
