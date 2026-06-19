import { m } from 'framer-motion'
import { packages, festivalSpecs } from '../data.js'
import { fadeUp, stagger, viewport } from '../motion.js'

export default function Packages() {
  return (
    <section id="csomagok" className="packages" data-screen-label="Csomagok">
      <div className="packages__inner">
        <m.div
          className="packages__head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow eyebrow--cyan">Árajánlat</span>
          <h2>Válassza ki a csomagot</h2>
        </m.div>

        <m.div
          className="packages__grid"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {packages.map((p) => (
            <m.div
              key={p.name}
              className={`pkg${p.accent ? ' pkg--accent' : ''}`}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              {p.accent && <span className="pkg__badge">Népszerű</span>}
              <div className={`pkg__name${p.accent ? ' pkg__name--accent' : ''}`}>
                {p.name}
              </div>
              <div className="pkg__cap">{p.cap}</div>
              <div className="pkg__desc">{p.desc}</div>

              <div className="pkg__specs">
                {p.rows.map(([label, value]) => (
                  <div key={label} className="pkg__spec">
                    <span className="pkg__spec-label">{label}</span>
                    <span className="pkg__spec-value">{value}</span>
                  </div>
                ))}
              </div>

              <div className="pkg__price">
                <div className="pkg__price-label">Összesen</div>
                <div className="pkg__price-row">
                  <span
                    className={`pkg__price-amount${
                      p.accent ? ' pkg__price-amount--accent' : ''
                    }`}
                  >
                    {p.total}
                  </span>
                  <span className="pkg__price-vat">Ft + Áfa</span>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>

        <m.div
          className="festival"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div>
            <span className="festival__badge">Prémium</span>
            <h3 className="festival__title">Filmfesztivál</h3>
            <p className="festival__desc">
              Professzionális DCI mozi-vetítéstechnika. Magyarország legnagyobb
              szabadtéri mozivászna.
            </p>
          </div>
          <div className="festival__specs">
            {festivalSpecs.map(([label, value]) => (
              <div key={label} className="festival__spec">
                <span className="festival__spec-label">{label}</span>
                <span className="festival__spec-value">{value}</span>
              </div>
            ))}
          </div>
          <div className="festival__offer">
            Egyedi ajánlat
            <br />
            alapján
          </div>
        </m.div>

        <p className="packages__footnote">
          Az árak nem tartalmazzák a filmjogdíjat, amit a kiválasztott film alapján
          tudunk megküldeni. Az ajánlat nem tartalmazza az útiköltséget (120 Ft / km,
          Egerből oda-vissza). További lehetőségek: dekorációs csomag, kvíz,
          videóklippek, színpad, székek, sörpadok, popcorn és büfé (foodtruck),
          Artisjus ügyintézés.
        </p>
      </div>
    </section>
  )
}
