import { PROGRAMS } from '../data'

export default function Programs() {
  return (
    <section className="section" id="programas">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">Programas por edad y nivel</span>
          <h2 className="section-title">
            Una disciplina para <span className="gradient-text">cada etapa</span> de
            la vida.
          </h2>
          <p className="section-lead">
            Desde los más pequeños hasta los atletas de competición. Encuentra el
            grupo perfecto para empezar o seguir avanzando.
          </p>
        </header>

        <div className="programs">
          {PROGRAMS.map((p, i) => (
            <article
              className={`program reveal ${p.featured ? 'program--featured' : ''}`}
              key={p.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`program__glow program__glow--${p.accent}`} />
              {p.featured && <span className="program__ribbon">Más popular</span>}
              <span className="program__tag">{p.tag}</span>
              <h3 className="program__title">{p.title}</h3>
              <p className="program__text">{p.text}</p>
              <ul className="program__points">
                {p.points.map((pt) => (
                  <li key={pt}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="program__link">
                Apuntarme
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
