import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function MesJardins() {
  const [garden, setGarden] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('so-close:created-garden');
    if (stored) {
      setGarden(JSON.parse(stored));
    }
  }, []);

  const deleteGarden = () => {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce jardin ?');
    if (confirmDelete) {
      localStorage.removeItem('so-close:created-garden');
      navigate('/');
    }
  };

  if (!garden) {
    return (
      <>
        <NavBar />
        <section style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Aucun jardin trouvé 🌱</h2>
          <p>Retournez sur la page d'accueil pour en créer un.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <section style={{ padding: '4rem' }}>
        <div
          className="garden-card"
          style={{
            background: document.body.classList.contains('dark') ? '#2a2a2a' : '#ffffff',
            color: document.body.classList.contains('dark') ? '#f0f0f0' : '#000',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ color: '#2d5a27', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🌿 Mon Jardin
          </h2>
          <p><strong>Nom :</strong> {garden.name}</p>
          <p><strong>Localisation :</strong> {garden.location}</p>
          <p><strong>Surface :</strong> {garden.size} m²</p>
          <p><strong>Membres :</strong> {garden.members.join(', ')}</p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <button
              className="btn"
              style={{
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                color: 'white',
                padding: '0.8rem 2rem',
                fontSize: '1rem',
                borderRadius: '30px',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/creer-jardin')}
            >
              ✏️ Modifier
            </button>

            <button
              className="btn"
              style={{
                background: '#f1f1f1',
                color: '#444',
                padding: '0.8rem 1.5rem',
                fontSize: '1rem',
                borderRadius: '30px',
                border: '1px solid #ddd',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
              onClick={deleteGarden}
            >
              🗑️ Supprimer
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
