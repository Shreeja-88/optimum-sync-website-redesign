import { Link } from "react-router-dom";

/* =========================================================
   FOOTER DATA
   ========================================================= */

const pages = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const services = [
  { label: "Web Development", to: "/services" },
  { label: "App Development", to: "/services" },
  { label: "Digital Marketing", to: "/services" },
  { label: "Cloud Hosting", to: "/services" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/optimum-sync/posts/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.2H3.2V20h3.3V8.2ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM20.8 13.2c0-3.55-1.9-5.2-4.45-5.2-2.05 0-2.96 1.13-3.47 1.93V8.2H9.58V20h3.3v-5.84c0-1.54.29-3.03 2.2-3.03 1.88 0 1.9 1.76 1.9 3.13V20h3.3l.52-6.8Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/optimum_sync",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.3"
          cy="6.8"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/OptimumSync",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 3H22l-6.77 7.74L23.2 21h-6.24l-4.88-6.05L6.8 21H3.7l7.24-8.28L3.15 3H9.55l4.41 5.5L18.9 3Zm-1.1 15.8h1.73L8.62 5.1H6.76L17.8 18.8Z" />
      </svg>
    ),
  },
];

/* =========================================================
   ICONS
   ========================================================= */

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M5 15 15 5" />
      <path d="M7 5h8v8" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M20 10.5c0 5-8 10-8 10s-8-5-8-10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M6.6 3.5 9 3l2 4.5-2.1 1.8a15.8 15.8 0 0 0 5.8 5.8l1.8-2.1 4.5 2-.5 2.4c-.3 1.5-1.7 2.6-3.2 2.5C10.2 19.4 4.6 13.8 4 6.7 3.9 5.2 5 3.8 6.6 3.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* BACKGROUND */}
      <div className="footer__background" aria-hidden="true">
        <div className="footer__orb footer__orb--one" />
        <div className="footer__orb footer__orb--two" />
        <div className="footer__orb footer__orb--three" />
        <div className="footer__noise" />
        <div className="footer__grid" />
      </div>


      {/* =====================================================
          SOCIAL BAR
      ===================================================== */}

      <div className="footer__social-shell">
        <div className="footer__social-inner">

          <div className="footer__social-heading">
            <span className="footer__social-dot" />
            <span>Connect with us</span>
          </div>

          <div className="footer__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="footer__social"
              >
                <span className="footer__social-icon">
                  {social.icon}
                </span>

                <span className="footer__social-name">
                  {social.label}
                </span>

                <span className="footer__social-arrow">
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>


      {/* =====================================================
    MAIN CONTENT
===================================================== */}

<div className="footer__main">

  <div className="footer__panel">

    <div className="footer__grid-content">

      {/* =================================================
          LOGO + DESCRIPTION
      ================================================= */}

      <div className="footer__brand">

        <Link to="/" className="footer__logo-link">
          <img
            src="/images/logo_white.webp"
            alt="OptimumSync"
            className="footer__logo"
          />
        </Link>

        <p className="footer__description">
          Building reliable digital experiences through thoughtful design,
          modern technology, and scalable solutions.
        </p>

      </div>


      {/* =================================================
          PAGES
      ================================================= */}

      <div className="footer__column">

        <span className="footer__column-label">
          Explore
        </span>

        <h3 className="footer__column-title">
          Pages
        </h3>

        <div className="footer__links">

          {pages.map((page) => (
            <Link
              key={page.label}
              to={page.to}
              className="footer__link"
            >
              <span>{page.label}</span>

              <span className="footer__link-arrow">
                <ArrowUpRight />
              </span>
            </Link>
          ))}

        </div>

      </div>


      {/* =================================================
          SERVICES
      ================================================= */}

      <div className="footer__column">

        <span className="footer__column-label">
          What we do
        </span>

        <h3 className="footer__column-title">
          Services
        </h3>

        <div className="footer__links">

          {services.map((service) => (
            <Link
              key={service.label}
              to={service.to}
              className="footer__link"
            >
              <span>{service.label}</span>

              <span className="footer__link-arrow">
                <ArrowUpRight />
              </span>
            </Link>
          ))}

        </div>

      </div>


      {/* =================================================
          CONTACT
      ================================================= */}

      <div className="footer__column footer__contact">

        <span className="footer__column-label">
          Reach us
        </span>

        <h3 className="footer__column-title">
          Get In Touch
        </h3>

        <div className="footer__contact-list">

          <a
            href="https://www.google.com/maps/place/Optimum+Sync+LLP/@12.279729,76.641087,17z/data=!4m6!3m5!1s0x3baf6500023480d0:0xcbb924bb227e8d56!8m2!3d12.2797294!4d76.6410865!16s%2Fg%2F11ww4gm_dj"
            target="_blank"
            rel="noreferrer"
            className="footer__contact-item"
          >
            <span className="footer__contact-icon">
              <LocationIcon />
            </span>

            <span>
              #01, 2nd Floor, NIE StartUp and Incubation
              Center, NIE College South Campus,
              Mananthavadi Road, Mysuru 570008
            </span>
          </a>


          <a
            href="tel:+919980336484"
            className="footer__contact-item"
          >
            <span className="footer__contact-icon">
              <PhoneIcon />
            </span>

            <span>
              +91 99803 36484
            </span>
          </a>


          <a
            href="mailto:office@optimumsync.com"
            className="footer__contact-item"
          >
            <span className="footer__contact-icon">
              <MailIcon />
            </span>

            <span>
              office@optimumsync.com
            </span>
          </a>

        </div>


        <Link
          to="/contact"
          className="footer__contact-link"
        >
          Start a conversation
          <ArrowUpRight />
        </Link>

      </div>

    </div>

  </div>

</div>


      {/* =====================================================
          LARGE WORDMARK
      ===================================================== */}

      <section
        className="footer__wordmark-section"
        aria-hidden="true"
      >

        <div className="footer__wordmark-glow" />

        <div className="footer__wordmark-line footer__wordmark-line--one" />
        <div className="footer__wordmark-line footer__wordmark-line--two" />

        <div className="footer__wordmark">
          {"OPTIMUMSYNC".split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="footer__letter"
              style={{
                "--letter-index": index,
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="footer__wordmark-overlay" />

      </section>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="footer__bottom">

        <p>
          © {currentYear} OptimumSync. All rights reserved.
        </p>

        <div className="footer__legal-links">

          <Link to="/privacy">
            Privacy Policy
          </Link>

          <span className="footer__legal-dot" />

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>
  );
}