import { BRAND } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="brand">
            <span className="brand__mark brand__mark--img brand__mark--lg">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt={`${BRAND.full} logo`} width="64" height="64" />
            </span>
            <span className="brand__name">
              {BRAND.name}
              <small>TAEKWONDO</small>
            </span>
          </a>
          <p>
            Academia de Taekwondo en Quito y Cumbayá. Disciplina, técnica y
            espíritu indomable desde {BRAND.since}.
          </p>
        </div>

        <nav className="footer__col">
          <h4>Academia</h4>
          <a href="#programas">Programas</a>
          <a href="#filosofia">Filosofía</a>
          <a href="#maestros">Maestros</a>
          <a href="#galeria">Galería</a>
          <a href="#cinturones">Cinturones</a>
        </nav>

        <nav className="footer__col">
          <h4>Información</h4>
          <a href="#sedes">Sedes</a>
          <a href="#horarios">Horarios</a>
          <a href="#precios">Planes</a>
          <a href="#faq">Preguntas frecuentes</a>
          <a href="#contacto">Clase de prueba</a>
        </nav>

        <div className="footer__col">
          <h4>Contacto</h4>
          <a href={`tel:${BRAND.phoneIntl}`}>{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer">
            {BRAND.instagram}
          </a>
          <span className="footer__muted">Quito · Cumbayá</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {BRAND.name}. Todos los derechos reservados.
        </span>
        <span className="footer__credit">Hecho con disciplina y 태권도.</span>
      </div>
    </footer>
  )
}
