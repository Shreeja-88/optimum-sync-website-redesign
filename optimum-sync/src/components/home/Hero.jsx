import { useState } from "react";
import { Link } from "react-router-dom";
import { HERO, SERVICES } from "../../data/homeContent";

// The hero's one big idea: the four services are layers of a single system,
// echoing the isometric cube in the Optimum Sync logo. Each layer wears its
// service photo. Layers drop in and lock together on load; hovering a service
// lifts its layer.
export default function Hero() {
  const [active, setActive] = useState(null);
  const current = SERVICES.find((s) => s.key === active);

  const on = (key) => () => setActive(key);
  const off = () => setActive(null);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title">{HERO.title}</h1>
          <p className="hero__lead">{HERO.text}</p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">Start a Conversation</Link>
            <a href="#projects" className="btn btn--secondary">See our work</a>
          </div>
        </div>

        <div className="stack">
          <div className="stack__stage" aria-hidden="true">
            <div className="stack__scene">
              <span className="stack__ground" />
              {SERVICES.map((s) => (
                <span
                  key={s.key}
                  className={`slab${active === s.key ? " is-active" : ""}`}
                  style={{ "--layer": s.layer, "--fill": s.fill, "--edge": s.edge, "--photo": s.image ? `url("${s.image}")` : "none" }}
                />
              ))}
            </div>
          </div>

          <ul className="stack__legend">
            {SERVICES.map((s) => (
              <li key={s.key}>
                <button
                  type="button"
                  className={active === s.key ? "is-on" : ""}
                  onMouseEnter={on(s.key)} onMouseLeave={off}
                  onFocus={on(s.key)} onBlur={off}
                >
                  <i style={{ background: s.fill }} />
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
          <p className="stack__caption" aria-live="polite">
            {current ? current.text : "Four layers, one connected system."}
          </p>
        </div>
      </div>
    </section>
  );
}
