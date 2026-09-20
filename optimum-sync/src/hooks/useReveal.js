import { useEffect, useRef, useState } from "react";

/**
 * Adds an "is visible" flag once the element scrolls into view (runs once).
 * Skips the animation entirely if the user prefers reduced motion.
 *
 * const [ref, visible] = useReveal();
 * <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`} />
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

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
  }, [threshold]);

  return [ref, visible];
}
