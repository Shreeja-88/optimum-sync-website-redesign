import usePageTitle from "../hooks/usePageTitle";
import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";
import WhyUs from "../components/about/WhyUs";
import Process from "../components/about/Process";
import "../components/about/about.css";

// P4 builds this page. Keep the section ids: the footer links to #why-us.
export default function About() {
  usePageTitle("About us", "Who we are, how we work and what we have built.");
  return (
    <div className="os-about">
      <AboutHero />
      <Story />
      <WhyUs />
      <Process />
    </div>
  );
}
