import Container from "./Container";

const bgs = {
  white: "bg-white",
  gray: "bg-off-white",
  blue: "bg-pale-blue",
  mint: "bg-pale-mint",
  dark: "bg-charcoal text-white",
};

// <Section id="why-us" title="Why us" subtitle="..." bg="gray">...</Section>
// bg: white | gray | blue | mint | dark.   `id` is what other pages link to, e.g. /about#why-us
export default function Section({ id, title, subtitle, bg = "white", className = "", children }) {
  const dark = bg === "dark";
  return (
    <section id={id} className={`py-16 md:py-24 ${bgs[bg]} ${className}`}>
      <Container>
        {title && (
          <div className="mb-10 max-w-2xl">
            <h2 className={`text-3xl font-bold md:text-4xl ${dark ? "text-white" : "text-charcoal"}`}>{title}</h2>
            {subtitle && <p className={`mt-3 ${dark ? "text-text-muted" : "text-text-secondary"}`}>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
