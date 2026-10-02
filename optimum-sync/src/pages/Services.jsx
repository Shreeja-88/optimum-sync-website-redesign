import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Globe2,
  Smartphone,
  Code2,
  ShoppingCart,
  Bot,
  Cloud,
  ArrowUpRight,
  Check,
  Layers3,
  LayoutDashboard,
  Link2,
  CreditCard,
  Database,
  Zap,
  FileText,
  Search,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import usePageTitle from "../hooks/usePageTitle";
import Section from "../components/ui/Section";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   SERVICE IMAGES
========================================================= */

export const serviceImages = {
  "web-development":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",

  "mobile-development":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85",

  "custom-software":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",

  "e-commerce":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",

  "ai-automation":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",

  "cloud-devops":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
};
/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    slug: "web-development",
    number: "01",
    title: "Web & SaaS Development",
    shortTitle: "Web",
    blurb:
      "High-performance websites and web applications designed around your business goals.",
    icon: Globe2,
    details: {
      features: [
        "Corporate Websites",
        "SaaS Platforms",
        "Web Applications",
        "Business Dashboards",
        "Landing Pages",
        "API Integrations",
      ],
    },
  },

  {
    slug: "mobile-development",
    number: "02",
    title: "Mobile App Development",
    shortTitle: "Mobile",
    blurb:
      "Modern mobile experiences that help businesses connect with customers anywhere.",
    icon: Smartphone,
    details: {
      features: [
        "Android",
        "iOS",
        "Cross-Platform Apps",
        "Real-Time Apps",
        "Payments",
        "Push Notifications",
        "Location & Tracking",
      ],
    },
  },

  {
    slug: "custom-software",
    number: "03",
    title: "Custom Software",
    shortTitle: "Software",
    blurb:
      "Purpose-built software that fits your workflows instead of forcing your business to adapt.",
    icon: Code2,
    details: {
      features: [
        "Business Management",
        "CRM/Internal Tools",
        "Automation",
        "Admin Dashboards",
        "Workflow Management",
        "Integrations",
      ],
    },
  },

  {
    slug: "e-commerce",
    number: "04",
    title: "E-Commerce",
    shortTitle: "Commerce",
    blurb:
      "Scalable digital commerce experiences built for products, customers and growth.",
    icon: ShoppingCart,
    details: {
      features: [
        "Online Stores",
        "Custom E-Commerce",
        "Payment Gateways",
        "Inventory",
        "Order Management",
        "Customer Dashboards",
      ],
    },
  },

  {
    slug: "ai-automation",
    number: "05",
    title: "AI & Automation",
    shortTitle: "AI",
    blurb:
      "Practical AI solutions that automate repetitive work and make business processes smarter.",
    icon: Bot,
    details: {
      features: [
        "AI Chatbots",
        "Business Automation",
        "AI Assistants",
        "Document Processing",
        "Data Analysis",
        "AI Search",
      ],
    },
  },

  {
    slug: "cloud-devops",
    number: "06",
    title: "Cloud & DevOps",
    shortTitle: "Cloud",
    blurb:
      "Reliable cloud infrastructure and deployment workflows for products that need to scale.",
    icon: Cloud,
    details: {
      features: [
        "Cloud Deployment",
        "Hosting",
        "CI/CD",
        "Monitoring",
        "Database Management",
        "Performance Optimization",
      ],
    },
  },
];

/* =========================================================
   FRAMER MOTION
========================================================= */

