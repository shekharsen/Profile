import educationData from "../data/education"

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-container">
        {educationData.map((person, index) => (
          <div key={index} className="person-column">
            <h2 className="person-name">{person.name}</h2>

            <div className="timeline">
              {person.education.map((edu, i) => (
                <div key={i} className="education-card">
                  <h3>{edu.degree}</h3>
                  <p className="institute">{edu.institute}</p>
                  {edu.location && <p className="location">{edu.location}</p>}
                  <span className="year">{edu.year}</span>
                  {edu.extra && <p className="extra">{edu.extra}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education