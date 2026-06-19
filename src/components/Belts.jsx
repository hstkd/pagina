import { BELTS } from '../data'

export default function Belts() {
  return (
    <section className="section belts" id="cinturones">
      <div className="container">
        <header className="section-head section-head--center reveal">
          <span className="eyebrow">El camino del grado</span>
          <h2 className="section-title">
            De cinturón blanco a <span className="gradient-text">cinturón negro</span>
          </h2>
          <p className="section-lead" style={{ marginInline: 'auto' }}>
            Cada color cuenta una historia de esfuerzo. Este es el viaje que
            recorrerás con nosotros, paso a paso.
          </p>
        </header>

        <div className="belts__track reveal">
          {BELTS.map((b, i) => (
            <div className="belt" key={b.name} style={{ transitionDelay: `${i * 60}ms` }}>
              <div
                className="belt__bar"
                style={{
                  background: b.color,
                  color: b.textDark ? '#101014' : '#fff',
                  borderColor: b.name === 'Blanco' ? 'rgba(0,0,0,.12)' : 'transparent',
                }}
              >
                <span className="belt__knot" />
              </div>
              <div className="belt__info">
                <strong>{b.name}</strong>
                <span>{b.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
