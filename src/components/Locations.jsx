import { LOCATIONS } from '../data'

const enc = (s) => encodeURIComponent(s)

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
          {LOCATIONS.map((l, i) => {
            const full = `${l.address}, ${l.city}, Ecuador`
            const embed = `https://www.google.com/maps?q=${enc(full)}&output=embed`
            const directions = `https://www.google.com/maps/dir/?api=1&destination=${enc(full)}`
            return (
              <article
                className={`location glass reveal ${
                  i % 2 === 0 ? 'reveal--left' : 'reveal--right'
                }`}
                key={l.city}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="location__map">
                  <iframe
                    title={`Mapa de la sede de ${l.city}`}
                    src={embed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="location__content">
                  <div className="location__head">
                    <div className="location__pin" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="2.6" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <h3>{l.city}</h3>
                      <p>{l.address}</p>
                    </div>
                  </div>
                  <div className="location__actions">
                    <a href={directions} target="_blank" rel="noreferrer" className="btn btn-primary">
                      Cómo llegar
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
                    <a href={l.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      Ver en Maps
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
