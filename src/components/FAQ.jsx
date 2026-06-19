import { useState } from 'react'
import { FAQS, BRAND } from '../data'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container faq__layout">
        <header className="section-head faq__head reveal">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section-title">
            Resolvemos tus <span className="gradient-text">dudas</span>.
          </h2>
          <p className="section-lead">
            ¿No encuentras lo que buscas? Escríbenos por WhatsApp y te ayudamos
            encantados.
          </p>
          <a
            href={`https://wa.me/${BRAND.phoneIntl.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost faq__contact"
          >
            Preguntar por WhatsApp
          </a>
        </header>

        <div className="faq__list reveal">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <svg
                    className="faq__icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="faq__a-wrap">
                  <div className="faq__a">{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
