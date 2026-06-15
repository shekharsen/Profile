import { useEffect, useState } from "react"
import profile1 from "../assets/Shekhar.jpg"
import resume2 from "../assets/Shekhar_Sen_CV.pdf"
import Typewriter from "./Typewriter"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import useCursorShake from "../hooks/useCursorShake"

const About = () => {
  const shakeRef = useCursorShake(25)

  const [activeResume, setActiveResume] = useState<string | null>(null)

  const openResume = (resume: string) => {
    setActiveResume(resume)
  }

  const closeResume = () => {
    setActiveResume(null)
  }

  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
  
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setShowScroll(false)
        } else {
          setShowScroll(true)
        }
      }
  
      window.addEventListener("scroll", handleScroll)
  
      return () => window.removeEventListener("scroll", handleScroll)
  
    }, [])

  return (
    <section id="about" className="about">

      <div ref={shakeRef} className="about-container about-card">

        {/* Image Section */}
        <div className="about-image">
            <img src={profile1} alt="Shekhar" />
            <span>Shekhar</span>
            <button onClick={() => openResume(resume2)}>View Resume</button>
          </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <Typewriter text="Mr. Shekhar Sen - Full Stack Developer" />
          <p>
            Results-driven Software Engineer with 3+ years of experience in developing AI-powered applications, automation 
solutions, and scalable web interfaces using Python, SQL, React.js, and REST APIs. Skilled in building customer-centric 
solutions, optimizing system performance, and troubleshooting complex technical issues. Strong analytical and 
problem-solving abilities with a focus on delivering reliable, production-ready software solutions.
          </p>

          <div className="social-icons">

        <a target="_blank" rel="noopener noreferrer" href="https://github.com/shekharsen">
          <FaGithub />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shekhar-sen-8530221a2/">
          <FaLinkedin />
        </a>

      </div>

        </div>

      </div>

      {showScroll && (
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll</span>
        </div>
      )}

      {/* Modal */}
      {activeResume && (
        <div className="resume-modal">
          <div className="resume-content">

            {/* Top Bar */}
            <div className="resume-header">
              <button className="close-btn" onClick={closeResume}>
                ✕
                <span className="close-tooltip">Close</span>
              </button>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={activeResume}
              title="Resume"
              className="resume-frame"
            />
          </div>
        </div>
      )}

    </section>
  )
}

export default About