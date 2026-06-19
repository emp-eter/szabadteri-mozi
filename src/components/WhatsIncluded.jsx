import { tech, decor } from '../data.js'

export default function WhatsIncluded() {
  return (
    <section className="included" data-screen-label="Mit tartalmaz">
      <div className="included__inner" style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div className="section-head">
          <h2>Mit tartalmaz?</h2>
          <p>Minden, ami egy teljes moziélményhez kell</p>
        </div>

        <div className="included__grid">
          <div className="card card--tech">
            <h3 className="card__head card__head--gold">Technikai paraméterek</h3>
            <div className="tech-list">
              {tech.map(([title, desc]) => (
                <div key={title} className="tech-item">
                  <span className="tech-item__icon">◆</span>
                  <div>
                    <div className="tech-item__title">{title}</div>
                    <div className="tech-item__desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card card--decor">
            <h3 className="card__head card__head--red">Dekoráció</h3>
            <div className="decor-list">
              {decor.map((d) => (
                <div key={d} className="decor-item">
                  <span className="decor-item__icon">★</span>
                  <span className="decor-item__text">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
