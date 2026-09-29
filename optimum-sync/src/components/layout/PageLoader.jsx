import { useEffect, useRef } from "react";
import gsap from "gsap";

import "../../styles/loader.css";

export default function PageLoader() {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const brandRef = useRef(null);
  const taglineRef = useRef(null);
  const lineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;

    if (!loader) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      /* =========================================
         REDUCED MOTION
      ========================================= */

      if (reducedMotion) {
        gsap.set(
          [
            logoRef.current,
            brandRef.current,
            taglineRef.current,
            lineRef.current,
          ],
          {
            opacity: 1,
            clearProps: "transform",
          }
        );

        gsap.set(lineRef.current, {
          scaleX: 1,
        });

        gsap.delayedCall(0.4, exitLoader);

        return;
      }

      /* =========================================
         INITIAL STATES
      ========================================= */

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.85,
        y: 20,
      });

      gsap.set(brandRef.current, {
        opacity: 0,
        y: 15,
      });

      gsap.set(taglineRef.current, {
        opacity: 0,
        y: 10,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center center",
      });

      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.6,
      });

      /* =========================================
         INTRO
      ========================================= */

      const intro = gsap.timeline();

      intro
        .to(glowRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          logoRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          brandRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.1"
        )
        .to({}, {
          duration: 0.35,
        })
        .call(exitLoader);

      /* =========================================
         SUBTLE LOGO FLOAT
      ========================================= */

      gsap.to(logoRef.current, {
        y: -4,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         GLOW PULSE
      ========================================= */

      gsap.to(glowRef.current, {
        opacity: 0.7,
        scale: 1.08,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         EXIT
      ========================================= */

      function exitLoader() {
        const exit = gsap.timeline({
          onComplete: () => {
            if (loader) {
              loader.style.display = "none";
            }
          },
        });

        exit
          .to(lineRef.current, {
            scaleX: 0,
            duration: 0.35,
            ease: "power2.inOut",
          })
          .to(
            [taglineRef.current, brandRef.current],
            {
              opacity: 0,
              y: -10,
              duration: 0.25,
              stagger: 0.03,
              ease: "power2.in",
            },
            "-=0.15"
          )
          .to(
            logoRef.current,
            {
              opacity: 0,
              scale: 0.94,
              duration: 0.3,
              ease: "power2.in",
            },
            "-=0.2"
          )
          .to(
            loader,
            {
              yPercent: -100,
              duration: 0.75,
              ease: "power4.inOut",
            },
            "-=0.05"
          );
      }
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="page-loader"
      aria-label="Loading Optimum Sync"
    >
      {/* =========================================
          AMBIENT LIGHT
      ========================================= */}

      <div
        ref={glowRef}
        className="page-loader__center-glow"
      />

      <div className="page-loader__ambient page-loader__ambient--blue" />
      <div className="page-loader__ambient page-loader__ambient--mint" />

      {/* =========================================
          DIGITAL GRID
      ========================================= */}

      <div
        className="page-loader__grid"
        aria-hidden="true"
      />

      {/* =========================================
          MAIN
      ========================================= */}

      <div className="page-loader__content">

        {/* Original Optimum Sync Logo */}

        <div
          ref={logoRef}
          className="page-loader__logo"
        >
          <img
            src="/images/logo_white.webp"
            alt="Optimum Sync"
          />
        </div>

        {/* Brand */}

        <div
          ref={brandRef}
          className="page-loader__brand"
        >
          <span>OPTIMUM</span>
          <span>SYNC</span>
        </div>

        {/* Tagline */}

        <p
          ref={taglineRef}
          className="page-loader__tagline"
        >
          Digital experiences. Built to move.
        </p>

        {/* Animated line */}

        <div className="page-loader__line">
          <span ref={lineRef} />

          <i className="page-loader__line-dot" />
        </div>

      </div>

      {/* =========================================
          CORNER INFORMATION
      ========================================= */}

      <div className="page-loader__corner page-loader__corner--left">
        OS / 01
      </div>

      <div className="page-loader__corner page-loader__corner--right">
        DIGITAL EXPERIENCES
      </div>

      {/* Top small indicator */}

      <div className="page-loader__status">
        <span />
        <b>OPTIMUM SYNC</b>
      </div>
    </div>
  );
}