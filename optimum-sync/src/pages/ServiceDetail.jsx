import { Link, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import NotFound from "./NotFound";
import { services } from "../data/navigation";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  usePageTitle(service?.title, service?.blurb);

  if (!service) return <NotFound />;

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.blurb}
        crumbs={[
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">

          {/* Left side */}
          <div>
            <h2 className="text-3xl font-bold text-charcoal">
              {service.details.heading}
            </h2>

            <p className="mt-4 text-text-secondary">
              {service.details.description}
            </p>

            <ul className="mt-6 space-y-3 text-text-secondary">
              {service.details.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
          </div>

          {/* Right side */}
          <div className="rounded-2xl bg-pale-blue p-8">
            <h3 className="text-2xl font-semibold text-charcoal">
              Let's work together
            </h3>

            <p className="mt-3 text-text-secondary">
              Have a project in mind? Tell us about it and let's turn your
              idea into something meaningful.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              Get in touch →
            </Link>
          </div>

        </div>
      </Section>
    </>
  );
}