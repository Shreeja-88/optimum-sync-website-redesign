import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import gsap from "gsap";

import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  Cloud,
  Code2,
  Globe2,
  Menu,
  ShoppingCart,
  Smartphone,
  X,
} from "lucide-react";

import Container from "../ui/Container";
import Logo from "./Logo";
import { contact } from "../../data/navigation";

import "../../styles/navbar.css";


/* =========================================================
   NAVIGATION DATA
========================================================= */

const primaryLinks = [
  {
    label: "Home",
    to: "/",
    type: "route",
  },
  {
    label: "Services",
    to: "/services",
    type: "services",
  },
  {
    label: "Our Work",
    to: "/#projects",
    type: "hash",
  },
  {
    label: "About",
    to: "/about",
    type: "route",
  },
];


const serviceItems = [
  {
    number: "01",
    title: "Web & SaaS Development",
    description: "High-performance websites and web applications",
    to: "/services/web-development",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Mobile App Development",
    description: "Modern iOS, Android & cross-platform applications",
    to: "/services/mobile-development",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Custom Software",
    description: "Purpose-built software for your business workflows",
    to: "/services/custom-software",
    icon: Code2,
  },
  {
    number: "04",
    title: "E-Commerce",
    description: "Scalable digital commerce experiences",
    to: "/services/e-commerce",
    icon: ShoppingCart,
  },
  {
    number: "05",
    title: "AI & Automation",
    description: "Practical AI solutions and intelligent automation",
    to: "/services/ai-automation",
    icon: Bot,
  },
  {
    number: "06",
    title: "Cloud & DevOps",
    description: "Reliable cloud infrastructure and deployment workflows",
    to: "/services/cloud-devops",
    icon: Cloud,
  },
];


/* =========================================================
   ROUTE HELPERS
========================================================= */

function getIsActive(link, pathname, hash) {
  if (link.type === "services") {
    return pathname.startsWith("/services");
  }

  if (link.type === "hash") {
    return pathname === "/" && hash === "#projects";
  }

  if (link.label === "Home") {
    return pathname === "/" && hash !== "#projects";
  }

  return pathname === link.to || pathname.startsWith(`${link.to}/`);
}


/* =========================================================
   MOBILE NAV
========================================================= */

