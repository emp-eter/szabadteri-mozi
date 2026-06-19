import { m } from 'framer-motion'
import Starfield from './Starfield.jsx'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function Contact() {
  return (
    <section id="kapcsolat" className="contact" data-screen-label="Kapcsolat">
      <Starfield count={50} seed={13} shooting={1} />

      <m.div
        className="contact__inner"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <m.p className="contact__title" variants={fadeUp}>
          Keressetek bizalommal!
        </m.p>
        <m.p className="contact__lead" variants={fadeUp}>
          További kérdésekkel és szabad dátumokkal állunk rendelkezésre.
        </m.p>

        <m.div className="contact__card" variants={fadeUp}>
          <span className="contact__card-label">Kapcsolattartó</span>
          <span className="contact__name">Víg-Kovács Ivett</span>
          <a href="tel:+36304636324" className="contact__phone">
            +36 30 463 6324
          </a>
        </m.div>

        <m.div className="contact__links" variants={fadeUp}>
          <a href="https://www.cinemacenter.hu">www.cinemacenter.hu</a>
          <a href="https://www.facebook.com/cinemacenter.hu">
            facebook.com/cinemacenter.hu
          </a>
        </m.div>

        <m.div className="logo" variants={fadeUp}>
          <span className="logo__cinema">CINEMA</span>
          <span className="logo__center">CENTER</span>
          <span className="logo__copy">© 2026 Cinema Center · Szabadtéri Mozi</span>
        </m.div>
      </m.div>
    </section>
  )
}
