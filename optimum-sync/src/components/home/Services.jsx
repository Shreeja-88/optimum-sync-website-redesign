import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/homeContent";
import { ArrowRight } from "./Icons";

export default function Services() {
  const [key, setKey] = useState(SERVICES[0].key);
  const current = SERVICES.find((s) => s.key === key);

  return (
    <section className="services" aria-labelledby="services-title">
      <div className="container">
        <div className="services__top">
          <h2 id="services-title">What we offer</h2>
          <p>
            We bring deep passion and creative problem solving to every client,
            pushing the boundaries of what forward-thinking brands can do.
          </p>
          <Link to="/contact" className="btn btn--secondary">Let's talk</Link>
        </div>

        <div className="services__body">
          <ul className="services__list">
            {SERVICES.map((s) => (
              <li key={s.key}>
                <button
                  type="button"
                  className={s.key === key ? "is-on" : ""}
                  aria-pressed={s.key === key}
                  onClick={() => setKey(s.key)}
                  onMouseEnter={() => setKey(s.key)}
                  onFocus={() => setKey(s.key)}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>

          <div
            className="services__panel" aria-live="polite"
            style={{ "--tint": current.tint, "--fill": current.fill, "--edge": current.edge }}
          >
            <div className="services__glyph" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div key={current.key} className="services__detail">
              <h3>{current.title}</h3>
              <p>{current.text}</p>
              <Link to={current.to} className="panel__link">
                Explore {current.title} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
