import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
