import { useState, useEffect, useCallback } from 'react'
import { m, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cats } from '../data.js'
import { fadeUp, stagger, chip, viewport } from '../motion.js'

const AUTOPLAY_MS = 5000
const N = cats.length

// Horizontal slide variants (direction-aware)
const slide = {
  enter: (dir) => ({ x: dir >= 0 ? '100%' : '-100%', opacity: 0.3 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir >= 0 ? '-100%' : '100%', opacity: 0.3 }),
}

export default function Catalog() {
  const reduce = useReducedMotion()
  const [[index, dir], setSlide] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const active = cats[index]

  const goTo = useCallback((target, d) => setSlide([(target + N) % N, d]), [])
  const next = useCallback(() => setSlide(([i]) => [(i + 1) % N, 1]), [])
  const prev = useCallback(() => setSlide(([i]) => [(i - 1 + N) % N, -1]), [])

  // Auto-advance (paused on hover; disabled for reduced motion)
  useEffect(() => {
    if (reduce || paused) return undefined
    const t = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [index, paused, reduce, next])

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
              className={`cat-tab${i === index ? ' cat-tab--active' : ''}`}
              onClick={() => goTo(i, i >= index ? 1 : -1)}
              aria-pressed={i === index}
              whileTap={{ scale: 0.94 }}
            >
              {c.label}
            </m.button>
          ))}
        </div>

        <div
          className="catalog__stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="catalog__gallery">
            <AnimatePresence custom={dir} initial={false}>
              <m.img
                key={index}
                custom={dir}
                src={active.img}
                alt={`${active.label} – filmposzterek`}
                width={1071}
                height={1182}
                decoding="async"
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 32 },
                  opacity: { duration: 0.25 },
                }}
              />
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="catalog__arrow catalog__arrow--prev"
            onClick={prev}
            aria-label="Előző kategória"
          >
            ‹
          </button>
          <button
            type="button"
            className="catalog__arrow catalog__arrow--next"
            onClick={next}
            aria-label="Következő kategória"
          >
            ›
          </button>
        </div>

        <m.div
          className="catalog__films"
          key={index}
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
      </div>
    </section>
  )
}
