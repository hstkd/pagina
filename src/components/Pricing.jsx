import { PLANS } from '../data'

export default function Pricing() {
  return (
    <section className="section" id="precios">
      <div className="container">
        <header className="section-head section-head--center reveal">
          <span className="eyebrow">Planes y tarifas</span>
          <h2 className="section-title">
            Invierte en tu <span className="gradient-text">mejor versión</span>.
          </h2>
          <p className="section-lead" style={{ marginInline: 'auto' }}>
            Planes <strong style={{ color: 'var(--text)' }}>desde $60 al mes</strong>.
            Escríbenos para conocer el valor de cada plan según tu edad y sede.
          </p>
          <span className="pricing__badge">Desde $60 / mes</span>
        </header>

        <div className="pricing">
          {PLANS.map((p, i) => (
            <article
              className={`plan reveal ${p.featured ? 'plan--featured' : ''}`}
              key={p.name}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {p.featured && <span className="plan__badge">Recomendado</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__desc">{p.desc}</p>
              <div className="plan__price">
                {p.price ? (
                  <>
                    <span className="plan__currency">$</span>
                    {p.price}
                    <span className="plan__cadence">{p.cadence}</span>
                  </>
                ) : (
                  <span className="plan__quote">
                    Consultar
                    <span className="plan__cadence">{p.cadence}</span>
                  </span>
                )}
              </div>
              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} plan__cta`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
