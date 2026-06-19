import { useState } from 'react'
import { venues } from '../data.js'

export default function References() {
  // Track venue images that fail to load (e.g. before the real photos are added),
  // so we can show a tasteful placeholder instead of a broken-image icon.
  const [failed, setFailed] = useState({})

  return (
    <section className="references" data-screen-label="Referenciák">
      <div className="references__head">
        <span className="eyebrow eyebrow--cyan">Hol jártunk már</span>
        <p className="references__lead">
          Egy fellépő áráért komplex programot (technika, tartalom, dekoráció)
          kínálunk, mely minden helyszínen jól alkalmazható. Települési napokon,
          belvárosban, strandokon, szállodákban, borászatoknál és
          rendezvényhelyszíneken, műemléki környezetben és zenei fesztiválok
          kiegészítő helyszíneként.
        </p>
      </div>

      <div className="references__grid">
        {venues.map((v) => (
          <div
            key={v.cap}
            className="polaroid"
            style={{ transform: `rotate(${v.rot}deg)` }}
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
          </div>
        ))}
      </div>
    </section>
  )
}
