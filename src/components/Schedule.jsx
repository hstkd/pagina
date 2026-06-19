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
            Clases de tarde iguales en Quito y Cumbayá. Además, la sede de Quito
            suma un turno de mañana para todas las edades.
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
                  <li
                    key={s.time + s.name}
                    className={s.sede === 'quito' ? 'is-quito' : ''}
                  >
                    <span className="schedule__time">{s.time}</span>
                    <span className="schedule__class">{s.name}</span>
                    {s.sede === 'quito' && (
                      <span className="schedule__tag">Quito</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="schedule__note reveal">
          <span className="schedule__dot" /> Turno de mañana{' '}
          <strong>07:00–08:00</strong> (todas las edades) disponible{' '}
          <strong>solo en la sede de Quito</strong>. Las clases de tarde son
          iguales en ambas sedes.
        </p>
      </div>
    </section>
  )
}
