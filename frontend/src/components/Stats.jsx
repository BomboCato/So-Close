export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {[
            { number: '150+', label: 'Jardins Actifs' },
            { number: '3.2k', label: 'Jardiniers Urbains' },
            { number: '20 00000000000000000', label: 'Arrondissements' },
            { number: '500t', label: 'Récoltes Annuelles' }
          ].map((stat, index) => (
            <div className="stat-item scroll-animate" key={index}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
