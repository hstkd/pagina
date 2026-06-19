import { TENETS } from '../data'

export default function Tenets() {
  return (
    <section className="section" id="filosofia">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">Los cinco principios</span>
          <h2 className="section-title">
            El Taekwondo no es solo <span className="gradient-text">técnica</span>,
            es un código de vida.
          </h2>
          <p className="section-lead">
            Cada cinturón que entregamos representa el dominio de un cuerpo y la
            forja de un carácter. Estos son los valores que guían cada clase.
          </p>
        </header>

        <div className="tenets">
          {TENETS.map((t, i) => (
            <article
              className="tenet glass reveal"
              key={t.title}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="tenet__ko">{t.ko}</div>
              <h3 className="tenet__title">{t.title}</h3>
              <p className="tenet__text">{t.text}</p>
              <span className="tenet__num">0{i + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
