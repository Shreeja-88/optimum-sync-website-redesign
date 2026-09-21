import { useState } from "react";
import { Link } from "react-router-dom";
import { AUDIENCE, STATS } from "../../data/homeContent";
import Photo from "./Photo";
import { Building, Shield, Briefcase, Heart, ArrowUpRight } from "./Icons";

const ICONS = { building: Building, shield: Shield, briefcase: Briefcase, heart: Heart };

// Pick an industry, and one large photo stage crossfades to it.
export default function Audience() {
  const [key, setKey] = useState(AUDIENCE[0].key);
  const current = AUDIENCE.find((a) => a.key === key);

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

        <div className="tabs" role="group" aria-label="Industries we serve">
          {AUDIENCE.map((a) => {
            const Icon = ICONS[a.icon];
            return (
              <button
                key={a.key} type="button"
                className={a.key === key ? "is-on" : ""} aria-pressed={a.key === key}
                onClick={() => setKey(a.key)}
              >
                <span className="tabs__icon"><Icon size={16} /></span>
                {a.title}
              </button>
            );
          })}
        </div>

        <div className="stage" style={{ "--fallback": current.fallback }}>
          {AUDIENCE.map((a) => (
            <Photo key={a.key} src={a.image} className={`stage__img${a.key === key ? " is-on" : ""}`} />
          ))}
          <div className="stage__copy" key={current.key} aria-live="polite">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <Link to={current.to} className="panel__link">
              Case studies <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
