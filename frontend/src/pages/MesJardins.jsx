import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function MesJardins() {
  const [gardens, setGardens] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/gardens')
      .then(res => res.json())
      .then(data => setGardens(data))
      .catch(err => console.error(`Error fetching gardens`, err));
  }, []);

  const deleteGarden = (gardenId) => {
    const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce jardin ?');
    if (confirmDelete) {
      fetch(`http://localhost:3000/api/gardens/${gardenId}`, {method: 'DELETE'})
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to delete garden with id: ${gardenId}`);

          setGardens(gardens.filter(garden => garden.id !== gardenId));
        })
        .catch(err => console.error(`Error deleting garden with id: ${gardenId}`, err));
    }
  };

  if (!gardens) {
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
        {gardens.map((garden) => (
          <div className="garden-card">
            <h2 style={{ color: '#2d5a27', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🌿 Mon Jardin
            </h2>
            <p><strong>Nom :</strong> {garden.name}</p>
            <p><strong>Localisation :</strong> {garden.location}</p>
            <p><strong>Surface :</strong> {garden.size} m²</p>
            <p><strong>Membres :</strong> {garden.members.join(', ')}</p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '2rem',
              flexWrap: 'wrap'
            }}>
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
                onClick={() => deleteGarden(garden.id)}
              >
                🗑️ Supprimer
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