const floatingTransition = {
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut",
};

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function Services() {
  const pageRef = useRef(null);

  usePageTitle(
    "Services",
    "Web, mobile, cloud and AI services from Optimum Sync."
  );

  /* =======================================================
     GSAP PAGE ANIMATIONS
  ======================================================= */

  useLayoutEffect(() => {
    const root = pageRef.current;

    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      /* ---------------------------------------------------
         HERO EYEBROW
      --------------------------------------------------- */

      gsap.from(".gsap-hero-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      });

      /* ---------------------------------------------------
         HERO TEXT
      --------------------------------------------------- */

      const heroWords = gsap.utils.toArray(".hero-word");

      gsap.set(heroWords, {
        yPercent: 120,
        opacity: 0,
        rotateX: -60,
        transformOrigin: "50% 100%",
      });

      gsap.to(heroWords, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.25,
      });

      /* ---------------------------------------------------
         HERO DESCRIPTION
      --------------------------------------------------- */

      gsap.from(".hero-description", {
        opacity: 0,
        y: 25,
        duration: 0.9,
        delay: 0.85,
        ease: "power3.out",
      });

      /* ---------------------------------------------------
         HERO PILLS
      --------------------------------------------------- */

      gsap.from(".hero-pill", {
        opacity: 0,
        y: 25,
        scale: 0.85,
        duration: 0.6,
        stagger: 0.08,
        delay: 1,
        ease: "back.out(1.7)",
      });

      /* ---------------------------------------------------
         HERO VISUAL
      --------------------------------------------------- */

      gsap.from(".hero-system", {
        opacity: 0,
        x: 100,
        scale: 0.82,
        rotateY: 12,
        duration: 1.25,
        delay: 0.25,
        ease: "power4.out",
      });

      /* ---------------------------------------------------
         HERO SCROLL PARALLAX
      --------------------------------------------------- */

      gsap.to(".hero-system", {
        y: 80,
        rotateX: 3,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* ---------------------------------------------------
         INTRO SECTION
      --------------------------------------------------- */

      gsap.from(".intro-card", {
        opacity: 0,
        y: 90,
        scale: 0.96,
        duration: 1.1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".intro-card",
          start: "top 82%",
          once: true,
        },
      });

      /* ---------------------------------------------------
         INTRO HEADING
      --------------------------------------------------- */

      gsap.from(".intro-heading", {
        opacity: 0,
        y: 55,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".intro-heading",
          start: "top 85%",
          once: true,
        },
      });

      /* ---------------------------------------------------
         INTRO IMAGES
      --------------------------------------------------- */

      gsap.from(".intro-image", {
        opacity: 0,
        y: 60,
        scale: 0.92,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".intro-images",
          start: "top 82%",
          once: true,
        },
      });

      /* ---------------------------------------------------
         SERVICES HEADER
      --------------------------------------------------- */

      gsap.from(".services-heading", {
        opacity: 0,
        y: 55,
        duration: 0.9,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 85%",
          once: true,
        },
      });

      /* ---------------------------------------------------
         GREEN ACCENT LINE
      --------------------------------------------------- */

      gsap.from(".services-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.1,
        ease: "power3.inOut",

        scrollTrigger: {
          trigger: ".services-line",
          start: "top 90%",
          once: true,
        },
      });

      /* ---------------------------------------------------
         SERVICE CARDS
      --------------------------------------------------- */

      gsap.from(".service-card", {
        opacity: 0,
        y: 90,
        scale: 0.94,
        rotateX: 8,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 82%",
          once: true,
        },
      });

      /* ---------------------------------------------------
         SERVICE CARD IMAGE PARALLAX
      --------------------------------------------------- */

      gsap.utils.toArray(".service-image").forEach((image) => {
        gsap.fromTo(
          image,
          {
            yPercent: -6,
            scale: 1.08,
          },
          {
            yPercent: 6,
            scale: 1.14,
            ease: "none",

            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      /* ---------------------------------------------------
         CTA REVEAL
      --------------------------------------------------- */

      gsap.from(".services-cta", {
        opacity: 0,
        y: 70,
        scale: 0.97,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".services-cta",
          start: "top 85%",
          once: true,
        },
      });

      /* ---------------------------------------------------
         REFRESH
      --------------------------------------------------- */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="overflow-hidden">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero-section relative overflow-hidden border-b border-slate-200/70">
        <div
          className="absolute inset-0 -z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 -z-0 bg-white/80" />
        {/* Background grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(32,159,227,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(32,159,227,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        {/* Ambient glow */}

        <motion.div
          className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 35, 0],
            scale: [1, 1.15, 1],
          }}
          transition={floatingTransition}
        />

        <motion.div
          className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 45, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            ...floatingTransition,
            duration: 8,
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">

          {/* HERO COPY */}

          <div className="relative z-10">

            <div className="gsap-hero-eyebrow mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">

              <span className="h-px w-10 bg-brand" />

              Optimum Sync Services

            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.065em] text-charcoal sm:text-5xl md:text-6xl lg:text-[68px]">

             <span className="hero-word inline-block">
                  Digital
                </span>{" "}

                <span className="hero-word inline-block">
                  Solutions
                </span>{" "}

                <span className="hero-word inline-block">
                  built
                </span>

                <br />

                <span className="hero-word inline-block text-brand">
                  for
                </span>{" "}

                <span className="hero-word inline-block text-brand">
                  business growth.
                </span>

            </h1>

            <p className="hero-description mt-7 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">

              From strategy to launch, we build scalable digital solutions
              that help businesses streamline operations, engage customers,
              and grow with confidence.
            </p>

            {/* Capability pills */}

            <div className="mt-8 flex flex-wrap gap-2.5">

              {[
                "Web",
                "Apps",
                "Software",
                "E-Commerce",
                "AI",
                "Cloud",
              ].map((item) => (
                <motion.span
                  key={item}
                  className="hero-pill rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-xl"
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {item}
                </motion.span>
              ))}

            </div>
            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/25"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-charcoal shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:text-brand"
              >
                Explore Our Work
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Small trust signal */}

            <div className="mt-9 flex items-center gap-3 text-xs font-medium text-slate-500">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />

              </span>

              Digital products. Built to scale.

            </div>

          </div>


          {/* HERO SYSTEM */}

          <div className="hero-system relative mx-auto w-full max-w-xl">

            <motion.div
              className="relative aspect-square overflow-hidden rounded-[38px] border border-white bg-white/65 p-5 shadow-[0_40px_120px_rgba(15,23,42,0.13)] backdrop-blur-2xl md:p-7"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* Grid */}

              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(32,159,227,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(32,159,227,.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Orbit rings */}

              <motion.div
                className="absolute inset-[12%] rounded-full border border-brand/10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute inset-[23%] rounded-full border border-brand/10 border-dashed"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="absolute inset-[34%] rounded-full border border-slate-200" />


              {/* Center */}

              <motion.div
                className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] bg-slate-950 shadow-[0_30px_80px_rgba(15,23,42,.3)]"
                animate={{
                  scale: [1, 1.045, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="absolute inset-2 rounded-[27px] border border-brand/20 bg-gradient-to-br from-brand/20 via-slate-950 to-cyan-400/10" />

                <div className="relative text-center">

                  <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">

                    <span className="text-lg font-bold">
                      &lt;/&gt;
                    </span>

                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Digital Core
                  </p>

                </div>

              </motion.div>


              {/* Nodes */}

              {[
                {
                  name: "Web",
                  sub: "Experience",
                  icon: "⌘",
                  position: "left-[5%] top-[18%]",
                },
                {
                  name: "AI",
                  sub: "Automation",
                  icon: "✦",
                  position: "right-[5%] top-[18%]",
                },
                {
                  name: "Mobile",
                  sub: "Applications",
                  icon: "▣",
                  position: "bottom-[18%] left-[5%]",
                },
                {
                  name: "Cloud",
                  sub: "Infrastructure",
                  icon: "☁",
                  position: "bottom-[18%] right-[5%]",
                },
              ].map((node, index) => (
                <motion.div
                  key={node.name}
                  className={`absolute ${node.position} z-30 w-[130px] rounded-2xl border border-white bg-white/90 p-3 shadow-[0_18px_45px_rgba(15,23,42,.1)] backdrop-blur-xl`}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                >

                  <div className="flex items-center gap-2">

                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand/10 text-sm font-bold text-brand">
                      {node.icon}
                    </span>

                    <div>

                      <p className="text-xs font-bold text-charcoal">
                        {node.name}
                      </p>

                      <p className="text-[9px] text-slate-400">
                        {node.sub}
                      </p>

                    </div>

                  </div>

                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">

                    <motion.div
                      className="h-full rounded-full bg-brand"
                      animate={{
                        x: ["-100%", "300%"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "linear",
                      }}
                    />

                  </div>

                </motion.div>
              ))}


              {/* Connecting lines */}

              <span className="absolute left-[27%] top-1/2 h-px w-[22%] rotate-[-25deg] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

              <span className="absolute right-[27%] top-1/2 h-px w-[22%] rotate-[25deg] bg-gradient-to-l from-transparent via-brand/40 to-transparent" />

              <span className="absolute left-1/2 top-[27%] h-[22%] w-px bg-gradient-to-b from-transparent via-brand/40 to-transparent" />

              <span className="absolute bottom-[27%] left-1/2 h-[22%] w-px bg-gradient-to-t from-transparent via-brand/40 to-transparent" />


              {/* Status */}

              <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white bg-white/90 px-4 py-2 shadow-lg backdrop-blur-xl">

                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">

                  <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_15px_rgba(16,185,129,.7)]" />

                  Systems in sync

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =================================================
          INTRO
      ================================================= */}

      <Section className="pt-14 md:pt-20">

        <div className="intro-card overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,.06)]">

          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

            {/* Copy */}

            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">

              <span className="mb-5 inline-flex w-fit rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
                What we build
              </span>

              <h2 className="intro-heading max-w-xl text-4xl font-semibold leading-tight tracking-[-0.06em] text-charcoal md:text-5xl">

                Digital solutions designed for real business needs.

              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">

                From your first idea to a production-ready product, we provide
                the technology and expertise needed to build, launch and
                continuously improve your digital presence.

              </p>


              <div className="mt-8 flex flex-wrap gap-2.5">

                {[
                  "Web",
                  "Mobile Apps",
                  "Software",
                  "E-Commerce",
                  "AI",
                  "Cloud",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-brand/5"
                  >
                    {item}
                  </span>
                ))}

              </div>


              <div className="mt-9 flex items-center gap-3 text-sm font-semibold text-brand">

                <span className="h-px w-9 bg-brand" />

                Built for clarity, performance & scale

                <ArrowUpRight className="h-4 w-4" />

              </div>

            </div>


            {/* Images */}

            <div className="intro-images grid grid-cols-2 gap-3 bg-slate-50 p-3 md:gap-4 md:p-4">

              <motion.div
                className="intro-image col-span-2 overflow-hidden rounded-[25px]"
                whileHover={{
                  scale: 0.99,
                }}
              >

                <motion.img
                  src={serviceImages["web-development"]}
                  alt="Web development"
                  className="h-64 w-full object-cover rounded-2xl shadow-xl md:h-80"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                />

              </motion.div>


              <motion.div
                className="intro-image overflow-hidden rounded-[25px]"
                whileHover={{
                  y: -5,
                }}
              >

                <motion.img
                  src={serviceImages["mobile-development"]}
                  alt="Mobile application development"
                  className="h-44 w-full object-cover md:h-52"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                />

              </motion.div>


              <motion.div
                className="intro-image overflow-hidden rounded-[25px]"
                whileHover={{
                  y: -5,
                }}
              >

                <motion.img
                  src={serviceImages["ai-automation"]}
                  alt="AI automation"
                  className="h-44 w-full object-cover md:h-52"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                />

              </motion.div>

            </div>

          </div>

        </div>

      </Section>


      {/* =================================================
          SERVICES HEADER
      ================================================= */}

      <Section className="pt-16 md:pt-24">

        <div className="services-heading flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
              Capabilities
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-charcoal md:text-5xl">
              What we build.
            </h2>

          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-right">
            Technology solutions designed to solve business problems,
            streamline operations and create better digital experiences.
          </p>

        </div>


        <div className="services-line mt-7 h-px w-full origin-left bg-gradient-to-r from-brand via-brand/30 to-transparent" />

      </Section>


      {/* =================================================
          SERVICE GRID
      ================================================= */}

      <Section className="pt-8 md:pt-10">

        <div className="service-grid grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <motion.article
                key={service.slug}
                className="service-card group"
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                <Link
                  to={`/services/${service.slug}`}
                  className="block h-full"
                >

                  <div className="relative flex h-full min-h-[570px] flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,.05)] transition-all duration-500 group-hover:border-brand/30 group-hover:shadow-[0_30px_90px_rgba(15,23,42,.11)]">


                    {/* IMAGE */}

                    <div className="relative h-60 overflow-hidden shadow-lg">

                      <motion.img
                        src={serviceImages[service.slug]}
                        alt={service.title}
                        className="service-image h-full w-full object-cover"
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />


                      {/* Number */}

                      <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs font-bold text-white backdrop-blur-md">

                        {service.number}

                      </div>


                      {/* Icon */}

                      <motion.div
                        className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md"
                        whileHover={{
                          scale: 1.12,
                          rotate: 8,
                        }}
                      >

                        <Icon className="h-5 w-5" />

                      </motion.div>

                    </div>


                    {/* CONTENT */}

                    <div className="flex flex-1 flex-col p-6 md:p-7">

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                            {service.shortTitle}
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-charcoal">
                            {service.title}
                          </h3>

                        </div>


                        <motion.span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                          whileHover={{
                            x: 4,
                            y: -4,
                            borderColor: "#10B981",
                            color: "#10B981",
                          }}
                        >

                          <ArrowUpRight className="h-4 w-4" />

                        </motion.span>

                      </div>


                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {service.blurb}
                      </p>


                      {/* Feature list */}

                      <div className="mt-6 flex-1">

                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          Capabilities
                        </p>


                      <div className="grid grid-cols-2 gap-2">
                        {service.details.features.slice(0, 5).map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                            className="group/feature flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 px-3 py-2.5 text-xs font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand/5 hover:text-slate-900 hover:shadow-sm"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-all duration-300 group-hover/feature:scale-110 group-hover/feature:bg-brand group-hover/feature:text-white">
                              {(() => {
                                const iconMap = {
                                  "Corporate Websites": Globe2,
                                  "SaaS Platforms": Layers3,
                                  "Web Applications": Code2,
                                  "Business Dashboards": LayoutDashboard,
                                  "Landing Pages": LayoutDashboard,
                                  "API Integrations": Link2,

                                  "Android": Smartphone,
                                  "iOS": Smartphone,
                                  "Cross-Platform Apps": Smartphone,
                                  "Real-Time Apps": Zap,
                                  "Payments": CreditCard,
                                  "Push Notifications": Zap,
                                  "Location & Tracking": Globe2,

                                  "Business Management": LayoutDashboard,
                                  "CRM/Internal Tools": LayoutDashboard,
                                  "Automation": Zap,
                                  "Admin Dashboards": LayoutDashboard,
                                  "Workflow Management": Layers3,
                                  "Integrations": Link2,

                                  "Online Stores": ShoppingCart,
                                  "Custom E-Commerce": ShoppingCart,
                                  "Payment Gateways": CreditCard,
                                  "Inventory": Database,
                                  "Order Management": LayoutDashboard,
                                  "Customer Dashboards": LayoutDashboard,

                                  "AI Chatbots": Bot,
                                  "Business Automation": Zap,
                                  "AI Assistants": Bot,
                                  "Document Processing": FileText,
                                  "Data Analysis": BarChart3,
                                  "AI Search": Search,

                                  "Cloud Deployment": Cloud,
                                  "Hosting": Cloud,
                                  "CI/CD": Code2,
                                  "Monitoring": BarChart3,
                                  "Database Management": Database,
                                };

                                const FeatureIcon = iconMap[feature] || Check;

                                return <FeatureIcon className="h-3.5 w-3.5" />;
                              })()}
                            </span>

                            <span className="leading-tight">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      </div>


                      {/* Bottom CTA */}

                      <div className="mt-7 border-t border-slate-100 pt-5">

                        <div className="flex items-center justify-between">

                          <span className="text-sm font-semibold text-charcoal">
                            Explore service
                          </span>

                          <span className="text-xs text-slate-400 transition-colors duration-300 group-hover:text-brand">
                            View details →
                          </span>

                        </div>


                        {/* Progress */}

                        <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-100">

                          <motion.div
                            className="h-full w-1/3 rounded-full bg-gradient-to-r from-brand/20 via-brand to-brand/20"
                            animate={{
                              x: ["-150%", "400%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </Link>

              </motion.article>
            );
          })}

        </div>

      </Section>
    </div>
  );
}