function MobileNavigation({
  open,
  onClose,
}) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const drawerRef = useRef(null);

  const [servicesExpanded, setServicesExpanded] =
    useState(pathname.startsWith("/services"));


  /* -------------------------------------------------------
     Lock page scroll while drawer is open
     Drawer itself remains scrollable.
  ------------------------------------------------------- */

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);


  /* -------------------------------------------------------
     Automatically expand services on service routes
  ------------------------------------------------------- */

  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setServicesExpanded(true);
    }
  }, [pathname]);


  /* -------------------------------------------------------
     Mobile GSAP entrance
  ------------------------------------------------------- */

  useLayoutEffect(() => {
    if (!open || !drawerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mobile-nav-header",
        {
          opacity: 0,
          y: -12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".mobile-nav-item",
        {
          opacity: 0,
          y: 18,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.055,
          delay: 0.08,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".mobile-nav-bottom",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }, drawerRef);

    return () => ctx.revert();
  }, [open]);


  const handleHashNavigation = (
    event,
    to
  ) => {
    if (!to.includes("#")) {
      onClose();
      return;
    }

    event.preventDefault();

    onClose();

    const [path, targetHash] =
      to.split("#");

    if (pathname === path) {
      window.history.pushState(
        {},
        "",
        `${path}#${targetHash}`
      );

      window.dispatchEvent(
        new HashChangeEvent("hashchange")
      );

      requestAnimationFrame(() => {
        document
          .getElementById(targetHash)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });
    } else {
      navigate(to);
    }
  };


  return (
    <div
      className={`mobile-navigation-root ${
        open ? "mobile-navigation-open" : ""
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}

      <button
        type="button"
        aria-label="Close navigation"
        className="mobile-navigation-backdrop"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />


      {/* Drawer */}

      <aside
        ref={drawerRef}
        className="mobile-navigation-drawer"
        aria-label="Mobile navigation"
      >
        <div className="mobile-navigation-orb mobile-orb-one" />
        <div className="mobile-navigation-orb mobile-orb-two" />


        <div className="mobile-navigation-content">

          {/* Header */}

          <div className="mobile-nav-header">

            <Link
              to="/"
              className="mobile-brand"
              onClick={onClose}
            >
              <span className="mobile-brand-logo">
                <Logo />
              </span>

              <span className="mobile-brand-copy">
                <strong>
                  Optimum Sync
                </strong>
              </span>
            </Link>


            <button
              type="button"
              className="mobile-close"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X />
            </button>

          </div>


          <div className="mobile-divider" />


          {/* Label */}

          <div className="mobile-nav-meta">
            <div className="mobile-nav-label">
              <span />
              Navigation
            </div>

            <span className="mobile-nav-count">
              01 — 04
            </span>
          </div>


          {/* Links */}

          <nav className="mobile-nav-list">

            {/* Home */}

            <Link
              to="/"
              onClick={onClose}
              className={`mobile-nav-item mobile-nav-link ${
                getIsActive(
                  primaryLinks[0],
                  pathname,
                  hash
                )
                  ? "mobile-nav-active"
                  : ""
              }`}
            >
              <span className="mobile-nav-index">
                01
              </span>

              <span className="mobile-nav-title">
                Home
              </span>

              <span className="mobile-nav-arrow">
                <ArrowUpRight />
              </span>
            </Link>


            {/* Services */}

            <div className="mobile-services-wrapper">

              <div
                className={`mobile-nav-item mobile-services-row ${
                  pathname.startsWith("/services")
                    ? "mobile-nav-active"
                    : ""
                }`}
              >

                <Link
                  to="/services"
                  onClick={onClose}
                  className="mobile-services-main-link"
                >
                  <span className="mobile-nav-index">
                    02
                  </span>

                  <span className="mobile-nav-title">
                    Services
                  </span>
                </Link>


                <button
                  type="button"
                  className="mobile-services-toggle"
                  onClick={() =>
                    setServicesExpanded(
                      (value) => !value
                    )
                  }
                  aria-label={
                    servicesExpanded
                      ? "Collapse services"
                      : "Expand services"
                  }
                  aria-expanded={
                    servicesExpanded
                  }
                >
                  <ChevronDown
                    className={
                      servicesExpanded
                        ? "rotate-180"
                        : ""
                    }
                  />
                </button>

              </div>


              {/* Service children */}

              <div
                className={`mobile-service-panel ${
                  servicesExpanded
                    ? "mobile-service-panel-open"
                    : ""
                }`}
              >

                <div className="mobile-service-line" />

                <div className="mobile-service-list">

                  {serviceItems.map(
                    (service) => {
                      const Icon =
                        service.icon;

                      const active =
                        pathname.startsWith(
                          service.to
                        );

                      return (
                        <Link
                          key={service.to}
                          to={service.to}
                          onClick={onClose}
                          className={`mobile-service-item ${
                            active
                              ? "mobile-service-active"
                              : ""
                          }`}
                        >

                          <span className="mobile-service-icon">
                            <Icon />
                          </span>

                          <span className="mobile-service-copy">
                            <strong>
                              {service.title}
                            </strong>

                            <small>
                              {service.description}
                            </small>
                          </span>

                          <ArrowUpRight className="mobile-service-arrow" />

                        </Link>
                      );
                    }
                  )}

                </div>
              </div>

            </div>


            {/* Our Work */}

            <Link
              to="/#projects"
              onClick={(event) =>
                handleHashNavigation(
                  event,
                  "/#projects"
                )
              }
              className={`mobile-nav-item mobile-nav-link ${
                getIsActive(
                  primaryLinks[2],
                  pathname,
                  hash
                )
                  ? "mobile-nav-active"
                  : ""
              }`}
            >
              <span className="mobile-nav-index">
                03
              </span>

              <span className="mobile-nav-title">
                Our Work
              </span>

              <span className="mobile-nav-arrow">
                <ArrowUpRight />
              </span>
            </Link>


            {/* About */}

            <Link
              to="/about"
              onClick={onClose}
              className={`mobile-nav-item mobile-nav-link ${
                getIsActive(
                  primaryLinks[3],
                  pathname,
                  hash
                )
                  ? "mobile-nav-active"
                  : ""
              }`}
            >
              <span className="mobile-nav-index">
                04
              </span>

              <span className="mobile-nav-title">
                About
              </span>

              <span className="mobile-nav-arrow">
                <ArrowUpRight />
              </span>
            </Link>

          </nav>


          {/* Bottom CTA */}

          <div className="mobile-nav-bottom">

            <Link
              to="/contact"
              onClick={onClose}
              className="mobile-project-cta"
            >

              <span className="mobile-project-copy">
                <small>
                  Have a project in mind?
                </small>

                <strong>
                  Start a Project
                </strong>
              </span>

              <span className="mobile-project-icon">
                <ArrowUpRight />
              </span>

            </Link>


            <a
              href={`mailto:${contact.email}`}
              className="mobile-email"
            >
              {contact.email}
            </a>

          </div>

        </div>
      </aside>
    </div>
  );
}


/* =========================================================
   MAIN NAVBAR
========================================================= */

export default function Navbar() {
  const { pathname, hash } =
    useLocation();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const navbarRef =
    useRef(null);

  const navRef =
    useRef(null);

  const indicatorRef =
    useRef(null);

  const linkRefs =
    useRef({});


  /* =======================================================
     CURRENT ACTIVE LINK
  ======================================================= */

  const activeLink =
    primaryLinks.find((link) =>
      getIsActive(
        link,
        pathname,
        hash
      )
    );


  /* =======================================================
     SCROLL STATE
  ======================================================= */

  useEffect(() => {
    const updateScroll =
      () => {
        setScrolled(
          window.scrollY > 18
        );
      };

    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );
  }, []);


  /* =======================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ======================================================= */

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);


  /* =======================================================
     ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleEscape =
      (event) => {
        if (
          event.key !== "Escape"
        ) {
          return;
        }

        setServicesOpen(false);
        setMobileOpen(false);
      };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleEscape
      );
  }, []);


  /* =======================================================
     NAVBAR INTRO ANIMATION
  ======================================================= */

  useLayoutEffect(() => {
    if (!navbarRef.current) {
      return;
    }

    const ctx = gsap.context(() => {

      const tl =
        gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

      tl.fromTo(
        ".navbar-brand",
        {
          opacity: 0,
          x: -18,
          filter: "blur(7px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.7,
        }
      );

      tl.fromTo(
        ".navbar-link-item",
        {
          opacity: 0,
          y: -10,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.06,
        },
        "-=0.45"
      );

      tl.fromTo(
        ".navbar-cta",
        {
          opacity: 0,
          x: 12,
          scale: 0.96,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
        },
        "-=0.35"
      );

    }, navbarRef);

    return () =>
      ctx.revert();
  }, []);


  /* =======================================================
     LIQUID ACTIVE INDICATOR
  ======================================================= */

  const updateIndicator =
    useCallback(() => {

      const indicator =
        indicatorRef.current;

      const nav =
        navRef.current;

      if (
        !indicator ||
        !nav ||
        !activeLink
      ) {
        return;
      }

      const activeElement =
        linkRefs.current[
          activeLink.to
        ];

      if (!activeElement) {
        return;
      }

      const navRect =
        nav.getBoundingClientRect();

      const linkRect =
        activeElement.getBoundingClientRect();

      const x =
        linkRect.left -
        navRect.left;

      const width =
        linkRect.width;


      gsap.to(
        indicator,
        {
          x,
          width,
          opacity: 1,
          duration: 0.55,
          ease: "elastic.out(1, 0.65)",
          overwrite: true,
        }
      );

    }, [activeLink]);


  useLayoutEffect(() => {
    updateIndicator();

    const handleResize =
      () => updateIndicator();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, [updateIndicator]);


  /* =======================================================
     KEYBOARD SERVICES
  ======================================================= */

  const handleServicesKeyDown =
    (event) => {

      if (
        event.key ===
          "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();

        setServicesOpen(
          (value) => !value
        );
      }

      if (
        event.key ===
        "Escape"
      ) {
        setServicesOpen(false);
      }
    };


  /* =======================================================
     HASH NAVIGATION
  ======================================================= */

  const handleWorkClick =
    (event) => {

      if (
        pathname === "/" &&
        hash === "#projects"
      ) {
        event.preventDefault();

        document
          .getElementById(
            "projects"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
    };


  /* =======================================================
     NAV TEXT MICRO ANIMATION
  ======================================================= */

  const handleTextEnter =
    (event) => {

      gsap.to(
        event.currentTarget,
        {
          y: -2,
          duration: 0.22,
          ease: "power2.out",
        }
      );
    };


  const handleTextLeave =
    (event) => {

      gsap.to(
        event.currentTarget,
        {
          y: 0,
          duration: 0.32,
          ease: "power3.out",
        }
      );
    };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <header
        ref={navbarRef}
        className={`navbar-wrapper ${
          scrolled
            ? "navbar-scrolled"
            : ""
        }`}
      >

        <Container className="navbar-container">

          <div className="navbar-shell">

            <div
              className="navbar-light"
              aria-hidden="true"
            />


            {/* =================================================
                BRAND
            ================================================= */}

            <Link
              to="/"
              className="navbar-brand"
              aria-label="Optimum Sync home"
            >

              <span className="navbar-logo-box">
                <Logo />
                <span className="navbar-live-dot" />
              </span>

              <span className="navbar-brand-copy">
                <strong>
                  Optimum Sync
                </strong>
              </span>

            </Link>


            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <nav
              ref={navRef}
              className="navbar-navigation"
              aria-label="Primary navigation"
            >

              <span
                ref={indicatorRef}
                className="navbar-active-indicator"
                aria-hidden="true"
              />


              {primaryLinks.map(
                (link) => {

                  const active =
                    getIsActive(
                      link,
                      pathname,
                      hash
                    );


                  /* -------------------------------------------
                     SERVICES
                  ------------------------------------------- */

                  if (
                    link.type ===
                    "services"
                  ) {

                    return (
                      <div
                        key={link.to}
                        className="navbar-link-item navbar-services"
                        onMouseEnter={() =>
                          setServicesOpen(
                            true
                          )
                        }
                        onMouseLeave={() =>
                          setServicesOpen(
                            false
                          )
                        }
                      >

                        <div className="navbar-services-trigger">

                          <Link
                            ref={(node) => {
                              linkRefs.current[
                                link.to
                              ] = node;
                            }}
                            to="/services"
                            className={`navbar-link ${
                              active
                                ? "navbar-link-active"
                                : ""
                            }`}
                            onMouseEnter={
                              handleTextEnter
                            }
                            onMouseLeave={
                              handleTextLeave
                            }
                          >
                            Services
                          </Link>


                          <button
                            type="button"
                            className="navbar-services-button"
                            aria-label="Toggle services menu"
                            aria-expanded={
                              servicesOpen
                            }
                            onClick={() =>
                              setServicesOpen(
                                (value) =>
                                  !value
                              )
                            }
                            onKeyDown={
                              handleServicesKeyDown
                            }
                          >
                            <ChevronDown
                              className={
                                servicesOpen
                                  ? "chevron-open"
                                  : ""
                              }
                            />
                          </button>

                        </div>


                        {/* =====================================
                            MEGA MENU
                        ===================================== */}

                        <div
                          className={`navbar-mega ${
                            servicesOpen
                              ? "navbar-mega-open"
                              : ""
                          }`}
                          onMouseEnter={() =>
                            setServicesOpen(
                              true
                            )
                          }
                          onMouseLeave={() =>
                            setServicesOpen(
                              false
                            )
                          }
                        >

                          <div className="mega-top">

                            <div>
                              <span className="mega-eyebrow">
                                CAPABILITIES
                              </span>

                              <h3>
                                Digital products
                                built to move
                                businesses
                                forward.
                              </h3>
                            </div>


                            <Link
                              to="/services"
                              className="mega-view-all"
                              onClick={() =>
                                setServicesOpen(
                                  false
                                )
                              }
                            >
                              View all
                              <ArrowUpRight />
                            </Link>

                          </div>


                          <div className="mega-grid">

                            {serviceItems.map(
                              (service) => {

                                const Icon =
                                  service.icon;

                                const serviceActive =
                                  pathname.startsWith(
                                    service.to
                                  );

                                return (
                                  <Link
                                    key={
                                      service.to
                                    }
                                    to={
                                      service.to
                                    }
                                    onClick={() =>
                                      setServicesOpen(
                                        false
                                      )
                                    }
                                    className={`mega-card ${
                                      serviceActive
                                        ? "mega-card-active"
                                        : ""
                                    }`}
                                  >

                                    <div className="mega-card-icon">
                                      <Icon />
                                    </div>

                                    <div className="mega-card-content">
                                      <div className="mega-card-title-row">

                                        <strong>
                                          {
                                            service.title
                                          }
                                        </strong>

                                        <span>
                                          {
                                            service.number
                                          }
                                        </span>

                                      </div>

                                      <small>
                                        {
                                          service.description
                                        }
                                      </small>
                                    </div>

                                    <ArrowUpRight className="mega-card-arrow" />

                                  </Link>
                                );
                              }
                            )}

                          </div>

                        </div>

                      </div>
                    );
                  }


                  /* -------------------------------------------
                     NORMAL LINKS
                  ------------------------------------------- */

                  return (
                    <Link
                      key={link.to}
                      ref={(node) => {
                        linkRefs.current[
                          link.to
                        ] = node;
                      }}
                      to={link.to}
                      onClick={
                        link.type === "hash"
                          ? handleWorkClick
                          : undefined
                      }
                      className={`navbar-link-item navbar-link ${
                        active
                          ? "navbar-link-active"
                          : ""
                      }`}
                      onMouseEnter={
                        handleTextEnter
                      }
                      onMouseLeave={
                        handleTextLeave
                      }
                    >
                      {link.label}
                    </Link>
                  );
                }
              )}

            </nav>


            {/* =================================================
                CTA
            ================================================= */}

            <div className="navbar-actions">

              <Link
                to="/contact"
                className="navbar-cta"
              >
                <span>
                  Start a Project
                </span>

                <ArrowUpRight />
              </Link>


              <button
                type="button"
                className="navbar-mobile-button"
                aria-label={
                  mobileOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                aria-expanded={
                  mobileOpen
                }
                onClick={() =>
                  setMobileOpen(
                    (value) =>
                      !value
                  )
                }
              >
                {mobileOpen ? (
                  <X />
                ) : (
                  <Menu />
                )}
              </button>

            </div>

          </div>

        </Container>

      </header>


      <MobileNavigation
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
      />
    </>
  );
}