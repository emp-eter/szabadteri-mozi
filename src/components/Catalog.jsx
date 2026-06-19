import { useState } from 'react'
import { cats } from '../data.js'

export default function Catalog() {
  const [activeCat, setActiveCat] = useState(0)

  return (
    <section className="catalog" data-screen-label="Filmkatalógus">
      <div className="catalog__inner">
        <div className="catalog__head">
          <h2>Filmkatalógus</h2>
          <p>Több mint tízezer film a kínálatban — íme néhány kedvenc</p>
        </div>

        <div className="catalog__tabs">
          {cats.map((c, i) => (
            <button
              key={c.label}
              type="button"
              className={`cat-tab${i === activeCat ? ' cat-tab--active' : ''}`}
              onClick={() => setActiveCat(i)}
              aria-pressed={i === activeCat}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="catalog__films">
          {cats[activeCat].films.map((f) => (
            <span key={f} className="film-chip">
              {f}
            </span>
          ))}
        </div>

        <p className="catalog__note">
          A teljes filmkínálatot a mellékelt dokumentumban találja.
        </p>
      </div>
    </section>
  )
}
