import { useEffect, useRef, useState } from "react";

// Placeholder stats — swap these numbers for real ones once the team has them.
const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 24, suffix: "hr", label: "Avg. response time" },
  { value: 20, suffix: "", label: "Team members" },
];

function useCountUp(target, shouldStart, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = null;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [shouldStart, target, duration]);

  return value;
}

function StatItem({ value, suffix, label, shouldStart }) {
  const count = useCountUp(value, shouldStart);
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-gray-300">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} shouldStart={visible} />
      ))}
    </div>
  );
}
