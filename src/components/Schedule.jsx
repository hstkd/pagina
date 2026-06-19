import { SCHEDULE_WEEK, SCHEDULE_SATURDAY } from '../data'

function Check({ on }) {
  return on ? (
    <span className="sch-check" aria-label="Sí">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6 9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ) : (
    <span className="sch-dash" aria-label="No disponible">
      —
    </span>
  )
}

export default function Schedule() {
  return (
    <section className="section" id="horarios">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">Horario semanal</span>
          <h2 className="section-title">
            Tu <span className="gradient-text">horario</span> de un vistazo.
          </h2>
          <p className="section-lead">
            De lunes a viernes con el mismo horario cada día. La sede de Quito
            suma el turno de mañana para todas las edades.
          </p>
        </header>

        <div className="sch reveal">
          <div className="sch__head">
            <span>Lunes a Viernes</span>
          </div>

          <table className="sch__table">
            <thead>
              <tr>
                <th>Horario</th>
                <th>Clase</th>
                <th className="sch__sede">Quito</th>
                <th className="sch__sede">Cumbayá</th>
              </tr>
            </thead>
            <tbody>
              {SCHEDULE_WEEK.map((r) => (
                <tr key={r.time}>
                  <td className="sch__time">{r.time}</td>
                  <td className="sch__class">{r.clase}</td>
                  <td className="sch__sede">
                    <Check on={r.quito} />
                  </td>
                  <td className="sch__sede">
                    <Check on={r.cumbaya} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="sch__sat">
            <div className="sch__sat-day">Sábados</div>
            <div className="sch__sat-info">
              <strong>{SCHEDULE_SATURDAY.time}</strong>
              <span>{SCHEDULE_SATURDAY.clase}</span>
            </div>
          </div>
        </div>

        <p className="schedule__note reveal">
          <span className="schedule__dot" /> El turno de{' '}
          <strong>07:00 – 08:00</strong> (todas las edades) está disponible{' '}
          <strong>solo en la sede de Quito</strong>. Las clases de tarde son
          iguales en ambas sedes.
        </p>
      </div>
    </section>
  )
}
