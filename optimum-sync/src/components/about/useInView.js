import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Tells you when an element is scrolled into view.
 *  - threshold: how much of the element must be visible (0 to 1)
 *  - replay: true = plays again every time it re-enters. false = plays once.
 */
export function useInView({ threshold = 0.3, replay = false } = {}) {
  const ref = useRef(null);
  // Skip all scroll logic for people who prefer reduced motion (or very old browsers).
  const skip = prefersReducedMotion() || typeof IntersectionObserver === "undefined";
  const [inView, setInView] = useState(skip);
  const active = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (skip || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.intersectionRatio >= threshold) {
          if (!active.current) {
            active.current = true;
            setInView(true);
            if (!replay) observer.disconnect();
          }
        } else if (replay && !entry.isIntersecting && active.current) {
          // Fully out of view: reset so it plays again next time.
          active.current = false;
          setInView(false);
        }
      },
      { threshold: [0, threshold], rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [skip, threshold, replay]);

  return { ref, inView };
}
