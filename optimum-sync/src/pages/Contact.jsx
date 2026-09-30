import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import ContactForm from "../components/Contact/ContactForm";
import FinalCTA from "../components/Contact/FinalCTA";
import StatsCounter from "../components/Contact/StatsCounter";

// P5 builds this page.
export default function Contact() {
  usePageTitle("Contact us", "Tell us about your project and we will get back to you.");

  const scrollToForm = () => {
    document.getElementById("project-inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageHeader title="Contact us" subtitle="Tell us what you need." crumbs={[{ label: "Contact" }]} />

      <Section bg="dark">
        <StatsCounter />
      </Section>

      <Section
        id="project-inquiry"
        title="Let's Talk About Your Project"
        subtitle="Have a project in mind? Tell us a little about it and our team will get back to you."
      >
        <ContactForm />
      </Section>

      <Section bg="blue">
        <FinalCTA onCtaClick={scrollToForm} />
      </Section>
    </>
  );
}

