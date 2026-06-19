import { BRAND } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="brand">
            <span className="brand__mark">
              <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
                <path d="M32 10 L20 32 L32 32 L20 54 L46 26 L34 26 Z" fill="url(#fg)" />
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#ff2e3f" />
                    <stop offset="1" stopColor="#f5b14c" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="brand__name">
              {BRAND.name}
              <small>{BRAND.korean}</small>
            </span>
          </a>
          <p>
            Academia de Taekwondo. Disciplina, técnica y espíritu indomable desde
            2008.
          </p>
        </div>

        <nav className="footer__col">
          <h4>Academia</h4>
          <a href="#programas">Programas</a>
          <a href="#filosofia">Filosofía</a>
          <a href="#maestros">Maestros</a>
          <a href="#cinturones">Cinturones</a>
        </nav>

        <nav className="footer__col">
          <h4>Información</h4>
          <a href="#horarios">Horarios</a>
          <a href="#precios">Precios</a>
          <a href="#contacto">Clase de prueba</a>
        </nav>

        <div className="footer__col">
          <h4>Contacto</h4>
          <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <span className="footer__muted">{BRAND.address}</span>
          <span className="footer__muted">{BRAND.instagram}</span>
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
