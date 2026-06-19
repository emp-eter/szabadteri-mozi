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

      {/* Featured screening — chalkboard clapperboard */}
      <div className="clap">
        <div className="clap__tilt">
          {/* top clap stick (open, hinged at right) */}
          <div className="clap__stick">
            <div className="clap__stick-bar" />
            <div className="clap__hinge" />
          </div>

          {/* chalk slate board */}
          <div className="clap__board">
            <div className="clap__row">
              <span className="clap__eyebrow">{featured.eyebrow}</span>
              <span className="clap__chalk-line" />
            </div>

            <h2 className="clap__title">
              {featured.title[0]}
              <br />
              {featured.title[1]}
            </h2>

            <div className="clap__chalk-line clap__chalk-line--full" />

            <div className="clap__meta">
              <div className="clap__when">
                <span className="clap__date">{featured.date}</span>
                <span className="clap__time">{featured.time}</span>
              </div>
              <div className="clap__free">
                {featured.free[0]}
                <br />
                {featured.free[1]}
              </div>
            </div>

            <div className="clap__chalk-line clap__chalk-line--full" />

            <div className="clap__tags">{featured.tags}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
