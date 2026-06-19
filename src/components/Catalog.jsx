import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { cats } from '../data.js'
import { fadeUp, stagger, chip, viewport } from '../motion.js'

export default function Catalog() {
  const [activeCat, setActiveCat] = useState(0)
  const active = cats[activeCat]

  return (
    <section className="catalog" data-screen-label="Filmkatalógus">
      <div className="catalog__inner">
        <m.div
          className="catalog__head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <h2>Filmkatalógus</h2>
          <p>Több mint tízezer film a kínálatban — íme néhány kedvenc</p>
        </m.div>

        <div className="catalog__tabs">
          {cats.map((c, i) => (
            <m.button
              key={c.label}
              type="button"
              className={`cat-tab${i === activeCat ? ' cat-tab--active' : ''}`}
              onClick={() => setActiveCat(i)}
              aria-pressed={i === activeCat}
              whileTap={{ scale: 0.94 }}
            >
              {c.label}
            </m.button>
          ))}
        </div>

        <div className="catalog__gallery">
          <AnimatePresence mode="wait" initial={false}>
            <m.img
              key={activeCat}
              src={active.img}
              alt={`${active.label} – filmposzterek`}
              width={1071}
              height={1182}
              decoding="async"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </AnimatePresence>
        </div>

        <m.div
          className="catalog__films"
          key={activeCat}
          variants={stagger(0.03)}
          initial="hidden"
          animate="show"
        >
          {active.films.map((f) => (
            <m.span key={f} className="film-chip" variants={chip}>
              {f}
            </m.span>
          ))}
        </m.div>

        <p className="catalog__note">
          A teljes filmkínálatot a mellékelt dokumentumban találja.
        </p>
      </div>
    </section>
  )
}
