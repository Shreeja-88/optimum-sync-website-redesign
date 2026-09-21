import Hero from "../components/home/Hero";
import Audience from "../components/home/Audience";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import "../styles/home.css";

// Navbar, Footer, the "Let's work together" CTA and ChatWidget come from
// Layout.jsx (P1). Do NOT add them here.
export default function Home() {
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
