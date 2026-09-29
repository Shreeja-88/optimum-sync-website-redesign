import { useEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "./useInView";

// Three signals that start out of phase and lock together as you read left to right.
// Captions are "printed" under the wave, timed to the line drawing in (see os-reveal in about.css).

const W = 1200;
const H = 240;
const STEPS = 240;
const CYCLES = 3;

const smooth = (t) => t * t * (3 - 2 * t);

function buildPath(phaseOffset, ampScale) {
  let d = "";
  for (let i = 0; i <= STEPS; i++) {
    const x = (i / STEPS) * W;
    // 0 on the left (chaos) -> 1 on the right (in sync)
    const s = smooth(Math.min(1, Math.max(0, (x / W - 0.08) / 0.55)));
    const phase = phaseOffset * (1 - s);
    const amp = 62 * (ampScale * (1 - s) + s);
    const y = H / 2 + amp * Math.sin((x / W) * CYCLES * Math.PI * 2 + phase);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

const lines = [
  { d: buildPath(2.1, 0.55), stroke: "var(--os-mint)", width: 2.25 },
  { d: buildPath(-2.5, 1.3), stroke: "var(--os-sky-blue)", width: 2 },
  { d: buildPath(0, 1), stroke: "var(--os-brand)", width: 3 },
];

// Prints its text one character at a time, starting after `delay` ms.
function TypedText({ text, delay, className }) {
  const reduced = prefersReducedMotion();
  const [started, setStarted] = useState(reduced);
  const [count, setCount] = useState(reduced ? text.length : 0);

  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setStarted(true), delay);
    return () => window.clearTimeout(t);
  }, [delay, reduced]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = window.setTimeout(() => setCount((c) => c + 1), 45);
    return () => window.clearTimeout(t);
  }, [started, count, text.length]);

  const typing = started && count < text.length;

  return (
    <p className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        {typing && <span className="os-caret" />}
        {/* Not-yet-typed letters stay in the layout but invisible, so nothing jumps around. */}
        <span style={{ visibility: "hidden" }}>{text.slice(count)}</span>
      </span>
    </p>
  );
}

// Before the wave is in view, keep the space reserved (invisible) so nothing jumps.
function Caption({ play, text, delay, n, align = "left", className }) {
  const alignClass = align === "center" ? "text-center" : align === "right" ? "text-right" : "";
  return (
    <div className={alignClass}>
      <span className="os-step-n">{n}</span>
      {play ? (
        <TypedText text={text} delay={delay} className={className} />
      ) : (
        <p className={className}>
          <span className="sr-only">{text}</span>
          <span aria-hidden="true" style={{ visibility: "hidden" }}>
            {text}
          </span>
        </p>
      )}
    </div>
  );
}

export default function SyncWaves({ steps }) {
  // replay: true = the waves and captions play again every time they scroll into view
  const { ref, inView } = useInView({ threshold: 0.4, replay: true });
  const [first, second, third] = steps;
  const caption = "text-base font-semibold leading-snug md:text-xl";

  return (
    <div ref={ref} className={`os-wave-card${inView ? " is-play" : ""}`}>
      <div className="os-wave-stage">
        <span className="os-sync-pill">In sync</span>
        <svg
          className={`os-waves${inView ? " os-waves--play" : ""} block h-40 w-full md:h-56`}
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter id="os-wave-blur-back" x="-30%" y="-80%" width="160%" height="260%">
              <feGaussianBlur stdDeviation="2.2" />
            </filter>
            <filter id="os-wave-shadow-front" x="-20%" y="-80%" width="140%" height="260%">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.28" />
            </filter>
          </defs>
          <line
            x1="0"
            y1={H / 2}
            x2={W}
            y2={H / 2}
            stroke="var(--os-slate)"
            strokeOpacity="0.35"
            strokeDasharray="4 8"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1={W * 0.63}
            y1="34"
            x2={W * 0.63}
            y2={H}
            stroke="var(--os-brand)"
            strokeOpacity="0.4"
            strokeDasharray="3 6"
            vectorEffect="non-scaling-stroke"
          />
          {lines.map((l, i) => {
            const isFront = i === lines.length - 1;
            return (
              <path
                key={i}
                d={l.d}
                fill="none"
                stroke={l.stroke}
                strokeWidth={l.width}
                strokeOpacity={isFront ? 1 : 0.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                filter={isFront ? "url(#os-wave-shadow-front)" : "url(#os-wave-blur-back)"}
              />
            );
          })}
        </svg>
      </div>

      <div className="os-steps grid grid-cols-3 gap-3 md:gap-8">
        <Caption play={inView} n="01" text={first} delay={300} className={caption} />
        <Caption
          play={inView}
          n="02"
          text={second}
          delay={900}
          align="center"
          className={`${caption} os-text-ink`}
        />
        <Caption
          play={inView}
          n="03"
          text={third}
          delay={1450}
          align="right"
          className={`${caption} os-text-brand`}
        />
      </div>
    </div>
  );
}
