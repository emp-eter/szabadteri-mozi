import Starfield from './Starfield.jsx'

export default function Contact() {
  return (
    <section id="kapcsolat" className="contact" data-screen-label="Kapcsolat">
      <Starfield count={50} seed={13} />

      <div className="contact__inner">
        <p className="contact__title">Keressetek bizalommal!</p>
        <p className="contact__lead">
          További kérdésekkel és szabad dátumokkal állunk rendelkezésre.
        </p>

        <div className="contact__card">
          <span className="contact__card-label">Kapcsolattartó</span>
          <span className="contact__name">Víg-Kovács Ivett</span>
          <a href="tel:+36304636324" className="contact__phone">
            +36 30 463 6324
          </a>
        </div>

        <div className="contact__links">
          <a href="https://www.cinemacenter.hu">www.cinemacenter.hu</a>
          <a href="https://www.facebook.com/cinemacenter.hu">
            facebook.com/cinemacenter.hu
          </a>
        </div>

        <div className="logo">
          <span className="logo__cinema">CINEMA</span>
          <span className="logo__center">CENTER</span>
          <span className="logo__copy">© 2026 Cinema Center · Szabadtéri Mozi</span>
        </div>
      </div>
    </section>
  )
}
