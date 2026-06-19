import { GALLERY } from '../data'

export default function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="container">
        <header className="section-head reveal">
          <span className="eyebrow">Galería</span>
          <h2 className="section-title">
            La energía del <span className="gradient-text">tatami</span>.
          </h2>
          <p className="section-lead">
            Un vistazo a nuestras clases, exámenes y competencias. Así se vive el
            Taekwondo en Henry Sigchos.
          </p>
        </header>

        <div className="gallery">
          {GALLERY.map((g, i) => (
            <figure
              className={`gallery__item reveal ${g.span ? `gallery__item--${g.span}` : ''}`}
              key={g.caption}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {g.src ? (
                <img
                  src={`${import.meta.env.BASE_URL}${g.src.replace(/^\//, '')}`}
                  alt={g.caption}
                  loading="lazy"
                />
              ) : (
                <div className="gallery__ph" aria-hidden="true">
                  <svg viewBox="0 0 64 64" width="56" height="56">
                    <path
                      d="M32 10 L20 32 L32 32 L20 54 L46 26 L34 26 Z"
                      fill="url(#galg)"
                    />
                    <defs>
                      <linearGradient id="galg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#3b6fe0" />
                        <stop offset="1" stopColor="#6ea8ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
              <figcaption className="gallery__cap">
                <span className="gallery__tag">{g.tag}</span>
                <span className="gallery__title">{g.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
