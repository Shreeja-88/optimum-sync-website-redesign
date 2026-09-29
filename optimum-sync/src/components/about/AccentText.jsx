// Turns "More than a *development team.*" into plain text plus an accented span.
// Mark the words to highlight with *asterisks* in aboutData.js.
export default function AccentText({ children }) {
  const parts = String(children).split(/\*(.+?)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="os-accent-text">
        {part}
      </span>
    ) : (
      part
    )
  );
}
