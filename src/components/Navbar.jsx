import { useEffect, useState } from 'react'
import { BRAND } from '../data'

const LINKS = [
  { href: '#programas', label: 'Programas' },
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#maestros', label: 'Maestros' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#sedes', label: 'Sedes' },
  { href: '#precios', label: 'Planes' },
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
          <span className="brand__mark brand__mark--img">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt={`${BRAND.full} logo`} width="40" height="40" />
          </span>
          <span className="brand__name">
            {BRAND.name}
            <small>TAEKWONDO · 2020</small>
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
