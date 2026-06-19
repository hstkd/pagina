import { useState } from 'react'
import { BRAND } from '../data'

export default function CTA() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') || ''
    const phone = data.get('phone') || ''
    const program = data.get('program') || 'Taekwondo'
    const sede = data.get('sede') || 'a definir'
    const msg = `Hola Henry Sigchos Taekwondo 👋, soy ${name}. Quiero reservar una clase de prueba.\n• Programa: ${program}\n• Sede: ${sede}\n• Mi teléfono: ${phone}`
    const url = `https://wa.me/${BRAND.phoneIntl.replace('+', '')}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="cta glass reveal">
          <div className="cta__glow" />
          <div className="cta__content">
            <span className="eyebrow">Tu primer paso</span>
            <h2 className="cta__title">
              Reserva tu <span className="gradient-text">clase de prueba</span>{' '}
              gratuita.
            </h2>
            <p className="cta__text">
              Ven a conocer el dojang, siente la energía del tatami y descubre por
              qué cientos de familias nos eligen. Sin compromiso.
            </p>
            <ul className="cta__list">
              <li>
                <a href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}`} target="_blank" rel="noreferrer">
                  📱 WhatsApp · {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`}>✉️ {BRAND.email}</a>
              </li>
              <li>
                <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer">
                  📸 {BRAND.instagram}
                </a>
              </li>
              <li>📍 Sedes en Quito y Cumbayá</li>
            </ul>
          </div>

          {sent ? (
            <div className="cta__form cta__success">
              <div className="cta__success-icon">✓</div>
              <h3>¡Casi listo!</h3>
              <p>
                Abrimos WhatsApp con tu mensaje. Solo pulsa enviar y te
                confirmamos tu clase de prueba. ¡Nos vemos en el tatami!
              </p>
            </div>
          ) : (
            <form className="cta__form" onSubmit={onSubmit}>
              <label>
                Nombre
                <input type="text" name="name" placeholder="Tu nombre" required />
              </label>
              <label>
                Teléfono
                <input type="tel" name="phone" placeholder="600 000 000" required />
              </label>
              <label>
                Programa de interés
                <select name="program" defaultValue="">
                  <option value="" disabled>
                    Selecciona…
                  </option>
                  <option>TaekwonKids (4–7)</option>
                  <option>Infantiles (8–11)</option>
                  <option>Cadetes (12–16)</option>
                  <option>Senior (17+)</option>
                  <option>Élite</option>
                  <option>Equipos de competencia</option>
                </select>
              </label>
              <label>
                Sede
                <select name="sede" defaultValue="">
                  <option value="" disabled>
                    Selecciona…
                  </option>
                  <option>Quito</option>
                  <option>Cumbayá</option>
                </select>
              </label>
              <button type="submit" className="btn btn-primary cta__submit">
                Reservar por WhatsApp
              </button>
              <small className="cta__legal">
                Se abrirá WhatsApp con tu mensaje listo para enviar a{' '}
                {BRAND.full}.
              </small>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
