import { useEffect, useRef } from "react";

// Site-wide animated background for the Home page: drifting colour glows,
// an interactive dot network that reacts to the pointer, and light pulses
// travelling along the lines. Purely decorative; static for reduced motion.
const GLOWS = [
  [0.2, 0.25, "43,182,214", 0.34, 520],
  [0.8, 0.3, "126,226,176", 0.34, 480],
  [0.5, 0.75, "10,120,176", 0.26, 560],
  [0.15, 0.85, "167,139,250", 0.22, 440],
];

export default function BgPattern() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current, cx = cv.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W, H, raf, T = 0, mx = -999, my = -999, pulses = [];
    const nodes = Array.from({ length: 95 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004, vy: (Math.random() - 0.5) * 0.0004,
      green: Math.random() < 0.35, r: 1.6 + Math.random() * 1.8, ph: Math.random() * 6.28,
    }));

    const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const leave = () => { mx = my = -999; };
    size();
    addEventListener("resize", size);
    addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);

    const draw = () => {
      T += 0.008;
      cx.clearRect(0, 0, W, H);

      GLOWS.forEach((a, i) => {
        const x = W * (a[0] + 0.14 * Math.sin(T * (0.7 + i * 0.23) + i));
        const y = H * (a[1] + 0.16 * Math.cos(T * (0.6 + i * 0.19) + i * 2));
        const g = cx.createRadialGradient(x, y, 0, x, y, a[4]);
        g.addColorStop(0, `rgba(${a[2]},${a[3]})`);
        g.addColorStop(1, `rgba(${a[2]},0)`);
        cx.fillStyle = g; cx.fillRect(0, 0, W, H);
      });

      const off = (scrollY * 0.18) % H;
      const pts = nodes.map((n) => {
        n.x = (n.x + n.vx + 1) % 1; n.y = (n.y + n.vy + 1) % 1;
        let x = n.x * W, y = (n.y * H - off + H) % H;
        const dx = mx - x, dy = my - y, d = Math.hypot(dx, dy);
        if (d < 220) { x += dx * 0.06 * (1 - d / 220); y += dy * 0.06 * (1 - d / 220); }
        return { x, y, green: n.green, r: n.r, ph: n.ph };
      });

      const edges = [];
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 155) {
            cx.strokeStyle = `rgba(10,120,176,${0.3 * (1 - d / 155)})`;
            cx.lineWidth = 1.1;
            cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke();
            if (d < 110) edges.push([a, b]);
          }
        }
        const dm = Math.hypot(a.x - mx, a.y - my);
        if (dm < 190) {
          cx.strokeStyle = `rgba(43,182,214,${0.55 * (1 - dm / 190)})`;
          cx.lineWidth = 1.4;
          cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(mx, my); cx.stroke();
        }
        const pl = 1 + 0.5 * Math.sin(T * 3 + a.ph);
        cx.fillStyle = a.green ? "rgba(40,190,130,.75)" : "rgba(10,120,176,.7)";
        cx.beginPath(); cx.arc(a.x, a.y, a.r * pl, 0, 7); cx.fill();
        cx.fillStyle = a.green ? "rgba(126,226,176,.22)" : "rgba(43,182,214,.2)";
        cx.beginPath(); cx.arc(a.x, a.y, a.r * 4 * pl, 0, 7); cx.fill();
      }

      if (edges.length && pulses.length < 14 && Math.random() < 0.16) {
        const e = edges[(Math.random() * edges.length) | 0];
        pulses.push({ a: e[0], b: e[1], t: 0 });
      }
      pulses = pulses.filter((p) => (p.t += 0.02) < 1);
      pulses.forEach((p) => {
        const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
        const g = cx.createRadialGradient(x, y, 0, x, y, 12);
        g.addColorStop(0, "rgba(255,255,255,.95)");
        g.addColorStop(0.35, "rgba(43,182,214,.8)");
        g.addColorStop(1, "rgba(43,182,214,0)");
        cx.fillStyle = g; cx.beginPath(); cx.arc(x, y, 12, 0, 7); cx.fill();
      });

      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", size);
      removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas ref={ref} className="bgpattern" aria-hidden="true" />;
}
