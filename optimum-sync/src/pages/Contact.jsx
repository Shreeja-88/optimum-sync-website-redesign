
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import ContactForm from "../components/Contact/ContactForm";
import FAQ from "../components/Contact/FAQ";

// P5 builds this page. Keep the section id: the footer links to #faq.
export default function Contact() {
  usePageTitle("Contact us", "Tell us about your project and we will get back to you.");
  return (
    <>
      <PageHeader title="Contact us" subtitle="Tell us what you need." crumbs={[{ label: "Contact" }]} />
      <Section title="Send a message">
        <ContactForm />
      </Section>
      <Section id="faq" title="Frequently asked questions" bg="gray">
        <FAQ />
      </Section>
    </>
  );
}
