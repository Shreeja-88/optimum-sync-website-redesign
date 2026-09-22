import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import NotFound from "./NotFound";
import { services } from "../data/navigation";

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
        crumbs={[
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      />

      <Section>
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
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    ✓
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
            className="relative overflow-hidden rounded-3xl bg-pale-blue p-8 shadow-sm md:p-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />
            <h3 className="text-2xl font-semibold text-charcoal">
              Let's work together
            </h3>

            <p className="mt-3 text-text-secondary">
              Have a project in mind? Tell us about it and let's turn your
              idea into something meaningful.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              Get in touch →
            </Link>
          </motion.div>

                </motion.div>

        {/* Technologies */}
        <div className="mt-20 rounded-3xl bg-slate-50 p-8 md:p-10">
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
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold text-charcoal shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}