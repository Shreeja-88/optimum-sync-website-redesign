import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";
import { PROJECTS } from "../../data/homeContent";
import Photo from "./Photo";
import { ArrowUpRight } from "./Icons";

// A photo-led mosaic: the first project is featured large.
export default function Projects() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Our projects</h2>
        <div className="bento" ref={ref}>
          {PROJECTS.map((p, i) => (
            // TODO: point to P4's case-study route once it exists
            <Link
              key={p.slug} to="/about"
              className={`project reveal${visible ? " is-visible" : ""}`}
              style={{ "--i": i, "--fallback": p.fallback }}
            >
              <Photo src={p.image} />
              <span className="project__chip">{p.category}</span>
              <span className="project__go"><ArrowUpRight size={18} /></span>
              <span className="project__meta">
                <strong>{p.name}</strong>
                <span>Explore project</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
