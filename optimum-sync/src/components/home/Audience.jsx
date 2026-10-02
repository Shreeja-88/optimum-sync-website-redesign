import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AUDIENCE } from "../../data/homeContent";
import Forming from "../about/Forming";
import Photo from "./Photo";
import { Building, Shield, Briefcase, Heart, ArrowUpRight } from "./Icons";

const ICONS = { building: Building, shield: Shield, briefcase: Briefcase, heart: Heart };

// Pick an industry, and one large photo stage crossfades to it.
// With no click for 5 seconds it moves to the next industry on its own.
export default function Audience() {
  const [key, setKey] = useState(AUDIENCE[0].key);
  const current = AUDIENCE.find((a) => a.key === key);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      const i = AUDIENCE.findIndex((a) => a.key === key);
      setKey(AUDIENCE[(i + 1) % AUDIENCE.length].key);
    }, 5000);
    return () => clearTimeout(t); // any click changes `key`, which restarts the 5s wait
  }, [key]);

  return (
    <section className="section audience" aria-labelledby="audience-title">
      <div className="container">
        <div className="audience__top">
          <div>
            <h2 id="audience-title"><Forming>Built for businesses at every stage.</Forming></h2>
            <p>Whether you're starting out or scaling up, we work as your technology partner.</p>
          </div>
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
            {current.more && <p className="stage__more">{current.more}</p>}
            {current.points && (
              <ul className="stage__points">
                {current.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
            <Link to={current.to} className="panel__link">
              Case studies <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
