import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function Home() {
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

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </HashRouter>
  )
}
