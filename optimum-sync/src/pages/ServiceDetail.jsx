import { useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import NotFound from "./NotFound";
import { services } from "../data/navigation";

// P3 builds this page. Unknown slugs fall back to the 404 page.
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
        crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
      />
      <Section title="Details" subtitle="P3 adds the service details and enquiry flow here." />
    </>
  );
}
