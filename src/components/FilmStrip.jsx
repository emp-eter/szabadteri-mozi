// Decorative film-strip divider: a dark band with two rows of running sprocket holes.
// Purely decorative (aria-hidden); motion is CSS and pauses under prefers-reduced-motion.
export default function FilmStrip() {
  return (
    <div className="filmstrip" aria-hidden="true">
      <span className="filmstrip__perf filmstrip__perf--top" />
      <span className="filmstrip__perf filmstrip__perf--bottom" />
    </div>
  )
}
