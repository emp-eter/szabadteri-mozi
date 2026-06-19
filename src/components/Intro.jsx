import { photos } from '../data.js'

export default function Intro() {
  return (
    <section className="intro" data-screen-label="Bemutatkozás">
      <div className="intro__inner">
        <span className="eyebrow eyebrow--gold">Egy teljesen új program</span>
        <p className="intro__pitch">
          Egy egész estés eseményt kínálunk Önöknek. Egy{' '}
          <span className="hl-cyan">szuper filmet</span>, amit a katalógusból
          választhatnak ki, felejthetetlen{' '}
          <span className="hl-red">kertmozi élményt</span> a csillagok alatt, egyedi{' '}
          <span className="hl-gold">dekorációs elemeket</span> és minden ehhez
          szükséges <span className="hl-red">technikai eszközt</span>.
        </p>
        <p className="intro__closer">
          Önnek csak fogadni kell a vendégeket — a többi a mi dolgunk.
        </p>
      </div>

      <div className="gallery">
        {photos.map((p) => (
          <div
            key={p.cap}
            className="polaroid"
            style={{ transform: `rotate(${p.rot}deg)` }}
          >
            <img src={p.src} alt={p.cap} />
            <div className="polaroid__cap">{p.cap}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
