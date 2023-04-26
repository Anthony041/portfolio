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
            <div className="card__details">
              <ul>
                <li>
                  Développement du <strong>back-end</strong> d'un site de
                  notation de livres avec{" "}
                  <strong>Node.js, Express et MongoDB</strong>
                </li>
                <li>Implémentation d'un modèle logique de données</li>
                <li>Stockage des données de manière sécurisée</li>
                <li>Mise en œuvre des opérations CRUD de manière sécurisée</li>
              </ul>
            </div>
            <a href="http://localhost:3000/" className="btn btn--white">
              Voir le site
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card__side card__side--front">
            <img src={kasa} alt="Kasa website" />
          </div>
          <div className="card__side card__side--back">
            <h3>Kasa</h3>
            <div className="card__details">
              <ul>
                <li>
                  Création du <strong>front-end</strong> d'une application web
                  de location immobilière avec <strong>React</strong>
                </li>
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
            <a href="http://localhost:3000/" className="btn">
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
            <div className="card__details">
              <ul>
                <li>Débogage et optimisation d'un site de photographe</li>
                <li>Optimisation des performances d’un site web</li>
                <li>Débogage d'un site web grâce aux Chrome DevTools</li>
                <li>Rédaction d'un cahier de recette pour tester un site</li>
              </ul>
            </div>
            <a href="http://localhost:3000/" className="btn">
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
            <div className="card__details">
              <ul>
                <li>
                  Création d'une page web dynamique avec{" "}
                  <strong>Vanilla JavaScript</strong>
                </li>
                <li>
                  Récupération des données utilisateurs dans le JavaScript via
                  des formulaires
                </li>
                <li>Manipulation des éléments du DOM</li>
                <li>Gestion des événements utilisateurs</li>
              </ul>
            </div>
            <a href="http://localhost:3000/" className="btn">
              Voir le site
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card__side card__side--front">
            <img src={booki} alt="Booki website" />
          </div>
          <div className="card__side card__side--back">
            <h3>Booki</h3>
            <div className="card__details">
              <ul>
                <li>
                  Création de la page d'accueil d'une agence de voyage avec{" "}
                  <strong>HTML</strong> et <strong>CSS</strong>
                </li>
                <li>
                  Installation de l'environnement de développement front-end
                </li>
                <li>Intégration du contenu conformément à la maquette</li>
                <li>Implémentation de l'interface responsive</li>
                <li>Versionnage du projet avec Git et Github</li>
              </ul>
            </div>
            <a href="http://localhost:3000/" className="btn">
              Voir le site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
