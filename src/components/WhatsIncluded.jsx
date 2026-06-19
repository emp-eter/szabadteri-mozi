import { m } from 'framer-motion'
import { tech, decor } from '../data.js'
import { fadeUp, stagger, slideIn, viewport } from '../motion.js'

export default function WhatsIncluded() {
  return (
    <section className="included" data-screen-label="Mit tartalmaz">
      <div className="included__inner" style={{ maxWidth: 1080, margin: '0 auto' }}>
        <m.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <h2>Mit tartalmaz?</h2>
          <p>Minden, ami egy teljes moziélményhez kell</p>
        </m.div>

        <div className="included__grid">
          <m.div
            className="card card--tech"
            variants={slideIn('left')}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <h3 className="card__head card__head--gold">Technikai paraméterek</h3>
            <m.div
              className="tech-list"
              variants={stagger(0.07)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {tech.map(([title, desc]) => (
                <m.div className="tech-item" key={title} variants={fadeUp}>
                  <span className="tech-item__icon">◆</span>
                  <div>
                    <div className="tech-item__title">{title}</div>
                    <div className="tech-item__desc">{desc}</div>
                  </div>
                </m.div>
              ))}
            </m.div>
          </m.div>

          <m.div
            className="card card--decor"
            variants={slideIn('right')}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <h3 className="card__head card__head--red">Dekoráció</h3>
            <m.div
              className="decor-list"
              variants={stagger(0.07)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {decor.map((d) => (
                <m.div className="decor-item" key={d} variants={fadeUp}>
                  <span className="decor-item__icon">★</span>
                  <span className="decor-item__text">{d}</span>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
