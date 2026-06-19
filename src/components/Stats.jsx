import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data'

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const dur = 1500
          const t0 = performance.now()
          const tick = (t) => {
            const p = Math.min((t - t0) / dur, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Math.round(eased * value))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {n.toLocaleString('es-ES')}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <div className="stats__item reveal" key={s.label}>
            <div className="stats__value gradient-text">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
