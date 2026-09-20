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
function Caption({ play, text, delay, className }) {
  if (!play) {
    return (
      <p className={className}>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true" style={{ visibility: "hidden" }}>
          {text}
        </span>
      </p>
    );
  }
  return <TypedText text={text} delay={delay} className={className} />;
}

export default function SyncWaves({ steps }) {
  // replay: true = the waves and captions play again every time they scroll into view
  const { ref, inView } = useInView({ threshold: 0.4, replay: true });
  const [first, second, third] = steps;
  const caption = "text-base font-semibold leading-snug md:text-2xl";

  return (
    <div ref={ref}>
      <svg
        className={`os-waves${inView ? " os-waves--play" : ""} block h-44 w-full md:h-64`}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        {lines.map((l, i) => (
          <path
            key={i}
            d={l.d}
            fill="none"
            stroke={l.stroke}
            strokeWidth={l.width}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="mt-5 grid grid-cols-3 gap-3 md:gap-8">
        <Caption play={inView} text={first} delay={300} className={caption} />
        <Caption play={inView} text={second} delay={900} className={`${caption} os-text-ink text-center`} />
        <Caption play={inView} text={third} delay={1450} className={`${caption} os-text-brand text-right`} />
      </div>
    </div>
  );
}
