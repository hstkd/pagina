import { useEffect, useState } from 'react'
import { BRAND } from '../data'

const LINKS = [
  { href: '#programas', label: 'Programas' },
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#maestros', label: 'Maestros' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#precios', label: 'Precios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">
            <svg viewBox="0 0 64 64" width="30" height="30" aria-hidden="true">
              <path
                d="M32 10 L20 32 L32 32 L20 54 L46 26 L34 26 Z"
                fill="url(#navg)"
              />
              <defs>
                <linearGradient id="navg" x1="0" y1="0" x2="1" y2="1">
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

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>
            Clase de prueba
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
