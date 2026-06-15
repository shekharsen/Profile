import { FaGithub } from "react-icons/fa6"

import projectData from "../data/project"

const Projects = () => {
  return (
    <section id="projects" className="projects">

      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        {projectData.map((project, index) => (
          <div key={index} className="project-card">

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects