// The logo assembles itself once, the moment the hero appears (left piece from
// the left, the two blue bars from the right, slightly offset from each other),
// then settles into the same gentle 3D float as before. After that first
// assembly it never replays — it's an arrival, not a tic.
import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function FloatingLogo() {
  const floatRef = useRef(null);
  const [assembled, setAssembled] = useState(prefersReducedMotion());

  useEffect(() => {
    if (assembled) return;
    const t = window.setTimeout(() => setAssembled(true), 50); // next tick, so the "from" state paints first
    return () => window.clearTimeout(t);
  }, [assembled]);

  function handleMove(e) {
    const el = floatRef.current;
    if (!el || !assembled) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--os-tilt-x", `${(-py * 20).toFixed(2)}deg`);
    el.style.setProperty("--os-tilt-y", `${(px * 20).toFixed(2)}deg`);
    el.classList.add("is-hovering");
  }

  function handleLeave() {
    floatRef.current?.classList.remove("is-hovering");
  }

  return (
    <div className={`os-logo-float-wrap${assembled ? " is-assembled" : ""}`}>
      <div
        ref={floatRef}
        className={`os-logo-float${assembled ? " is-assembled" : ""}`}
        role="img"
        aria-label="Optimum Sync logo"
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        <div className="os-logo-piece os-logo-piece--dark">
          <img src="/images/logo-piece-dark.png" alt="" className="os-logo-float-img" />
        </div>
        <div className="os-logo-piece os-logo-piece--bar1">
          <img src="/images/logo-piece-bar1.png" alt="" className="os-logo-float-img" />
        </div>
        <div className="os-logo-piece os-logo-piece--bar2">
          <img src="/images/logo-piece-bar2.png" alt="" className="os-logo-float-img" />
        </div>
      </div>
      <div className="os-logo-float-shadow" aria-hidden="true" />
    </div>
  );
}
