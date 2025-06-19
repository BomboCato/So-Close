import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToFeatures = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('features');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'features' } });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">🌱 So-Close</Link>
        <ul className="nav-links">
          <li>
            <button
              onClick={handleGoToFeatures}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              Fonctionnalités
            </button>
          </li>
          <li><Link to="/mes-jardins">Mes Jardins</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
