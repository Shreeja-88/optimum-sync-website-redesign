import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import CTASection from "./CTASection";
import ChatWidget from "../chat/ChatWidget";
import PageLoader from "./PageLoader";
import AmbientBackground from "./AmbientBackground";


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(
        hash.slice(1)
      );

      if (element) {
        element.scrollIntoView({
          behavior: "instant",
        });

        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}


export default function Layout() {
  return (
    <div className="site-shell">

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <AmbientBackground />

      <ScrollToTop />

      <PageLoader />

      <div className="site-shell__content">

        <Navbar />

        <main
          id="main"
          className="relative z-10 flex-1"
        >
          <Outlet />
        </main>

        {/* Shared closing CTA */}
        <CTASection />

        <Footer />

        <ChatWidget />

      </div>
    </div>
  );
}