import { TESTIMONIALS } from "../../data/homeContent";
import Forming from "../about/Forming";

// All quotes visible at once in a 2-column grid.
export default function Testimonials() {
  const items = TESTIMONIALS.filter((x) => x.quote);
  if (!items.length) return null;

  return (
    <section className="section tm" aria-labelledby="voices-title">
      <div className="container">
        <h2 id="voices-title"><Forming>What our clients say</Forming></h2>
        <div className="tm__grid">
          {items.map((t) => (
            <blockquote key={t.name} className="tm__card">
              <p>“{t.quote}”</p>
              <div className="tm__au">
                <span aria-hidden="true">{t.name[0]}</span>
                <cite><b>{t.name}</b>{t.role}</cite>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
