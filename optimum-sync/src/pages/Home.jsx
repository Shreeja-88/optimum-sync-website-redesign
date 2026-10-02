import usePageTitle from "../hooks/usePageTitle";
import useSmoothScroll from "../hooks/useSmoothScroll";
import BgPattern from "../components/home/BgPattern";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import Audience from "../components/home/Audience";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import "../styles/home.css";
import "../styles/home-extra.css";

// Navbar, Footer, the "Let's work together" CTA and ChatWidget come from
// Layout.jsx (P1). Do NOT add them here.
export default function Home() {
  usePageTitle(
    "Home",
    "Optimum Sync helps businesses build technology solutions for a better tomorrow."
  );
  useSmoothScroll();

  return (
    <main className="home">
      <BgPattern />
      <Hero />
      <Intro />
      <Services />
      <Projects />
      <Clients />
      <Audience />
      <Testimonials />
      <Faq />
    </main>
  );
}
