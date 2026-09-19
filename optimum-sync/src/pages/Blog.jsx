import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";

// P5 builds this page.
export default function Blog() {
  usePageTitle("Blog", "Articles and updates from the Optimum Sync team.");
  return (
    <>
      <PageHeader title="Blog" subtitle="Articles and updates from our team." crumbs={[{ label: "Blog" }]} />
      <Section title="Latest posts" />
    </>
  );
}
