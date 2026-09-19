import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { services } from "../data/navigation";

// P3 builds this page. The grid below shows the 4 services from data/navigation.js.
export default function Services() {
  usePageTitle("Services", "Web, mobile, cloud and AI services from Optimum Sync.");
  return (
    <>
      <PageHeader title="Our services" subtitle="What we build for you." crumbs={[{ label: "Services" }]} />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>
              <Card className="h-full">
                <s.icon className="h-6 w-6 text-brand" />
                <h2 className="mt-3 text-lg font-semibold text-charcoal">{s.title}</h2>
                <p className="mt-1 text-sm text-text-secondary">{s.blurb}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
