import { useEffect, useRef, useState } from "react";

/**
 * Adds an "is visible" flag once the element scrolls into view (runs once).
 * If the user prefers reduced motion (or the browser has no IntersectionObserver),
 * the element starts as visible and no animation runs.
 *
 * const [ref, visible] = useReveal();
 * <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`} />
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  // Decide the starting value up front, not inside an effect.
  const [visible, setVisible] = useState(
    () =>
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, visible]);

  return [ref, visible];
}
