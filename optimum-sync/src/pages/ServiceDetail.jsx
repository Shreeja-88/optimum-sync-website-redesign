import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import NotFound from "./NotFound";
import { services } from "../data/navigation";
import { serviceImages } from "./Services";
import webSaasHero from "../assets/service-heroes/web-saas-hero.png";
import mobileAppHero from "../assets/service-heroes/mobile-app-hero.png";
import customSoftwareHero from "../assets/service-heroes/custom-software-hero.png";
import ecommerceHero from "../assets/service-heroes/ecommerce-hero.png";
import aiAutomationHero from "../assets/service-heroes/ai-automation-hero.png";
import cloudDevopsHero from "../assets/service-heroes/cloud-devops-hero.png";

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  usePageTitle(service?.title, service?.blurb);

  if (!service) return <NotFound />;

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.blurb}
      backgroundImage={
        service.slug === "web-development"
          ? webSaasHero
          : service.slug === "mobile-development"
            ? mobileAppHero
            : service.slug === "custom-software"
              ? customSoftwareHero
              : service.slug === "e-commerce"
                ? ecommerceHero
                : service.slug === "ai-automation"
                  ? aiAutomationHero
                  : service.slug === "cloud-devops"
                    ? cloudDevopsHero
                    : serviceImages[service.slug]
      }
        crumbs={[
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      />

      <Section>
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {[
              "Business-focused solutions",
              "Scalable architecture",
              "Modern technology",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center text-sm font-semibold text-charcoal shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="grid gap-10 md:grid-cols-2 md:items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-charcoal">
              {service.details.heading}
            </h2>

            <p className="mt-4 text-text-secondary">
              {service.details.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.details.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <span className="text-lg">✦</span>
                  </div>
                  <p className="font-semibold text-charcoal">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-brand/10 bg-gradient-to-br from-brand/10 via-cyan-50 to-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:p-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-brand/20 bg-brand/10"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
           <div className="relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
              Build with Optimum Sync
            </span>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-charcoal">
              Turn your business idea into a digital solution.
            </h3>
          </div>
            <p className="mt-3 text-text-secondary">
              Have a project in mind? Tell us about it and let's turn your
              idea into something meaningful.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/25"
            >
              Get in touch →
            </Link>
          </motion.div>

                </motion.div>

        {/* Technologies */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-brand/[0.04] p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-charcoal">
            Technologies we use
          </h2>
          <p className="mt-3 max-w-2xl text-text-secondary">
            We use modern and reliable technologies to build scalable, secure and
            high-performance digital solutions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {service.details.technologies.map((tech) => (
              <div
                key={tech}
                className="group flex min-h-[90px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold text-charcoal shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:bg-brand/[0.03] hover:shadow-xl hover:shadow-brand/10"
              >
                <span className="transition-transform duration-300 group-hover:scale-105">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}