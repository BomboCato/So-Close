import { useState } from 'react'
import projectLogo from './assets/so-close_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
    <>
      <div>
        <img src={projectLogo} className="logo soclose" alt="So-Close logo" />
      </div>
      <h1>So-Close</h1>
      <p className="authors">Marie Shamoun & Briac Guellec</p>

      <section className="intro">
        <h2>🌿 Une application pour une ville comestible</h2>
        <p>
          So-Close est un outil numérique collaboratif pour accompagner les citoyens dans la création, la gestion et le suivi
          de jardins partagés et forêts comestibles en milieu urbain.
        </p>
      </section>

      <section className="context">
        <h2>🏙️ Contexte du cours (Paris, 2035)</h2>
        <p>
          Au XVIIe siècle, les jardins maraîchers parisiens utilisaient des techniques agricoles innovantes adaptées à l’environnement urbain.
          À Montreuil, les célèbres « murs à pêches » permettaient une culture précoce et abondante.
        </p>
        <p>
          Aujourd’hui, face aux enjeux climatiques, Paris relance cette tradition avec la politique de <strong>Ville comestible</strong>,
          soutenue par une application citoyenne : So-Close.
        </p>
      </section>

      <section className="objectives">
        <h2>🎯 Objectifs de l’application</h2>
        <ul>
          <li>Créer ou rejoindre un jardin collectif</li>
          <li>Planifier les plantations selon le climat et la saison</li>
          <li>Partager les tâches et les ressources entre voisins</li>
          <li>Suivre les récoltes et la biodiversité</li>
          <li>Partager des fiches-conseils et retours d’expérience</li>
        </ul>
      </section>

      <section className="course">
        <h2>📚 Organisation pédagogique</h2>
        <p>
          Cette application est développée dans le cadre du cours SOCRA à EPITA (majeure SIGL - promo 2026).
          Chaque binôme crée sa version complète au fil des TP : réseau, sécurité, base de données, déploiement…
        </p>
      </section>
    </>
  );
}

export default App;


