import Starfield from './Starfield.jsx'
import { eventTags } from '../data.js'

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

      <div className="clap">
        <div className="clap__box">
          <div className="clap__stripes" />
          <div className="clap__body">
            <div className="clap__eyebrow">
              <span>Következő vetítés</span>
              <span className="clap__rule" />
            </div>
            <h2 className="clap__title">Avatar: Tűz és Hamu</h2>
            <div className="clap__meta">
              <div className="meta-block">
                <span className="meta-block__label">Időpont</span>
                <span className="meta-block__value">Szeptember 15. · Szombat</span>
                <span className="meta-block__sub">20:00 óra · sötétedéskor</span>
              </div>
              <div className="meta-block">
                <span className="meta-block__label">Belépés</span>
                <span className="meta-block__free">Ingyenes!</span>
              </div>
            </div>
            <div className="clap__tags">
              {eventTags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
