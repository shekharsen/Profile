import { skills } from "../data/skills"
import useCursorShake from "../hooks/useCursorShake"

const Skills = () => {

  const shakeRef = useCursorShake(12)

  return (
    <section id="skills" className="skills">

      <h2 className="section-title">Skills</h2>

      <div ref={shakeRef} className="skills-grid">

        {skills.map((skill, index) => {

          const Icon = skill.icon

          return (
            <div key={index} className="skill-card">

              <div className="skill-icon-wrapper">
                <Icon className="skill-icon" />
              </div>

              <p className="skill-name">{skill.name}</p>

            </div>
          )
        })}

      </div>

    </section>
  )
}

export default Skills