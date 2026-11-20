export default function BookArtwork() {
  return (
    <div className="book-stage">
      <div className="stage-rings" aria-hidden="true" />
      <div className="stage-coordinate stage-coordinate-top" aria-hidden="true">+</div>
      <div className="stage-coordinate stage-coordinate-bottom" aria-hidden="true">+</div>
      <img
        className="book-cover"
        src="/images/lean-brand-cover.webp"
        alt="The Lean Brand by Jeremiah Gardner with Brant Cooper, hardcover edition"
        width={226}
        height={387}
        fetchPriority="high"
      />
    </div>
  )
}
