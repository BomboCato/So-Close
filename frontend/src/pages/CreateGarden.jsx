import { useState } from 'react';
import './CreateGarden.css';
import { useNavigate } from 'react-router-dom';

export default function CreateGarden() {
  const [garden, setGarden] = useState({
    name: '',
    location: '',
    size: '',
    members: [''],
  });

  const navigate = useNavigate();

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (name === 'members' && index !== null) {
      const updated = [...garden.members];
      updated[index] = value;
      setGarden({ ...garden, members: updated });
    } else {
      setGarden({ ...garden, [name]: value });
    }
  };

  const addMember = () => {
    setGarden({ ...garden, members: [...garden.members, ''] });
  };

  const removeMember = (indexToRemove) => {
    const updated = garden.members.filter((_, i) => i !== indexToRemove);
    setGarden({ ...garden, members: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('so-close:created-garden', JSON.stringify(garden));
    navigate('/mes-jardins');
  };

  return (
    <div className="create-garden-wrapper">
      <form onSubmit={handleSubmit} className="create-garden-form">
        <h2>Créer un jardin</h2>

        <div className="form-group">
          <label>Nom du jardin</label>
          <input type="text" name="name" value={garden.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Localisation</label>
          <input type="text" name="location" value={garden.location} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Surface (m²)</label>
          <input type="number" name="size" value={garden.size} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Membres</label>
          {garden.members.map((member, index) => (
            <div
              key={index}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}
            >
              <input
                type="text"
                name="members"
                placeholder={`Membre ${index + 1}`}
                value={member}
                onChange={(e) => handleChange(e, index)}
                required
                style={{ flex: 1 }}
              />
              {garden.members.length > 1 && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ padding: '0.4rem 0.8rem' }}
                  onClick={() => removeMember(index)}
                >
                  ❌
                </button>
              )}
            </div>
          ))}

          <div className="button-container">
            <button type="button" className="btn btn-secondary" onClick={addMember}>
              Ajouter un membre
            </button>
          </div>
        </div>

        <div className="button-container" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button type="submit" className="btn btn-primary">Créer</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
