import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import Container from "../ui/Container";
import Logo from "./Logo";
import { navLinks, contact } from "../../data/navigation";


/* =========================================================
   PRIMARY LINKS
   ========================================================= */

const primaryNavLinks = navLinks.filter(
  (link) => link.to !== "/contact"
);


/* =========================================================
   ROUTE CHECK
   ========================================================= */

function isRouteActive(path, currentPath) {

  if (path === "/") {
    return currentPath === "/";
  }

  if (path === "/services") {
    return currentPath.startsWith("/services");
  }

  return currentPath.startsWith(path);
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function MobileMenu({
  open,
  onClose,
}) {

  const { pathname } = useLocation();

  return (
    <div
      className={`os-mobile ${
        open ? "os-mobile--open" : ""
      }`}
    >

      {/* Background */}

      <div
        className="os-mobile__backdrop"
        onClick={onClose}
      />


      {/* Panel */}

      <div className="os-mobile__panel">

        {/* Top */}

        <div className="os-mobile__top">

          <Link
            to="/"
            onClick={onClose}
            className="os-mobile__logo"
          >
            <Logo className="h-9" />
          </Link>


          <button
            type="button"
            onClick={onClose}
            className="os-mobile__close"
            aria-label="Close navigation"
          >
            <X />
          </button>

        </div>


        {/* Label */}

        <div className="os-mobile__eyebrow">

          <span />

          MENU

        </div>


        {/* Navigation */}

        <nav className="os-mobile__links">

          {primaryNavLinks.map(
            (link, index) => {

              const active =
                isRouteActive(
                  link.to,
                  pathname
                );

              return (

                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={onClose}
                  className={`os-mobile__link ${
                    active
                      ? "os-mobile__link--active"
                      : ""
                  }`}
                  style={{
                    "--delay":
                      `${index * 80}ms`,
                  }}
                >

                  <span className="os-mobile__number">
                    0{index + 1}
                  </span>

                  <span>
                    {link.label}
                  </span>

                  <ArrowUpRight />

                </NavLink>

              );

            }
          )}

        </nav>


        {/* Bottom */}

        <div className="os-mobile__bottom">

          <Link
            to="/contact"
            onClick={onClose}
            className="os-mobile__project"
          >

            <span>
              Start a project
            </span>

            <span>
              <ArrowUpRight />
            </span>

          </Link>


          <a
            href={`mailto:${contact.email}`}
            className="os-mobile__email"
          >
            {contact.email}
          </a>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   NAVBAR
   ========================================================= */

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const { pathname } =
    useLocation();


  /* =====================================================
     SCROLL
     ===================================================== */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 40
      );

    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* =====================================================
     CLOSE MENU ON ROUTE
     ===================================================== */

  useEffect(() => {

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);

  }, [pathname]);


  /* =====================================================
     ESCAPE
     ===================================================== */

  useEffect(() => {

    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow =
      "hidden";

    const handleKey = (event) => {

      if (event.key === "Escape") {
        setMenuOpen(false);
      }

    };

    document.addEventListener(
      "keydown",
      handleKey
    );

    return () => {

      document.body.style.overflow = "";

      document.removeEventListener(
        "keydown",
        handleKey
      );

    };

  }, [menuOpen]);


  return (
    <>

      <header
        className={`os-navbar ${
          scrolled
            ? "os-navbar--scrolled"
            : ""
        }`}
      >

        <Container>

          <div className="os-navbar__row">


            {/* =================================================
                LOGO AREA
            ================================================= */}

            <Link
              to="/"
              className="os-navbar__brand"
              aria-label="Optimum Sync"
            >

              <div className="os-navbar__logo-wrap">

                <Logo className="os-navbar__logo" />

              </div>


              <div className="os-navbar__brand-line" />

            </Link>


            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <nav
              className="os-navbar__nav"
              aria-label="Main navigation"
            >

              {primaryNavLinks.map(
                (link) => {

                  const active =
                    isRouteActive(
                      link.to,
                      pathname
                    );

                  return (

                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === "/"}
                      className={`os-navbar__link ${
                        active
                          ? "os-navbar__link--active"
                          : ""
                      }`}
                    >

                      <span className="os-navbar__link-text">
                        {link.label}
                      </span>

                      <span className="os-navbar__link-dot" />

                    </NavLink>

                  );

                }
              )}

            </nav>


            {/* =================================================
                RIGHT
            ================================================= */}

            <div className="os-navbar__right">


              {/* Desktop contact */}

              <Link
                to="/contact"
                className="os-navbar__contact"
              >

                <span>
                  Let's Talk
                </span>

                <span className="os-navbar__contact-arrow">
                  <ArrowUpRight />
                </span>

              </Link>


              {/* Mobile */}

              <button
                type="button"
                className="os-navbar__menu"
                onClick={() =>
                  setMenuOpen(
                    (value) => !value
                  )
                }
                aria-label={
                  menuOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={menuOpen}
              >

                {menuOpen ? (
                  <X />
                ) : (
                  <Menu />
                )}

              </button>

            </div>

          </div>


          {/* =================================================
              BOTTOM ACCENT
          ================================================= */}

          <div className="os-navbar__accent">

            <span />

          </div>

        </Container>

      </header>


      <MobileMenu
        open={menuOpen}
        onClose={() =>
          setMenuOpen(false)
        }
      />

    </>
  );
}