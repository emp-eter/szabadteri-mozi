import { useMemo } from 'react'

/**
 * Absolutely-positioned twinkling starfield.
 * Uses a deterministic seeded PRNG so the layout is stable across renders
 * (seed 7 = hero, 13 = contact in the original design).
 */
export default function Starfield({ count, seed = 1, shooting = 0 }) {
  const stars = useMemo(() => {
    let s = seed
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280
      return s / 233280
    }
    return Array.from({ length: count }, () => {
      const big = rnd() > 0.82
      const x = rnd() * 100
      const y = rnd() * 100
      const size = big ? 3 + rnd() * 3 : 1 + rnd() * 1.5
      const duration = 2 + rnd() * 4
      const delay = rnd() * 4
      return {
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: big ? '#ffe3a8' : '#fff',
        boxShadow: big ? '0 0 8px #ffd479' : 'none',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }
    })
  }, [count, seed])

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((style, i) => (
        <span key={i} className="star" style={style} />
      ))}
      {shooting > 0 &&
        Array.from({ length: shooting }, (_, i) => (
          <span
            key={`sh-${i}`}
            className="shooting-star"
            style={{
              top: `${8 + i * 17}%`,
              left: `${10 + i * 22}%`,
              animationDelay: `${3 + i * 6}s`,
              animationDuration: `${5 + i * 2}s`,
            }}
          />
        ))}
    </div>
  )
}
