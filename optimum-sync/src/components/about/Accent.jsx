import Forming from "./Forming";

// A heading where the last two words use the accent gradient.
// tone="dark" is for headings on the dark charcoal section.
export default function Accent({ children, tone = "light" }) {
  const words = children.split(" ");
  const cut = Math.max(1, words.length - 2);
  const lead = words.slice(0, cut).join(" ");
  const accent = words.slice(cut).join(" ");
  return (
    <Forming>
      {lead}{" "}
      <span className={`os-accent-text${tone === "dark" ? " os-accent-text--dark" : ""}`}>{accent}</span>
    </Forming>
  );
}
