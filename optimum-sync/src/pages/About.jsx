import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";

// P4 builds this page. Keep the section ids: the footer links to #why-us and #case-studies.
export default function About() {
  usePageTitle("About us", "Who we are, how we work and what we have built.");
  return (
    <>
      <PageHeader title="About us" crumbs={[{ label: "About" }]} />
      <Section title="Mission and vision" />
      <Section id="why-us" title="Why Optimum Sync" bg="gray" />
      <Section id="case-studies" title="Case studies" />
    </>
  );
}
