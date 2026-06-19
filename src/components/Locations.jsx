import { LOCATIONS } from '../data'

export default function Locations() {
  return (
    <section className="section" id="sedes">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">Dónde entrenamos</span>
          <h2 className="section-title">
            Dos sedes para estar <span className="gradient-text">cerca de ti</span>.
          </h2>
          <p className="section-lead">
            Entrena en la sede que mejor te quede. Con el plan Guerrero tienes
            acceso a las dos.
          </p>
        </header>

        <div className="locations">
          {LOCATIONS.map((l, i) => (
            <a
              key={l.city}
              href={l.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="location glass reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="location__pin" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.6" fill="currentColor" />
                </svg>
              </div>
              <div className="location__body">
                <h3>{l.city}</h3>
                <p>{l.address}</p>
                <span className="location__link">
                  Ver en Google Maps
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
