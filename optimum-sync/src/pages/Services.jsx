
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { services } from "../data/navigation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
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
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <PageHeader
          title="Our services"
          subtitle="What we build for you."
          crumbs={[{ label: "Services" }]}
        />
      </motion.div>

      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <Card
                    className="
                      relative h-full min-h-[280px]
                      overflow-hidden
                      border border-slate-200
                      bg-white
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:border-brand/30
                      hover:shadow-[0_25px_60px_rgba(32,159,227,0.15)]
                    "
                  >
                    {/* Large background number */}
                    <span
                      className="
                        pointer-events-none
                        absolute
                        -right-3
                        -top-10
                        select-none
                        text-[150px]
                        font-bold
                        leading-none
                        text-slate-100
                        transition-all
                        duration-700
                        group-hover:-translate-x-4
                        group-hover:text-brand/10
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Gradient glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-32
                        -right-32
                        h-64
                        w-64
                        rounded-full
                        bg-brand/10
                        blur-3xl
                        opacity-0
                        transition-all
                        duration-700
                        group-hover:opacity-100
                        group-hover:scale-150
                      "
                    />

                    {/* Top accent */}
                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        h-1
                        w-0
                        bg-brand
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: -5,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-brand/10
                          text-brand
                          transition-all
                          duration-500
                          group-hover:bg-brand
                          group-hover:text-white
                          group-hover:shadow-lg
                          group-hover:shadow-brand/30
                        "
                      >
                        <Icon className="h-8 w-8" />
                      </motion.div>

                      {/* Title */}
                      <h2
                        className="
                          mt-7
                          text-2xl
                          font-semibold
                          tracking-tight
                          text-charcoal
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-brand
                        "
                      >
                        {service.title}
                      </h2>

                      {/* Description */}
                      <p
                        className="
                          mt-3
                          max-w-md
                          text-sm
                          leading-6
                          text-text-secondary
                        "
                      >
                        {service.blurb}
                      </p>

                      {/* Bottom action */}
                      <div
                        className="
                          mt-8
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <span
                          className="
                            text-sm
                            font-semibold
                            text-charcoal
                            transition-colors
                            duration-300
                            group-hover:text-brand
                          "
                        >
                          Explore service
                        </span>

                        {/* Circular arrow */}
                        <motion.div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-slate-200
                            text-lg
                            text-charcoal
                            transition-all
                            duration-500
                            group-hover:border-brand
                            group-hover:bg-brand
                            group-hover:text-white
                          "
                          whileHover={{
                            rotate: -45,
                            scale: 1.1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                          }}
                        >
                          ↗
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </>
  );
}
