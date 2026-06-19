import { useState } from 'react'
import { BRAND } from '../data'

export default function CTA() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
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
              <li>📍 {BRAND.address}</li>
              <li>📞 {BRAND.phone}</li>
              <li>✉️ {BRAND.email}</li>
            </ul>
          </div>

          {sent ? (
            <div className="cta__form cta__success">
              <div className="cta__success-icon">✓</div>
              <h3>¡Reserva recibida!</h3>
              <p>
                Gracias por tu interés. Te contactaremos en menos de 24h para
                confirmar tu clase de prueba. ¡Nos vemos en el tatami!
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
                  <option>Pequeños Tigres (4–7)</option>
                  <option>Infantil & Juvenil (8–14)</option>
                  <option>Adultos (+15)</option>
                  <option>Equipo de competición</option>
                </select>
              </label>
              <button type="submit" className="btn btn-primary cta__submit">
                Reservar mi clase gratis
              </button>
              <small className="cta__legal">
                Al enviar aceptas ser contactado por {BRAND.name}. Nunca
                compartimos tus datos.
              </small>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
