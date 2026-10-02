import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/homeContent";
import Forming from "../about/Forming";
import Photo from "./Photo";
import { ArrowRight } from "./Icons";

// One service open at a time; the others fold into thin vertical strips.
export default function Services() {
  const [a, setA] = useState(0);
  const go = (i) => setA((i + SERVICES.length) % SERVICES.length);

  return (
    <section className="services sv" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="sv__hd">
          <div>
            <h2 id="services-title"><Forming>What we build</Forming></h2>
            <p>From your first idea to a production-ready product, we build, launch and keep improving your digital presence.</p>
          </div>
          <div className="sv__ar">
            <button type="button" aria-label="Previous service" onClick={() => go(a - 1)}>←</button>
            <button type="button" aria-label="Next service" onClick={() => go(a + 1)}>→</button>
          </div>
        </div>

        <div className="sv__car">
          {SERVICES.map((s, i) => (
            <div
              key={s.key} className={`sv__c${i === a ? " on" : ""}`} style={{ background: s.fill }}
              onClick={() => go(i)} tabIndex={i === a ? -1 : 0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go(i)}
              aria-label={i === a ? undefined : `Show ${s.title}`}
            >
              <Photo src={s.image} />
              <span className="sv__v" aria-hidden="true">{s.title}</span>
              <div className="sv__t">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link to={s.to} className="panel__link" tabIndex={i === a ? 0 : -1}>
                  Explore {s.title} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
