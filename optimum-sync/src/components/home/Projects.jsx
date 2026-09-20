import { useRef } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/homeContent";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "./Icons";

export default function Projects() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (el.firstElementChild?.offsetWidth ?? 300) * 1.05, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects__top">
          <h2 id="projects-title">Our projects</h2>
          <div className="projects__nav">
            <button type="button" aria-label="Previous projects" onClick={() => scroll(-1)}><ChevronLeft /></button>
            <button type="button" aria-label="Next projects" onClick={() => scroll(1)}><ChevronRight /></button>
          </div>
        </div>
      </div>

      <div className="projects__track" ref={track} tabIndex={0} aria-label="Project list, scrollable">
        {PROJECTS.map((p) => (
          // TODO: point to P4's case-study route once it exists
          <Link key={p.slug} to="/about" className="project" style={{ "--tint": p.tint }}>
            <div className="project__media">
              {p.image
                ? <img src={p.image} alt="" loading="lazy" />
                : <span className="project__cube" aria-hidden="true"><i /><i /><i /></span>}
              <span className="project__chip">{p.category}</span>
              <span className="project__go"><ArrowUpRight size={18} /></span>
            </div>
            <div className="project__meta">
              <strong>{p.name}</strong>
              <span>Explore project</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
