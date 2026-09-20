import { useState } from "react";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";
import { AUDIENCE, STATS } from "../../data/homeContent";
import { Building, Shield, Briefcase, Heart, ArrowUpRight } from "./Icons";

const ICONS = { building: Building, shield: Shield, briefcase: Briefcase, heart: Heart };

export default function Audience() {
  const [open, setOpen] = useState(AUDIENCE[0].key);
  const [ref, visible] = useReveal(0.2);

  return (
    <section className="section audience" aria-labelledby="audience-title">
      <div className="container">
        <div className="audience__top">
          <div>
            <h2 id="audience-title">Empowering business through innovation.</h2>
            <p>We partner with ambitious brands to create digital products that define the future.</p>
          </div>
          <dl className="stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="panels" ref={ref}>
          {AUDIENCE.map((a, i) => {
            const isOpen = open === a.key;
            const Icon = ICONS[a.icon];
            return (
              <article
                key={a.key}
                className={`panel reveal${visible ? " is-visible" : ""}${isOpen ? " is-open" : ""}`}
                style={{ "--tint": a.tint, "--edge": a.edge, "--i": i }}
              >
                <button
                  type="button" className="panel__head"
                  aria-expanded={isOpen} aria-controls={`panel-${a.key}`}
                  onClick={() => setOpen(a.key)} onMouseEnter={() => setOpen(a.key)}
                >
                  <span className="panel__icon"><Icon size={22} /></span>
                  <span className="panel__title">{a.title}</span>
                </button>
                <div className="panel__body" id={`panel-${a.key}`} aria-hidden={!isOpen}>
                  <p>{a.text}</p>
                  <Link to={a.to} tabIndex={isOpen ? 0 : -1} className="panel__link">
                    Case studies <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
