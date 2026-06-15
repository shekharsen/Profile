import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Achievements from "./components/Achievements"
// import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      {/* <Projects /> */}
      <Education />
      <Contact />
    </>
  )
}

export default App