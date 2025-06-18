export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title scroll-animate">Cultivons l'avenir ensemble</h2>
        <div className="features-grid">
          {[
            {
              icon: '🏡',
              title: 'Créer & Rejoindre',
              text: "Créez votre jardin collectif ou rejoignez une communauté existante dans votre quartier. Ensemble, nous redonnons vie aux espaces urbains parisiens."
            },
            {
              icon: '📅',
              title: 'Planification Intelligente',
              text: "Planifiez vos plantations selon le climat parisien, les saisons et la biodiversité locale. Notre IA vous guide pour optimiser vos récoltes."
            },
            {
              icon: '🤝',
              title: 'Gestion Collaborative',
              text: "Organisez les tâches, partagez les resources et coordonnez les activités de votre collectif. La force du groupe au service de votre jardin."
            },
            {
              icon: '📚',
              title: 'Partage de Savoirs',
              text: "Accédez à des fiches-conseils, partagez vos expériences et apprenez des techniques inspirées des maraîchers parisiens d'autrefois."
            },
            {
              icon: '📊',
              title: 'Suivi des Récoltes',
              text: "Suivez la santé de votre jardin, enregistrez vos récoltes et mesurez l'impact environnemental de votre contribution à la ville comestible."
            },
            {
              icon: '🌍',
              title: 'Impact Écologique',
              text: "Participez à la transformation écologique de Paris. Chaque jardin contribue à la biodiversité urbaine et à la résilience alimentaire de la capitale."
            }
          ].map((feature, index) => (
            <div className="feature-card scroll-animate" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
