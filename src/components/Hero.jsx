import { m, useReducedMotion } from 'framer-motion'
import Starfield from './Starfield.jsx'
import { featured } from '../data.js'
import { fadeUp, stagger, dropIn, viewport } from '../motion.js'

// Title settles to its resting -2.5deg tilt
const heroTitle = {
  hidden: { opacity: 0, scale: 0.85, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: -2.5,
    transition: { type: 'spring', stiffness: 240, damping: 16 },
  },
}

export default function Hero() {
  const reduce = useReducedMotion()
  const lead = reduce ? false : 'hidden'

  return (
    <section className="hero" data-screen-label="Hero">
      <Starfield count={70} seed={7} shooting={2} />
      <div className="hero__fade" />

      <m.div
        className="hero__inner"
        variants={stagger(0.12)}
        initial={lead}
        animate="show"
      >
        <m.h1 className="hero__title" variants={heroTitle}>
          Szabadtéri
          <br />
          Mozi
        </m.h1>
        <m.p className="hero__subtitle" variants={fadeUp}>
          Moziélmény a csillagok alatt
        </m.p>

        <m.p className="hero__lead" variants={fadeUp}>
          Elvisszük Önökhöz is az igazi kertmozi élményt — komplex program minden
          technikai feltétellel, egyedi dekorációval és izgalmas kvíz játékkal.
        </m.p>

        <m.div className="hero__cta" variants={fadeUp}>
          <m.a
            href="#csomagok"
            className="btn btn--primary"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Csomagok megtekintése →
          </m.a>
          <m.a
            href="#kapcsolat"
            className="btn btn--secondary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Ajánlatkérés
          </m.a>
        </m.div>
      </m.div>

      {/* Featured screening — hand-drawn chalkboard clapperboard */}
      <m.div
        className="clap"
        variants={dropIn}
        initial={lead}
        whileInView="show"
        viewport={viewport}
      >
        {/* hand-drawn roughen filter (subtle wobble on the whole board) */}
        <svg width="0" height="0" className="clap__filter" aria-hidden="true">
          <filter id="clapRough" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.014"
              numOctaves="2"
              seed="4"
              result="n"
            />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
          </filter>
        </svg>

        <m.div
          className="clap__board"
          style={{ rotate: -3 }}
          animate={reduce ? undefined : { y: [0, -7, 0] }}
          transition={
            reduce ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <div className="clap__stripes" />

          <div className="clap__body">
            <h2 className="clap__title">
              {featured.title[0]}
              <br />
              {featured.title[1]}
            </h2>

            <div className="clap__line clap__line--first" />

            <div className="clap__meta">
              <div className="clap__when">
                <span className="clap__date">{featured.date}</span>
                <span className="clap__day">
                  {featured.day} <span className="clap__time">{featured.time}</span>
                </span>
              </div>
              <div className="clap__vsep" />
              <div className="clap__free">{featured.free}</div>
            </div>

            <div className="clap__line" />
            <div className="clap__location">{featured.location}</div>
            <div className="clap__line" />
            <div className="clap__tags">{featured.tags}</div>
          </div>
        </m.div>
      </m.div>
    </section>
  )
}
