// Shared Framer Motion variants — playful but tasteful.
// Components gate these with useReducedMotion() via <Reveal> and `initial` flags.

const easeOut = [0.22, 1, 0.36, 1]

// Common viewport config for scroll-reveal (fire once, slightly before fully in view)
export const viewport = { once: true, margin: '-12% 0px' }

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

// Container that staggers its direct children (use with the variants above on children)
export const stagger = (staggerChildren = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

// "Pop" entrance for display titles — settles toward its resting rotation (default 0)
export const popIn = {
  hidden: { opacity: 0, scale: 0.85, rotate: -8 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
}

// Slide in from a side
export const slideIn = (dir = 'left') => ({
  hidden: { opacity: 0, x: dir === 'left' ? -44 : 44 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
})

// Small chip / list-item pop
export const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: easeOut } },
}

// Polaroid: fades/scales in and settles to its own tilt (pass rot via `custom`)
export const polaroidIn = {
  hidden: { opacity: 0, y: 24, scale: 0.92, rotate: 0 },
  show: (rot = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: rot,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  }),
}

// Clapperboard drop-in with a little overshoot
export const dropIn = {
  hidden: { opacity: 0, y: -36, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 170, damping: 14 } },
}
