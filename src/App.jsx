import { m, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import References from './components/References.jsx'
import WhatsIncluded from './components/WhatsIncluded.jsx'
import Packages from './components/Packages.jsx'
import Catalog from './components/Catalog.jsx'
import Contact from './components/Contact.jsx'
import FilmStrip from './components/FilmStrip.jsx'

export default function App() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <div className="page">
      {!reduce && <m.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />}
      <Hero />
      <Intro />
      <References />
      <FilmStrip />
      <WhatsIncluded />
      <Packages />
      <FilmStrip />
      <Catalog />
      <Contact />
    </div>
  )
}
