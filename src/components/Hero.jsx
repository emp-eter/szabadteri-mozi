import Starfield from './Starfield.jsx'
import { featured } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <Starfield count={70} seed={7} />
      <div className="hero__fade" />

      <div className="hero__inner">
        <div className="badge">
          <span className="badge__dot" />
          <span className="badge__text">2026 Nyarán</span>
        </div>

        <h1 className="hero__title">
          Szabadtéri
          <br />
          Mozi
        </h1>
        <p className="hero__subtitle">Moziélmény a csillagok alatt</p>

        <p className="hero__lead">
          Elvisszük Önökhöz is az igazi kertmozi élményt — komplex program minden
          technikai feltétellel, egyedi dekorációval és izgalmas kvíz játékkal.
        </p>

        <div className="hero__cta">
          <a href="#csomagok" className="btn btn--primary">
            Csomagok megtekintése →
          </a>
          <a href="#kapcsolat" className="btn btn--secondary">
            Ajánlatkérés
          </a>
        </div>
      </div>

      {/* Featured screening — hand-drawn chalkboard clapperboard */}
      <div className="clap">
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

        <div className="clap__board">
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
        </div>
      </div>
    </section>
  )
}
