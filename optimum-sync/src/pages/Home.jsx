import usePageTitle from "../hooks/usePageTitle";
import Hero from "../components/home/Hero";
import Audience from "../components/home/Audience";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import "../styles/home.css";

// Navbar, Footer, the "Let's work together" CTA and ChatWidget come from
// Layout.jsx (P1). Do NOT add them here.
export default function Home() {
  usePageTitle(
    "Optimum Sync | Digital Products, Software & AI Solutions",
    "Optimum Sync builds websites, mobile apps, custom software, e-commerce platforms and AI-powered solutions for businesses ready to grow.",
    false,
    true
  );

  return (
    <main className="home">
      <Hero />
      <Audience />
      <Services />
      <Projects />
      <Testimonials />
    </main>
  );
}