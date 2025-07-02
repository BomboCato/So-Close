import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    setIsDark(document.body.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

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

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <nav className={`nav ${isDark ? 'dark-nav' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">🌱 So-Close</Link>
        <ul className="nav-links">
          <li>
            <button
              onClick={handleGoToFeatures}
              className="nav-link-button"
            >
              Fonctionnalités
            </button>
          </li>

          {isAuthenticated && (
            <li>
              <Link to="/mes-jardins" className="nav-link-button">
                Mes Jardins
              </Link>
            </li>
          )}

          <li><a href="#contact" className="nav-link-button">Contact</a></li>

          <li>
            <button onClick={toggleDarkMode} className="nav-link-button">
              {isDark ? '☀️ Mode clair' : '🌙 Mode sombre'}
            </button>
          </li>

          {!isAuthenticated ? (
            <li>
              <button
                className="nav-link-button"
                onClick={() => loginWithRedirect()}
              >
                Connexion
              </button>
            </li>
          ) : (
            <li>
              <button
                className="nav-link-button"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Déconnexion
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}
