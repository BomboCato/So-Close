import { useState } from 'react'
import projectLogo from './assets/so-close_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={projectLogo} className="logo soclose" alt="React logo" />
      </div>
      <h1>So-Close</h1>
      <p>Marie Shamoun <br></br>Briac Guellec</p>
      <h2>
        Notre vision
      </h2>
      <p>
        So-Close est un outil numérique d’aide à la création, la gestion et l’évolution de jardins potagers et de forêts comestibles urbaines.
        En permettant entre autres la création de jardins collectifs, la planification des plantations, la gestion collective des ressources, le partage de fiches-conseils et rex, So-Close à pour amibition d'être la plus intuitive possible et de favoriser un maximum le partage, les fiches conseils et les retours d'expériences entre utilisateurs
      </p>
      <p className="authors">
         Une application made by Marie Shamoun & Briac Guellec
      </p>
    </>
  )
}

export default App