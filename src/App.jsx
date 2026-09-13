import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import HowIWork from './components/HowIWork'
import CaseStudies from './components/CaseStudies'
import CaseStudyPage from './components/CaseStudyPage'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorTrail from './components/CursorTrail'
import PixelPet from './components/PixelPet'
import { Analytics } from "@vercel/analytics/react";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <HowIWork />
      <CaseStudies />
      <Experience />
      <Skills />
      <Contact />
    </>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-cream"
      >
        Skip to content
      </a>
      <CursorTrail />
      <PixelPet />
      <Nav />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </MotionConfig>

  )
}

export default App
