import { INSTRUCTORS } from '../data'

export default function Instructors() {
  return (
    <section className="section" id="maestros">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">Nuestros maestros</span>
          <h2 className="section-title">
            Aprende de <span className="gradient-text">cinturones negros</span> de
            élite.
          </h2>
          <p className="section-lead">
            Un equipo de maestros titulados, con décadas de tatami y palmarés
            internacional, entregados a tu progreso.
          </p>
        </header>

        <div className="instructors">
          {INSTRUCTORS.map((m, i) => (
            <article
              className="instructor reveal"
              key={m.name}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="instructor__photo">
                <span className="instructor__initials">{m.initials}</span>
                <span className="instructor__belt" />
              </div>
              <div className="instructor__body">
                <h3 className="instructor__name">{m.name}</h3>
                <span className="instructor__rank">{m.rank}</span>
                <p className="instructor__bio">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
