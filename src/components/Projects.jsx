import Collapse from "../components/Collapse";
import booki from "../assets/booki.png";
import sophie from "../assets/sophie.png";
import menu from "../assets/menu.jpg";
import nina from "../assets/nina.jpg";
import kasa from "../assets/kasa.png";
import grimoire from "../assets/grimoire.png";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projets</h2>
      <div className="cards-container">
        {/* Mon Vieux Grimoire */}
        <div className="card">
          <div className="card__side card__side--front">
            <img src={grimoire} alt="Mon Vieux Grimoire website" />
          </div>
          <div className="card__side card__side--back">
            <h3 className="titleProject">Mon Vieux Grimoire</h3>
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
            <div className="buttonLocation">
              <a
                href="https://github.com/Anthony041/gri-moire/tree/master/back"
                className="btn btn--white"
                target="_blank"
                rel="noreferrer"
              >
                Voir le code
              </a>
            </div>
            <Collapse
              textProblems={[
                "Exigence de green code sur le projet : utilisation de la dépendance Sharp pour redimensionner les images fournies par les utilisateurs",
                "Cryptage du mot de passe de l'utilisateur : utilisation de la dépendance Bcrypt pour hacher et comparer les mots de passe enregistrés / saisis",
              ]}
              textSkills={[
                "Créer un serveur Express",
                "Créer une API RESTful",
                "Mettre en place un système d'authentification",
                "Gérer des fichiers utilisateur",
              ]}
            />
          </div>
        </div>

        {/* Kasa */}
        <div className="card">
          <div className="card__side card__side--front">
            <img src={kasa} alt="Kasa website" />
          </div>
          <div className="card__side card__side--back">
            <h3 className="titleProject">Kasa</h3>
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
            <div className="buttonLocation">
              <a
                href="https://anthony041.github.io/ka-sa/"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Voir le site
              </a>
            </div>
            <Collapse
              textProblems={[
                "Redirection de l'utilisateur sur une page d'erreur le cas échéant : création d'une route avec le path \"*\" pour tous les chemins n'existant pas",
                "Gestion de l'image courante du carousel pour naviguer dans celui-ci : utilisation du hook useState",
              ]}
              textSkills={[
                "Connaitre un premier framework front-end : React",
                "Créer un site multi-pages",
                "Créer des élements dynamiques réutilisables : carousel, système de notation, collapse, etc.",
              ]}
            />
          </div>
        </div>

        {/* Nina Carducci */}
        <div className="card">
          <div className="card__side card__side--front">
            <img src={nina} alt="Nina Carducci website" />
          </div>
          <div className="card__side card__side--back">
            <h3 className="titleProject">Nina Carducci</h3>
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
            <div className="buttonLocation">
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
        </div>

        {/* Menu Maker */}
        <div className="card">
          <div className="card__side card__side--front">
            <img src={menu} alt="Menu Maker by Qwenta website" />
          </div>
          <div className="card__side card__side--back">
            <h3 className="titleProject">Menu Maker by Qwenta</h3>
            <p className="subtitle">
              Planification du développement d'un site de menus
            </p>
            <div className="card__details">
              <ul>
                <li>
                  Suivi du déroulement du projet grâce à un outil de gestion de
                  projet
                </li>
                <li>
                  Découpage d'une fonctionnalité en tâches pour préparer le
                  développement
                </li>
                <li>
                  Rédaction des spécifications techniques d'un projet web à
                  partir de besoins fonctionnels
                </li>
              </ul>
            </div>
            <div className="buttonLocation"></div>
          </div>
        </div>

        {/* Sophie Bluel */}
        <div className="card">
          <div className="card__side card__side--front">
            <img src={sophie} alt="Sophie Bluel website" />
          </div>
          <div className="card__side card__side--back">
            <h3 className="titleProject">Sophie Bluel</h3>
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
            <div className="buttonLocation">
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
        </div>

        {/* Booki */}
        <div className="card">
          <div className="card__side card__side--front">
            <img src={booki} alt="Booki website" />
          </div>
          <div className="card__side card__side--back">
            <h3 className="titleProject">Booki</h3>
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
            <div className="buttonLocation">
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
      </div>
    </section>
  );
}

export default Projects;
