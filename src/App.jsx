import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import WhatsIncluded from './components/WhatsIncluded.jsx'
import Packages from './components/Packages.jsx'
import Catalog from './components/Catalog.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="page">
      <Hero />
      <Intro />
      <WhatsIncluded />
      <Packages />
      <Catalog />
      <Contact />
    </div>
  )
}
