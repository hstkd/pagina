import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <header className="section-head section-head--center reveal">
          <span className="eyebrow">Lo que dicen de nosotros</span>
          <h2 className="section-title">
            Historias que nacen en el <span className="gradient-text">tatami</span>.
          </h2>
        </header>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              className="testimonial glass reveal"
              key={t.name}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="testimonial__stars" aria-label="5 de 5 estrellas">
                {'★★★★★'}
              </div>
              <blockquote>“{t.text}”</blockquote>
              <figcaption>
                <span className="testimonial__avatar">{t.name.charAt(0)}</span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
