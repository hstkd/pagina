import { useEffect, useRef } from 'react'

/**
 * Fondo ambiental: malla de gradientes que reacciona sutilmente al ratón,
 * más una textura de grano. Decorativo y de bajo coste.
 */
export default function Background() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 26
        const y = (e.clientY / window.innerHeight - 0.5) * 26
        el.style.setProperty('--mx', `${x}px`)
        el.style.setProperty('--my', `${y}px`)
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="bg" aria-hidden="true">
      <div ref={ref} className="bg-mesh" />
      <div className="bg-grid" />
      <div className="bg-grain" />
    </div>
  )
}
