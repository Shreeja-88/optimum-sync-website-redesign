import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown, Globe2, Smartphone, Megaphone, Cloud } from "lucide-react";
import Container from "../ui/Container";
import Logo from "./Logo";
import {  contact } from "../../data/navigation";

const primaryNavLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Our Work", to: "/#projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const serviceMenuItems = [
  {
    title: "Web Development",
    description: "Fast, responsive websites & web apps",
    to: "/services/web-development",
    icon: Globe2,
  },
  {
    title: "Mobile App Development",
    description: "iOS, Android & cross-platform apps",
    to: "/services/mobile-development",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    description: "Grow your brand and reach",
    to: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    title: "Cloud Hosting",
    description: "Reliable, scalable cloud infrastructure",
    to: "/services/cloud-hosting",
    icon: Cloud,
  },
];

function isRouteActive(path, currentPath) {
  if (path === "/") return currentPath === "/";
  if (path === "/services") return currentPath.startsWith("/services");
  return currentPath.startsWith(path);
}

function MobileDrawer({ open, onClose }) {
  const { pathname } = useLocation();
  const [servicesExpanded, setServicesExpanded] = useState(
    pathname.startsWith("/services")
  );

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setServicesExpanded(true);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-slate-950/65 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: "100%", opacity: 0.7 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-hidden bg-[#071a26] shadow-2xl"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

            <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={onClose}
                  className="flex items-center gap-3"
                >
                  <Logo className="h-10 w-auto" />
                  <span className="text-[17px] font-semibold text-white">
                    Optimum Sync
                  </span>
                </Link>

                <motion.button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  whileHover={{ rotate: 90, scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-7 bg-brand" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand">
                  Menu
                </span>
              </div>

              <nav className="mt-4 space-y-2" aria-label="Mobile navigation">
                {primaryNavLinks.map((link, index) => {
                  const active = isRouteActive(link.to, pathname);

                  if (link.label === "Services") {
                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div
                          className={`flex min-h-[58px] items-center rounded-2xl border ${
                            active
                              ? "border-brand/50 bg-brand/10"
                              : "border-white/10 bg-white/[0.035]"
                          }`}
                        >
                          <Link
                            to="/services"
                            onClick={onClose}
                            className="flex flex-1 items-center px-5 text-[17px] font-medium text-white"
                          >
                            Services
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              setServicesExpanded((value) => !value)
                            }
                            aria-expanded={servicesExpanded}
                            aria-label="Toggle services"
                            className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-brand"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                servicesExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {servicesExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 mt-2 space-y-1.5 border-l border-brand/20 pl-3">
                                {serviceMenuItems.map((item, serviceIndex) => {
                                  const Icon = item.icon;
                                  const serviceActive = isRouteActive(
                                    item.to,
                                    pathname
                                  );

                                  return (
                                    <motion.div
                                      key={item.to}
                                      initial={{ opacity: 0, x: 12 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: serviceIndex * 0.04,
                                      }}
                                    >
                                      <Link
                                        to={item.to}
                                        onClick={onClose}
                                        className={`group flex min-h-[54px] items-center gap-3 rounded-xl border px-3.5 ${
                                          serviceActive
                                            ? "border-brand/40 bg-brand/10"
                                            : "border-white/[0.06] bg-white/[0.025]"
                                        }`}
                                      >
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                                          <Icon className="h-4 w-4" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                          <span className="block text-sm font-semibold text-white">
                                            {item.title}
                                          </span>
                                          <span className="mt-0.5 block truncate text-[10px] text-slate-400">
                                            {item.description}
                                          </span>
                                        </span>
                                        <ArrowRight className="h-3.5 w-3.5 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand" />
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        onClick={onClose}
                        className={`group flex min-h-[58px] items-center justify-between rounded-2xl border px-5 text-[17px] font-medium text-white transition-all duration-300 hover:translate-x-1 ${
                          active
                            ? "border-brand/50 bg-brand/10"
                            : "border-white/10 bg-white/[0.035]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto border-t border-white/10 pt-5"
              >
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="group flex min-h-[54px] items-center justify-between rounded-full border border-brand/50 bg-brand/20 px-5 text-sm font-semibold text-white"
                >
                  <span>Start a Project</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>

                <a
                  href={`mailto:${contact.email}`}
                  className="mt-4 block truncate px-2 text-center text-xs text-slate-400"
                >
                  {contact.email}
                </a>
              </motion.div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});
  const bar = useRef(null);
  const navReadyRef = useRef(false);
  const openRef = useRef(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const activeKey = primaryNavLinks.find((link) => isRouteActive(link.to, pathname))?.to ?? "/";
    const activeNode = navRefs.current[activeKey];

    if (!activeNode) return;

    const parentRect = activeNode.parentElement.getBoundingClientRect();
    const activeRect = activeNode.getBoundingClientRect();
    setIndicator({
      left: activeRect.left - parentRect.left,
      width: activeRect.width,
    });
  }, [pathname]);

  useEffect(() => {
    if (window.location.hash === "#projects") {
      const timer = window.setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);

      return () => window.clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    let lastScrollY = window.scrollY;
    let lastDirectionChangeY = window.scrollY;

    // Keep the navbar visible immediately after the page loader/navigation mount.
    // It becomes eligible to hide only after the user has actually moved down the page.
    const readyTimer = window.setTimeout(() => {
      setNavReady(true);
    }, 650);

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const delta = y - lastScrollY;

      setScrolled(y > 12);

      /*
       * Deliberate hide/show behavior:
       * - Never hide near the top.
       * - Require ~180px of downward scrolling before hiding.
       * - Require a meaningful upward movement before revealing.
       * - Tiny wheel/touch movements won't make the navbar flicker.
       */
      if (!navReadyRef.current || y <= 24 || openRef.current) {
        setScrollingDown(false);
        lastDirectionChangeY = y;
      } else if (delta > 0 && y > 180) {
        if (y - lastDirectionChangeY > 18) {
          setScrollingDown(true);
          lastDirectionChangeY = y;
        }
      } else if (delta < 0) {
        if (lastDirectionChangeY - y > 10) {
          setScrollingDown(false);
          lastDirectionChangeY = y;
        }
      }

      if (bar.current) {
        bar.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }

      lastScrollY = y;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.clearTimeout(readyTimer);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    navReadyRef.current = navReady;
  }, [navReady]);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 pt-3 md:pt-5 will-change-transform transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrollingDown && navReady && !open
            ? "-translate-y-[calc(100%+1.5rem)]"
            : "translate-y-0"
        }`}
      >
        <Container className="px-4">
          <motion.div
            whileHover={{ y: -2, scale: 1.002 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className={`nav-shell relative mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2.5 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_24px_60px_-28px_rgba(32,159,227,0.18)] ${
              scrolled
                ? "border-white/70 bg-white/75 shadow-[0_24px_60px_-26px_rgba(15,23,42,0.34)]"
                : "border-white/50 bg-white/60"
            }`}
          >
            <Link
              to="/"
              aria-label="Optimum Sync home"
              className="group relative z-10 flex shrink-0 items-center gap-3 rounded-full p-1.5 transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Logo className="h-9 md:h-10" />
              <span className="hidden text-[15px] font-semibold tracking-[-0.035em] text-charcoal sm:block">
                Optimum Sync
              </span>
            </Link>

            <nav aria-label="Main navigation" className="relative hidden items-center justify-center md:flex">
              <span
                aria-hidden="true"
                className="absolute inset-y-1 rounded-full bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out"
                style={{ left: `${indicator.left}px`, width: `${indicator.width}px` }}
              />

              <div className="relative z-10 flex items-center gap-1">
                {primaryNavLinks.map((link) => {
                  const active = isRouteActive(link.to, pathname);

                  if (link.label === "Services") {
                    return (
                      <div
                        key={link.to}
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <NavLink
                          ref={(node) => {
                            navRefs.current[link.to] = node;
                          }}
                          to={link.to}
                          end={false}
                          aria-haspopup="true"
                          aria-expanded={servicesOpen}
                          onFocus={() => setServicesOpen(true)}
                          className={`group relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium tracking-[-0.02em] transition-colors duration-200 ${
                            active ? "text-charcoal" : "text-slate-600 hover:text-charcoal"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              servicesOpen ? "rotate-180 text-brand" : ""
                            }`}
                          />
                          {servicesOpen && (
                            <motion.span
                              layoutId="services-nav-dot"
                              className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                            />
                          )}
                        </NavLink>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute left-1/2 top-[calc(100%+12px)] z-[80] w-[560px] -translate-x-1/2 rounded-[24px] border border-slate-200/80 bg-white/95 p-2.5 shadow-[0_28px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
                              onMouseEnter={() => setServicesOpen(true)}
                              onMouseLeave={() => setServicesOpen(false)}
                            >
                              <div className="mb-1 flex items-center justify-between px-3 py-2">
                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                                    Services
                                  </p>
                                  <p className="mt-0.5 text-xs text-slate-500">
                                    Jump directly to a service
                                  </p>
                                </div>
                                <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_0_5px_rgba(32,159,227,0.08)]" />
                              </div>

                              <div className="grid grid-cols-2 gap-2.5">
                                {serviceMenuItems.map((item, index) => {
                                  const Icon = item.icon;

                                  return (
                                    <motion.div
                                      key={item.to}
                                      initial={{ opacity: 0, y: 8 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.045, duration: 0.25 }}
                                    >
                                      <Link
                                        to={item.to}
                                        className="group/service flex h-full items-start gap-3 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-brand/15 hover:bg-brand/5 hover:shadow-[0_12px_30px_rgba(32,159,227,0.08)]"
                                        onClick={() => setServicesOpen(false)}
                                      >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-brand transition-all duration-300 group-hover/service:scale-110 group-hover/service:bg-brand group-hover/service:text-white">
                                          <Icon className="h-5 w-5" />
                                        </span>

                                        <span className="min-w-0">
                                          <span className="block text-sm font-semibold text-charcoal">
                                            {item.title}
                                          </span>
                                          <span className="mt-1 block text-[11px] leading-4 text-slate-500">
                                            {item.description}
                                          </span>
                                        </span>

                                        <ArrowRight className="ml-auto mt-1 h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform duration-300 group-hover/service:translate-x-1 group-hover/service:text-brand" />
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              <Link
                                to="/services"
                                onClick={() => setServicesOpen(false)}
                                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-2 text-[11px] font-semibold text-slate-600 transition-colors hover:bg-brand/5 hover:text-brand"
                              >
                                View all services
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.to}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                    <NavLink
                      ref={(node) => {
                        navRefs.current[link.to] = node;
                      }}
                      to={link.to}
                      end={link.to === "/"}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium tracking-[-0.02em] transition-colors duration-200 ${
                        active ? "text-charcoal" : "text-slate-600 hover:text-charcoal"
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        <span className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand transition-all duration-300 ${
                          active ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
                        }`} />
                      </span>
                    </NavLink>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <motion.div
                whileHover={{ y: -2, scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="hidden md:block"
              >
              <Link
                to="/contact"
                className="motion-button group items-center gap-2 rounded-full border border-brand/35 bg-[linear-gradient(135deg,rgba(32,159,227,0.14),rgba(94,234,212,0.14))] px-3 py-2 text-sm font-semibold text-charcoal shadow-[0_20px_40px_-20px_rgba(32,159,227,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/70 hover:shadow-[0_26px_50px_-18px_rgba(32,159,227,0.72)] active:scale-[0.98] hover:shadow-[0_26px_46px_-18px_rgba(32,159,227,0.8)] md:inline-flex"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              </motion.div>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
                className="motion-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(32,159,227,0.14)] active:scale-95 hover:border-brand/60 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand md:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </motion.div>
        </Container>

        <div
          ref={bar}
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-light to-mint"
        />
      </header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
