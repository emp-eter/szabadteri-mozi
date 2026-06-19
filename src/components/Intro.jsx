import { m } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function Intro() {
  return (
    <section className="intro" data-screen-label="Bemutatkozás">
      <m.div
        className="intro__inner"
        variants={stagger(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <m.span className="eyebrow eyebrow--gold" variants={fadeUp}>
          Egy teljesen új program
        </m.span>
        <m.p className="intro__pitch" variants={fadeUp}>
          Egy egész estés eseményt kínálunk Önöknek. Egy{' '}
          <span className="hl-cyan">szuper filmet</span>, amit a katalógusból
          választhatnak ki, felejthetetlen{' '}
          <span className="hl-red">kertmozi élményt</span> a csillagok alatt, egyedi{' '}
          <span className="hl-gold">dekorációs elemeket</span> és minden ehhez
          szükséges <span className="hl-red">technikai eszközt</span>.
        </m.p>
        <m.p className="intro__closer" variants={fadeUp}>
          Önnek csak fogadni kell a vendégeket — a többi a mi dolgunk.
        </m.p>
      </m.div>
    </section>
  )
}
