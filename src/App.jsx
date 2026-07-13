import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
// import Design from './components/Design' // dormant — re-add below (and in Nav.jsx links) when ready
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'
import PixelPet from './components/PixelPet'

function App() {
  return (
    <>
      <CursorTrail />
      <PixelPet />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Design /> */}
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
