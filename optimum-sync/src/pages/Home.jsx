import usePageTitle from "../hooks/usePageTitle";
import Section from "../components/ui/Section";

// P2 builds this page.
export default function Home() {
  usePageTitle();
  return <Section title="Home" subtitle="Yet to build the hero, sections and animations here." />;
}
