import { useState } from 'react'
import { m } from 'framer-motion'
import { venues } from '../data.js'
import { fadeUp, stagger, polaroidIn, viewport } from '../motion.js'

export default function References() {
  // Track venue images that fail to load, to show a tasteful placeholder.
  const [failed, setFailed] = useState({})

  return (
    <section className="references" data-screen-label="Referenciák">
      <m.div
        className="references__head"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <span className="eyebrow eyebrow--cyan">Hol jártunk már</span>
        <p className="references__lead">
          Egy fellépő áráért komplex programot (technika, tartalom, dekoráció)
          kínálunk, mely minden helyszínen jól alkalmazható. Települési napokon,
          belvárosban, strandokon, szállodákban, borászatoknál és
          rendezvényhelyszíneken, műemléki környezetben és zenei fesztiválok
          kiegészítő helyszíneként.
        </p>
      </m.div>

      <m.div
        className="references__grid"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {venues.map((v) => (
          <m.div
            key={v.cap}
            className="polaroid"
            variants={polaroidIn}
            custom={v.rot}
            whileHover={{ rotate: 0, y: -6, scale: 1.03, zIndex: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            {failed[v.cap] ? (
              <div className="polaroid__placeholder">Fotó hamarosan</div>
            ) : (
              <img
                src={v.src}
                alt={v.cap}
                loading="lazy"
                decoding="async"
                onError={() => setFailed((f) => ({ ...f, [v.cap]: true }))}
              />
            )}
            <div className="polaroid__cap">{v.cap}</div>
          </m.div>
        ))}
      </m.div>
    </section>
  )
}
