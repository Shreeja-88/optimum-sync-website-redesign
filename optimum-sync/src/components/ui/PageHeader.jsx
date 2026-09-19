import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "./Container";

// Banner at the top of inner pages so About / Services / Blog / Contact look consistent.
// <PageHeader title="Our services" subtitle="..." crumbs={[{ label: "Services" }]} />
// crumbs: [{ label, to? }]  (the last one, without `to`, is the current page)
export default function PageHeader({ title, subtitle, crumbs = [], children }) {
  return (
    <section className="relative overflow-hidden bg-pale-blue">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mint/30 blur-3xl"
      />
      <Container className="relative py-14 md:py-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1 text-sm text-text-secondary">
            <Link to="/" className="hover:text-brand">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4 text-text-muted" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-brand">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-charcoal">
                    {c.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-charcoal md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-text-secondary">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}
