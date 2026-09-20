import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

// Banner at the top of inner pages so About / Services / Blog / Contact look consistent.
// <PageHeader title="Our services" subtitle="..." crumbs={[{ label: "Services" }]} />

export default function PageHeader({
  title,
  subtitle,
  crumbs = [],
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-pale-blue">
      {/* Animated background glow */}
      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-80
          w-80
          rounded-full
          bg-mint/30
          blur-3xl
        "
      />

      {/* Subtle floating glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-10
          top-10
          h-40
          w-40
          rounded-full
          bg-brand/5
          blur-3xl
        "
      />

      <Container className="relative py-14 md:py-20">

        {/* Breadcrumb */}
        {crumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="
              mb-4
              flex
              flex-wrap
              items-center
              gap-1
              text-sm
              text-text-secondary
            "
          >
            <Link
              to="/"
              className="
                transition-colors
                duration-300
                hover:text-brand
              "
            >
              Home
            </Link>

            {crumbs.map((c, index) => (
              <motion.span
                key={c.label}
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + index * 0.1,
                }}
                className="flex items-center gap-1"
              >
                <ChevronRight
                  className="
                    h-4
                    w-4
                    text-text-muted
                  "
                />

                {c.to ? (
                  <Link
                    to={c.to}
                    className="
                      transition-colors
                      duration-300
                      hover:text-brand
                    "
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className="font-medium text-charcoal"
                  >
                    {c.label}
                  </span>
                )}
              </motion.span>
            ))}
          </motion.nav>
        )}

        {/* Title */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              max-w-3xl
              text-4xl
              font-extrabold
              tracking-tight
              text-charcoal
              md:text-5xl
            "
          >
            {title}
          </motion.h1>
        </div>

        {/* Animated accent line */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 55,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.55,
            ease: "easeOut",
          }}
          className="
            mt-4
            h-1
            rounded-full
            bg-brand
          "
        />

        {/* Subtitle */}
        {subtitle && (
          <div className="overflow-hidden">
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-4
                max-w-2xl
                text-lg
                text-text-secondary
              "
            >
              {subtitle}
            </motion.p>
          </div>
        )}

        {/* Buttons / children */}
        {children && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.85,
            }}
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {children}
          </motion.div>
        )}
      </Container>
    </section>
  );
}