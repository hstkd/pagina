import { SCHEDULE } from '../data'

export default function Schedule() {
  return (
    <section className="section" id="horarios">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">Horario semanal</span>
          <h2 className="section-title">
            Encuentra tu <span className="gradient-text">momento</span> para entrenar.
          </h2>
          <p className="section-lead">
            Clases de mañana, tarde y noche. Flexibilidad total para que el
            Taekwondo encaje en tu vida.
          </p>
        </header>

        <div className="schedule">
          {SCHEDULE.map((d, i) => (
            <div
              className="schedule__day glass reveal"
              key={d.day}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="schedule__name">{d.day}</span>
              <ul className="schedule__slots">
                {d.slots.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
