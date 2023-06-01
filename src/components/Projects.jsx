import booki from "../assets/booki.png";
import sophie from "../assets/sophie.png";
import nina from "../assets/nina.jpg";
import kasa from "../assets/kasa.png";
import grimoire from "../assets/grimoire.png";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projets</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card__side card__side--front">
            <img src={grimoire} alt="Mon Vieux Grimoire website" />
          </div>
          <div className="card__side card__side--back">
            <h3>Mon Vieux Grimoire</h3>
            <p className="subtitle">
              Développement du <strong>back-end</strong> d'un site de notation
              de livres avec <strong>Node.js, Express et MongoDB</strong>
            </p>
            <div className="card__details">
              <ul>
                <li>Implémentation d'un modèle logique de données</li>
                <li>Stockage des données de manière sécurisée</li>
                <li>Mise en œuvre des opérations CRUD de manière sécurisée</li>
              </ul>
            </div>
            <a
              href="https://github.com/Anthony041/gri-moire/tree/master/back"
              className="btn btn--white"
              target="_blank"
              rel="noreferrer"
            >
              Voir le code
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card__side card__side--front">
            <img src={kasa} alt="Kasa website" />
          </div>
          <div className="card__side card__side--back">
            <h3>Kasa</h3>
            <p className="subtitle">
              Création du <strong>front-end</strong> d'une application web de
              location immobilière avec <strong>React</strong>
            </p>
            <div className="card__details">
              <ul>
                <li>Initialisation d'une application avec Create React App</li>
                <li>
                  Configuration de la navigation entre les pages de
                  l'application avec React Router
                </li>
                <li>
                  Développement des éléments de l'interface d'un site web grâce
                  à des composants React
                </li>
              </ul>
            </div>
            <a
              href="https://anthony041.github.io/ka-sa/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Voir le site
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card__side card__side--front">
            <img src={nina} alt="Nina Carducci website" />
          </div>
          <div className="card__side card__side--back">
            <h3>Nina Carducci</h3>
            <p className="subtitle">
              Débogage et optimisation d'un site de photographe
            </p>
            <div className="card__details">
              <ul>
                <li>Optimisation des performances d’un site web</li>
                <li>Débogage d'un site web grâce aux Chrome DevTools</li>
                <li>Rédaction d'un cahier de recette pour tester un site</li>
              </ul>
            </div>
            <a
              href="https://anthony041.github.io/car-ducci/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Voir le site
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card__side card__side--front">
            <img src={sophie} alt="Sophie Bluel website" />
          </div>
          <div className="card__side card__side--back">
            <h3>Sophie Bluel</h3>
            <p className="subtitle">
              Création d'une page web dynamique avec{" "}
              <strong>Vanilla JavaScript</strong>
            </p>
            <div className="card__details">
              <ul>
                <li>
                  Récupération des données utilisateurs via des formulaires
                </li>
                <li>Manipulation des éléments du DOM</li>
                <li>Gestion des événements utilisateurs</li>
              </ul>
            </div>
            <a
              href="https://github.com/Anthony041/blu-el/tree/master/FrontEnd"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Voir le code
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card__side card__side--front">
            <img src={booki} alt="Booki website" />
          </div>
          <div className="card__side card__side--back">
            <h3>Booki</h3>
            <p className="subtitle">
              Création de la page d'accueil d'une agence de voyage avec{" "}
              <strong>HTML</strong> et <strong>CSS</strong>
            </p>
            <div className="card__details">
              <ul>
                <li>Installation de l'environnement de développement</li>
                <li>Intégration du contenu conformément à la maquette</li>
                <li>Implémentation de l'interface responsive</li>
                <li>Versionnage du projet avec Git et Github</li>
              </ul>
            </div>
            <a
              href="https://anthony041.github.io/boo-ki/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Voir le site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
