import { useEffect, useState } from "react";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reduced motion: finish quickly
    if (reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgress(100);

      const timer = window.setTimeout(() => {
        setIsExiting(true);
      }, 400);

      return () => window.clearTimeout(timer);
    }

    let frame;
    let startTime = null;

    // ============================================
    // TOTAL LOADER TIME: ~2 SECONDS
    // ============================================
    const totalDuration = 2000;

    const updateProgress = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const time = Math.min(elapsed / totalDuration, 1);

      let nextProgress;

      /*
       * Staged progress
       *
       * 0%  → 15%  : Initializing
       * 15% → 55%  : Connecting systems
       * 55% → 82%  : Building experience
       * 82% → 95%  : Finalizing
       * 95% → 100% : Welcome
       */

      if (time < 0.15) {
        // 0 → 15
        const t = time / 0.15;
        nextProgress = 15 * t;
      } else if (time < 0.46) {
        // 15 → 55
        const t = (time - 0.15) / 0.31;
        nextProgress = 15 + 40 * t;
      } else if (time < 0.71) {
        // 55 → 82
        const t = (time - 0.46) / 0.25;
        nextProgress = 55 + 27 * t;
      } else if (time < 0.89) {
        // 82 → 95
        const t = (time - 0.71) / 0.18;
        nextProgress = 82 + 13 * t;
      } else {
        // 95 → 100
        const t = (time - 0.89) / 0.11;
        nextProgress = 95 + 5 * t;
      }

      setProgress(Math.floor(nextProgress));

      if (time < 1) {
        frame = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);

        /*
         * Small pause at 100%.
         * This is included in the overall experience,
         * so we don't add another 1.2 seconds here.
         */
        window.setTimeout(() => {
          setIsExiting(true);
        }, 250);
      }
    };

    frame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`page-loader ${
        isExiting ? "page-loader--exit" : ""
      }`}
      aria-label="Loading Optimum Sync"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
          ===================================================== */}

      <div className="loader-orb loader-orb--blue" />
      <div className="loader-orb loader-orb--mint" />

      {/* Moving grid */}
      <div
        className="loader-grid"
        aria-hidden="true"
      />

      {/* =====================================================
          BACKGROUND WAVES
          ===================================================== */}

      <svg
        className="loader-waves"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="loader-wave loader-wave--one"
          d="M0 300 C240 180 420 420 720 290 C1000 170 1190 360 1440 220"
        />

        <path
          className="loader-wave loader-wave--two"
          d="M0 360 C260 250 470 470 760 330 C1050 190 1190 420 1440 300"
        />
      </svg>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="loader-content">

        {/* Logo system */}
        <div className="loader-logo-system">

          {/* Rotating rings */}
          <div className="loader-ring loader-ring--outer" />
          <div className="loader-ring loader-ring--middle" />
          <div className="loader-ring loader-ring--inner" />

          {/* Glow */}
          <div className="loader-glow" />

          {/* Logo */}
          <div className="loader-logo-wrap">
            <img
              src="/images/logo_white.webp"
              alt="Optimum Sync"
              className="loader-logo"
            />
          </div>

          {/* Orbiting lights */}
          <span className="loader-orbit-dot loader-orbit-dot--one" />
          <span className="loader-orbit-dot loader-orbit-dot--two" />
        </div>

        {/* =================================================
            BRAND
            ================================================= */}

        <div className="loader-brand">
          <span className="loader-brand-word loader-brand-word--one">
            OPTIMUM
          </span>

          <span className="loader-brand-word loader-brand-word--two">
            SYNC
          </span>
        </div>

        <p className="loader-tagline">
          Digital experiences. Built to move.
        </p>

        {/* =================================================
            PROGRESS
            ================================================= */}

        <div className="loader-progress-area">

          <div className="loader-progress-top">
            <span>
              {progress < 20
                ? "INITIALIZING EXPERIENCE"
                : progress < 55
                ? "CONNECTING DIGITAL SYSTEMS"
                : progress < 82
                ? "BUILDING EXPERIENCE"
                : progress < 100
                ? "FINALIZING EXPERIENCE"
                : "WELCOME TO OPTIMUM SYNC"}
            </span>

            <span>
              {progress}%
            </span>
          </div>

          <div
            className="loader-progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label="Loading progress"
          >
            <span
              className="loader-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

        </div>
      </div>

      {/* =====================================================
          CORNER INFORMATION
          ===================================================== */}

      <div className="loader-corner loader-corner--left">
        <span>OS / 01</span>
      </div>

      <div className="loader-corner loader-corner--right">
        <span>
          BUILDING DIGITAL FUTURES
        </span>
      </div>

      {/* =====================================================
          EXIT REVEAL
          ===================================================== */}

      <div className="loader-reveal" />
    </div>
  );
}