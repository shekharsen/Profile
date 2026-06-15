import experienceData from "../data/experience"

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-container">
        {experienceData.map((person, index) => (
          <div key={index} className="person-column">
            <h2 className="person-name">{person.name}</h2>

            <div className="timeline">
              {person.experiences.map((exp, i) => (
                <div key={i} className="experience-card">
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                  {exp.location && (
                    <p className="location">{exp.location}</p>
                  )}
                  <span className="duration">{exp.duration}</span>

                  <ul>
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience