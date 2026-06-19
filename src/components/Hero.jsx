import { motion } from 'framer-motion'
import { BRAND } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}
const visual = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__kanji" aria-hidden="true">
        {BRAND.korean}
      </div>

      <motion.div
        className="container hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero__text" variants={container}>
          <motion.span className="hero__badge" variants={item}>
            <span className="pulse" /> Reservas abiertas · Temporada 2026
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            Forja tu <span className="gradient-text">cuerpo</span>.
            <br />
            Domina tu <span className="gradient-text">mente</span>.
          </motion.h1>

          <motion.p className="hero__lead" variants={item}>
            {BRAND.full} es una academia donde la técnica milenaria coreana se
            une a un entrenamiento de alto nivel. Disciplina, respeto y espíritu
            indomable para todas las edades, en Quito y Cumbayá.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a href="#contacto" className="btn btn-primary">
              Clase de prueba gratis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#programas" className="btn btn-ghost">
              Ver programas
            </a>
          </motion.div>

          <motion.div className="hero__proof" variants={item}>
            <div className="hero__avatars">
              {['HS', 'KY', 'PM', '+'].map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
            <div className="hero__proof-text">
              <strong>2 sedes · 5 programas</strong>
              <span>en Quito y Cumbayá</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="hero__visual" variants={visual}>
          <div className="hero__glow" />
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
          <div className="hero__disc">
            <img src="/logo.png" alt={`${BRAND.full} logo`} />
          </div>

          <span className="hero__chip hero__chip--1">
            <span className="hero__chip-stars">★★★★★</span> 5.0 en Google
          </span>
          <span className="hero__chip hero__chip--2">
            <span className="hero__chip-dot" /> Desde {BRAND.since}
          </span>
          <span className="hero__chip hero__chip--3">📍 Quito · Cumbayá</span>
        </motion.div>
      </motion.div>

      <a href="#programas" className="hero__scroll" aria-label="Desplázate">
        <span className="hero__mouse">
          <span />
        </span>
        Descubre
      </a>
    </section>
  )
}
