export default function Header() {
  return (
    <header className="header">
      <div className="hero-content">
        <h1 className="hero-title">So-Close</h1>
        <p className="hero-subtitle">
          L'application collaborative pour cultiver Paris ensemble.<br />
          Créez, gérez et partagez vos jardins urbains dans la capitale comestible de 2035.
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-primary">Créer mon jardin</a>
          <a href="#" className="btn btn-secondary">Rejoindre un collectif</a>
        </div>
      </div>
    </header>
  );
}
