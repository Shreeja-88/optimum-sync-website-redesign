// For custom layouts where <Section title=...> is not enough.
// <SectionHeading title="How we work" subtitle="..." align="center" />
export default function SectionHeading({ title, subtitle, align = "left", dark = false, className = "" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <h2 className={`text-3xl font-bold md:text-4xl ${dark ? "text-white" : "text-charcoal"}`}>{title}</h2>
      {subtitle && <p className={`mt-3 ${dark ? "text-text-muted" : "text-text-secondary"}`}>{subtitle}</p>}
    </div>
  );
}
