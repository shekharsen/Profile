import achievementsData from "../data/achievements"

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <h2>Achievements</h2>

      <div className="achievements-container">
        {achievementsData.map((person, index) => (
          <div key={index} className="person-column">
            <h2 className="person-name">{person.name}</h2>

            {person.achievements.map((ach, i) => (
              <div key={i} className="achievement-card">
                <h3>{ach.title}</h3>
                {ach.issuer && <p className="issuer">{ach.issuer}</p>}
                {ach.description && <span>{ach.description}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements