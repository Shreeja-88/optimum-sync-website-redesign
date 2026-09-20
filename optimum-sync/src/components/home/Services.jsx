import { Link } from "react-router-dom";
import { SERVICES } from "../../data/homeContent";
import Photo from "./Photo";
import { ArrowRight } from "./Icons";

// Each service is a card that stacks on top of the previous one as you
// scroll (pure CSS sticky), echoing the "layers" in the hero.
export default function Services() {
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

        <ul className="services__cards">
          {SERVICES.map((s, i) => (
            <li
              key={s.key} className="svc"
              style={{ "--i": i, "--tint": s.tint, "--edge": s.edge, "--fill": s.fill }}
            >
              <div className="svc__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link to={s.to} className="panel__link">
                  Explore {s.title} <ArrowRight size={18} />
                </Link>
              </div>
              <div className="svc__media" aria-hidden="true">
                <Photo src={s.image} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
