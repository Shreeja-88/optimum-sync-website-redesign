import { Link } from "react-router-dom";
import { Globe2, Smartphone, Code2, ShoppingCart, Bot, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import usePageTitle from "../hooks/usePageTitle";
import Section from "../components/ui/Section";

const serviceImages = {
  "web-development": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "mobile-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  "custom-software": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "e-commerce": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  "ai-automation": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  "cloud-devops": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
};

const services = [
  {
    slug: "web-development",
    title: "Web Development",
    blurb: "Websites & Web Applications That Work for Your Business",
    icon: Globe2,
    details: { features: ["Corporate Websites", "SaaS Platforms", "Web Applications", "Business Dashboards", "Landing Pages", "API Integrations"] },
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    blurb: "Mobile Experiences Your Customers Will Want to Use",
    icon: Smartphone,
    details: { features: ["Android", "iOS", "Cross-Platform Apps", "Real-Time Apps", "Payments", "Push Notifications", "Location & Tracking"] },
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    blurb: "Software Built Around Your Workflow",
    icon: Code2,
    details: { features: ["Business Management", "CRM/Internal Tools", "Automation", "Admin Dashboards", "Workflow Management", "Integrations"] },
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    blurb: "Turn Your Products Into a Scalable Digital Business",
    icon: ShoppingCart,
    details: { features: ["Online Stores", "Custom E-Commerce", "Payment Gateways", "Inventory", "Order Management", "Customer Dashboards"] },
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    blurb: "Put AI to Work in Your Business",
    icon: Bot,
    details: { features: ["AI Chatbots", "Business Automation", "AI Assistants", "Document Processing", "Data Analysis", "AI Search"] },
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    blurb: "Reliable Infrastructure for Growing Products",
    icon: Cloud,
    details: { features: ["Cloud Deployment", "Hosting", "CI/CD", "Monitoring", "Database Management", "Performance Optimization"] },
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        duration: 38,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  },
};

export default function Services() {
  usePageTitle(
    "Services",
    "Web, mobile, cloud and AI services from Optimum Sync."
  );

  return (
    <>
      {/* Compact animated hero — replaces the oversized generic page header */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-[#eef9ff] via-white to-[#ecfffa]">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
            animate={{ x: [0, 70, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-300/15 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 45, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(32,159,227,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(32,159,227,0.08) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              maskImage: "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              <span className="h-px w-8 bg-brand" />
              Optimum Sync Services
            </div>

            <motion.h1
              className="max-w-3xl text-4xl font-semibold tracking-[-0.065em] text-charcoal md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              Technology built around
              <span className="block text-brand">your business.</span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              From strategy to launch, we design and build digital products that
              help businesses operate, grow, and scale.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-wrap gap-2.5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
            >
              {["Web", "Apps", "Software", "E-Commerce", "AI", "Cloud"].map((label) => (
                <motion.span
                  key={label}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:border-brand/30 hover:bg-brand/5 hover:shadow-[0_10px_30px_rgba(32,159,227,0.12)]"
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image-free animated service ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-xl"
          >
            <motion.div
              className="relative aspect-[1.08] overflow-hidden rounded-[34px] border border-white/90 bg-white/70 p-4 shadow-[0_35px_110px_rgba(15,23,42,0.12)] backdrop-blur-xl md:p-6"
              animate={{ y: [0, -7, 0], rotate: [0, 0.25, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Tailwind animated glow layers */}
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 animate-pulse rounded-full bg-brand/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 animate-pulse rounded-full bg-mint/20 blur-3xl [animation-delay:700ms]" />

              {/* Orbit rings */}
              <div className="absolute inset-8 rounded-full border border-brand/10" />
              <div className="absolute inset-16 rounded-full border border-brand/10 border-dashed animate-[spin_28s_linear_infinite]" />
              <div className="absolute inset-24 rounded-full border border-sky-200/70 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Center core */}
              <motion.div
                className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-white bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,0.28)]"
                animate={{ scale: [1, 1.04, 1], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-2 rounded-[24px] border border-brand/20 bg-gradient-to-br from-brand/20 via-slate-950 to-cyan-400/10" />
                <div className="relative text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
                    <span className="text-lg font-bold">&lt;/&gt;</span>
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Digital Core
                  </p>
                </div>
              </motion.div>

              {/* Connecting lines */}
              <span className="absolute left-[28%] top-1/2 h-px w-[22%] origin-left rotate-[-24deg] bg-gradient-to-r from-brand/10 via-brand/50 to-transparent" />
              <span className="absolute right-[28%] top-1/2 h-px w-[22%] origin-right rotate-[24deg] bg-gradient-to-l from-brand/10 via-brand/50 to-transparent" />
              <span className="absolute left-1/2 top-[28%] h-[22%] w-px origin-bottom bg-gradient-to-t from-brand/10 via-brand/50 to-transparent" />
              <span className="absolute bottom-[28%] left-1/2 h-[22%] w-px origin-top bg-gradient-to-b from-brand/10 via-brand/50 to-transparent" />

              {/* Floating service nodes */}
              {[
                {
                  title: "Web",
                  meta: "Experiences",
                  icon: "⌘",
                  position: "left-5 top-12 md:left-8 md:top-14",
                  delay: 0,
                },
                {
                  title: "AI",
                  meta: "Automation",
                  icon: "✦",
                  position: "right-5 top-12 md:right-8 md:top-14",
                  delay: 0.5,
                },
                {
                  title: "Mobile",
                  meta: "Apps",
                  icon: "▣",
                  position: "bottom-10 left-5 md:bottom-12 md:left-8",
                  delay: 1,
                },
                {
                  title: "Cloud",
                  meta: "Infrastructure",
                  icon: "☁",
                  position: "bottom-10 right-5 md:bottom-12 md:right-8",
                  delay: 1.5,
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className={`absolute ${item.position} z-30 w-[125px] rounded-2xl border border-white/90 bg-white/90 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl`}
                  animate={{ y: [0, -6, 0], rotate: [0, 1, 0, -1, 0] }}
                  transition={{
                    duration: 4.5,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.06, y: -8 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand/10 text-sm font-bold text-brand transition-transform duration-300 group-hover:rotate-6">
                      {item.icon}
                    </span>
                    <span>
                      <span className="block text-xs font-bold text-charcoal">{item.title}</span>
                      <span className="block text-[9px] text-slate-400">{item.meta}</span>
                    </span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-cyan-300"
                      animate={{ x: ["-100%", "0%", "100%"] }}
                      transition={{
                        duration: 2.8,
                        delay: item.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Live status */}
              <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  Systems in sync
                </div>
              </div>

              {/* Tiny orbit dots */}
              {[
                "left-[18%] top-[27%]",
                "right-[17%] top-[31%]",
                "left-[23%] bottom-[27%]",
                "right-[22%] bottom-[29%]",
              ].map((position, index) => (
                <span
                  key={position}
                  className={`absolute ${position} h-2 w-2 rounded-full bg-brand shadow-[0_0_20px_rgba(32,159,227,0.8)] animate-pulse`}
                  style={{ animationDelay: `${index * 350}ms` }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Section className="pt-10 md:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.06)] transition-shadow duration-500 hover:shadow-[0_35px_100px_rgba(15,23,42,0.10)]"
        >
          <div className="grid gap-7 p-5 md:p-7 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:p-8">
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
                  What we build
                </span>

                <h2 className="mt-6 max-w-lg text-4xl font-semibold tracking-[-0.06em] text-charcoal md:text-5xl">
                  Digital Solutions Designed for Real Business Needs
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                  From your first idea to a production-ready product, we provide the technology and expertise needed to build, launch, and continuously improve your digital presence.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Web",
                  "Mobile Apps",
                  "Software",
                  "E-Commerce",
                  "AI",
                  "Cloud",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:bg-brand/5 hover:shadow-md"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <motion.div
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand"
                whileHover={{ x: 5 }}
              >
                <span className="h-px w-8 bg-brand" />
                Built for clarity, performance & scale
                <span>→</span>
              </motion.div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-sm sm:col-span-2"
              >
                <motion.img
                  src={serviceImages["web-development"]}
                  alt="Website and product design workflow"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8 }}
                  className="h-56 w-full object-cover md:h-64"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-sm"
              >
                <motion.img
                  src={serviceImages["mobile-development"]}
                  alt="Mobile app interface on a device"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8 }}
                  className="h-40 w-full object-cover md:h-44"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-sm"
              >
                <motion.img
                  src={serviceImages["ai-automation"]}
                  alt="AI automation dashboard concept"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8 }}
                  className="h-40 w-full object-cover md:h-44"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section className="pt-8 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Our Services
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] text-charcoal md:text-4xl">
              What We Build
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-right">
            Explore our digital solutions, built to solve real business needs from idea to production.
          </p>
        </motion.div>

        <div className="relative">
          {/* Ambient moving background */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/4 h-40 w-40 rounded-full bg-brand/10 blur-3xl"
            animate={{
              x: [0, 80, -30, 0],
              y: [0, -25, 20, 0],
              scale: [1, 1.15, 0.9, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 right-1/4 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl"
            animate={{
              x: [0, -70, 30, 0],
              y: [0, 25, -15, 0],
              scale: [1, 0.9, 1.12, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#f7f8fa] via-[#f7f8fa]/80 to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#f7f8fa] via-[#f7f8fa]/80 to-transparent md:w-24" />

          {/* Live indicator */}
          <div className="relative z-30 mb-5 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur-md">
              <motion.span
                className="h-2 w-2 rounded-full bg-brand"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.45, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              Live capabilities
            </div>

            <span className="hidden text-xs font-medium text-slate-400 sm:block">
              Hover to pause
            </span>
          </div>

          {/* Continuous horizontal floating sessions */}
          <div className="relative overflow-hidden py-2 md:py-4">
            <motion.div
              variants={marqueeVariants}
              animate="animate"
              className="motion-safe:flex w-max gap-5 will-change-transform hover:[animation-play-state:paused]"
              whileHover={{ cursor: "grab" }}
            >
              {[...services, ...services].map((service, index) => {
                const Icon = service.icon;
                const image =
                  serviceImages[service.slug] || serviceImages["web-development"];
                const originalIndex = index % services.length;

                return (
                  <motion.div
                    key={`${service.slug}-${index}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="group w-[290px] shrink-0 md:w-[340px] [perspective:1200px]"
                    animate={{
                      y:
                        originalIndex % 2 === 0
                          ? [0, -8, 0, 8, 0]
                          : [0, 8, 0, -8, 0],
                    }}
                    transition={{
                      y: {
                        duration: 6 + originalIndex * 0.45,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: originalIndex * 0.18,
                      },
                    }}
                  >
                    <Link to={`/services/${service.slug}`} className="block h-full">
                      <motion.div
                        whileHover={{
                          y: -12,
                          scale: 1.025,
                          rotateX: 2,
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand/40 group-hover:shadow-[0_30px_90px_rgba(16,185,129,0.16)]"
                      >
                        {/* Animated shine */}
                        <motion.div
                          aria-hidden="true"
                          className="pointer-events-none absolute -left-1/2 top-0 z-10 h-full w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          animate={{ x: ["0%", "380%"] }}
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                        />

                        <div className="relative h-56 overflow-hidden">
                          <motion.img
                            src={image}
                            alt={service.title}
                            whileHover={{ scale: 1.1 }}
                            transition={{
                              duration: 0.7,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="h-full w-full object-cover"
                          />

                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent"
                            whileHover={{ opacity: 0.72 }}
                          />

                          {/* Floating status pill */}
                          <motion.div
                            className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/85 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-800 shadow-lg backdrop-blur-md"
                            animate={{ y: [0, -3, 0] }}
                            transition={{
                              duration: 2.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <motion.span
                              className="h-2 w-2 rounded-full bg-brand"
                              animate={{ opacity: [1, 0.35, 1] }}
                              transition={{ duration: 1.2, repeat: Infinity }}
                            />
                            {String(originalIndex + 1).padStart(2, "0")}
                          </motion.div>

                          {/* Corner icon */}
                          <motion.div
                            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md"
                            whileHover={{ rotate: 12, scale: 1.12 }}
                          >
                            <Icon className="h-5 w-5" />
                          </motion.div>
                        </div>

                        <div className="flex flex-1 flex-col p-5 md:p-6">
                          <div className="flex items-center justify-between gap-4">
                            <motion.div
                              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-inner shadow-brand/5"
                              whileHover={{
                                rotate: [0, -8, 8, 0],
                                scale: 1.08,
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="h-6 w-6" />
                            </motion.div>

                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                              Explore
                              <motion.span
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-base text-slate-700"
                                whileHover={{
                                  x: 4,
                                  rotate: -8,
                                }}
                                transition={{ duration: 0.25 }}
                              >
                                ↗
                              </motion.span>
                            </span>
                          </div>

                          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-charcoal">
                            {service.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-slate-600">
                            {service.blurb}
                          </p>

                          <div className="mt-5">
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                              Includes
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.details?.features?.map((feature) => (
                              <motion.span
                                key={feature}
                                whileHover={{ y: -2, scale: 1.03 }}
                                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition-colors group-hover:border-brand/20 group-hover:bg-brand/5"
                              >
                                {feature}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Animated progress line */}
                          <div className="mt-6 h-px overflow-hidden bg-slate-100">
                            <motion.div
                              className="h-full w-1/3 bg-gradient-to-r from-transparent via-brand to-transparent"
                              animate={{ x: ["-120%", "360%"] }}
                              transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Section>


    </>
  );
}
