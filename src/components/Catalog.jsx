import { useState, useRef, useLayoutEffect, useCallback } from 'react'
import { m, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion'
import { cats } from '../data.js'
import { fadeUp, stagger, chip, viewport } from '../motion.js'

const GAP = 18 // must match .catalog__track gap in CSS
const SET = cats.length
const SECONDS_PER_ITEM = 8 // slow, continuous drift

export default function Catalog() {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)

  const itemRef = useRef(null)
  const containerRef = useRef(null)
  const setWidthRef = useRef(0)
  const itemFullRef = useRef(0)
  const pausedRef = useRef(false)
  const jumpRef = useRef(null)
  const activeRef = useRef(0)
  const [active, setActive] = useState(0)

  // Measure one frame's width to drive the seamless wrap + tab jumps.
  useLayoutEffect(() => {
    const measure = () => {
      const el = itemRef.current
      if (!el) return
      itemFullRef.current = el.offsetWidth + GAP
      setWidthRef.current = itemFullRef.current * SET
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (itemRef.current) ro.observe(itemRef.current)
    return () => ro.disconnect()
  }, [])

  const jumpTo = useCallback(
    (i) => {
      const target = -(i * itemFullRef.current)
      if (reduce) {
        x.set(target)
        activeRef.current = i
        setActive(i)
      } else {
        jumpRef.current = target
      }
    },
    [reduce, x],
  )

  useAnimationFrame((_t, delta) => {
    const sw = setWidthRef.current
    if (!sw) return
    let nx = x.get()

    const jt = jumpRef.current
    if (jt != null) {
      // ease toward the clicked category
      nx += (jt - nx) * Math.min(1, delta / 220)
      if (Math.abs(jt - nx) < 0.6) {
        nx = jt
        jumpRef.current = null
      }
    } else if (!pausedRef.current && !reduce) {
      // continuous slow drift
      nx -= (sw / (SECONDS_PER_ITEM * SET * 1000)) * delta
    }

    // seamless wrap into (-sw, 0]
    if (nx <= -sw) nx += sw
    else if (nx > 0) nx -= sw
    x.set(nx)

    // category nearest the centre drives the tabs + chips
    const cw = containerRef.current ? containerRef.current.offsetWidth : 0
    const iw = itemFullRef.current || 1
    let centre = (-nx + cw / 2) % sw
    if (centre < 0) centre += sw
    const idx = Math.floor(centre / iw) % SET
    if (idx !== activeRef.current) {
      activeRef.current = idx
      setActive(idx)
    }
  })

  const items = [...cats, ...cats]

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
              className={`cat-tab${i === active ? ' cat-tab--active' : ''}`}
              onClick={() => jumpTo(i)}
              aria-pressed={i === active}
              whileTap={{ scale: 0.94 }}
            >
              {c.label}
            </m.button>
          ))}
        </div>

        <div
          className="catalog__reel"
          ref={containerRef}
          onMouseEnter={() => {
            pausedRef.current = true
          }}
          onMouseLeave={() => {
            pausedRef.current = false
          }}
        >
          <m.div className="catalog__track" style={{ x }}>
            {items.map((c, i) => (
              <div className="reel-frame" key={i} ref={i === 0 ? itemRef : null}>
                <img
                  src={c.img}
                  alt={`${c.label} – filmposzterek`}
                  width={1071}
                  height={1182}
                  decoding="async"
                />
              </div>
            ))}
          </m.div>
        </div>

        <m.div
          className="catalog__films"
          key={active}
          variants={stagger(0.03)}
          initial="hidden"
          animate="show"
        >
          {cats[active].films.map((f) => (
            <m.span key={f} className="film-chip" variants={chip}>
              {f}
            </m.span>
          ))}
        </m.div>
      </div>
    </section>
  )
}
