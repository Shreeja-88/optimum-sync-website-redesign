import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../../data/homeContent";
import Forming from "../about/Forming";
import Photo from "./Photo";
import { ArrowUpRight } from "./Icons";

const FILTERS = ["All", "Local", "International"];

// Sliding row of live client sites with Local / International filter,
// arrows, swipe, and a gentle auto-advance (paused while hovered).
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const track = useRef(null);
  const hover = useRef(false);
  const list = PROJECTS.filter((p) => filter === "All" || p.region === filter);

  const move = (dir) => {
    const el = track.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduce ? "auto" : "smooth";
    if (dir > 0 && el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) el.scrollTo({ left: 0, behavior });
    else el.scrollBy({ left: dir * ((el.firstElementChild?.offsetWidth ?? 290) + 18), behavior });
  };

  useEffect(() => { track.current?.scrollTo({ left: 0 }); }, [filter]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => { if (!hover.current) move(1); }, 4500);
    return () => clearInterval(t);
  }, [filter]);

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container wk-top">
        <div>
          <h2 id="projects-title"><Forming>Selected work</Forming></h2>
          <p className="wk-lead">Live websites and platforms we've designed and built for clients in India and around the world.</p>
        </div>
        <div className="wk-ctl">
          <div className="wk-chips" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button key={f} type="button" className={f === filter ? "is-on" : ""} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="wk-arrows">
            <button type="button" aria-label="Previous projects" onClick={() => move(-1)}>←</button>
            <button type="button" aria-label="Next projects" onClick={() => move(1)}>→</button>
          </div>
        </div>
      </div>

      <div
        className="wk-track" ref={track} tabIndex={0} aria-label="Project list, scrollable"
        onMouseEnter={() => (hover.current = true)} onMouseLeave={() => (hover.current = false)}
      >
        {list.map((p) => (
          <a key={p.slug} className="wk-card" href={`https://${p.domain}`} target="_blank" rel="noopener noreferrer">
            <div className="wk-card__media" style={{ "--fallback": p.fallback }}>
              <Photo src={p.image} />
              <span className="project__chip">{p.region} · {p.place}</span>
              <span className="project__go"><ArrowUpRight size={18} /></span>
              <strong>{p.name}</strong>
            </div>
            <span className="wk-card__link">Visit website <ArrowUpRight size={14} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}
