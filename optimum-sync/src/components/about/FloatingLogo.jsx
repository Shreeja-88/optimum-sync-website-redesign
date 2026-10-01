// A 3D-feeling treatment for the two-layer logo (dark outline behind, blue bars in
// front, each at a different simulated depth via translateZ). Real CSS 3D
// (perspective + preserve-3d) means any rotateY of the whole thing makes the two
// layers shift against each other on their own (parallax) — the depth is genuine,
// not a simulated offset. A slow automatic sway shows that depth with no mouse
// needed; moving the pointer over it on desktop takes over directly.
import { useRef } from "react";

export default function FloatingLogo() {
  const floatRef = useRef(null);

  function handleMove(e) {
    const el = floatRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 .. 0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--os-tilt-x", `${(-py * 20).toFixed(2)}deg`);
    el.style.setProperty("--os-tilt-y", `${(px * 20).toFixed(2)}deg`);
    el.classList.add("is-hovering");
  }

  function handleLeave() {
    floatRef.current?.classList.remove("is-hovering");
  }

  return (
    <div className="os-logo-float-wrap">
      <div
        ref={floatRef}
        className="os-logo-float"
        role="img"
        aria-label="Optimum Sync logo"
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        <div className="os-logo-layer os-logo-layer--back">
          <img src="/images/logo-layer-dark.png" alt="" className="os-logo-float-img" />
        </div>
        <div className="os-logo-layer os-logo-layer--front">
          <img src="/images/logo-layer-blue.png" alt="" className="os-logo-float-img" />
        </div>
      </div>
      <div className="os-logo-float-shadow" aria-hidden="true" />
    </div>
  );
}
