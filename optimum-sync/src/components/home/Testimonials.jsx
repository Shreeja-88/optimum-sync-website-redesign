import { useState } from "react";
import { TESTIMONIALS } from "../../data/homeContent";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section className="section voices" aria-labelledby="voices-title">
      <div className="container voices__grid">
        <div>
          <h2 id="voices-title">What our clients say about us</h2>
          <div className="voices__people" role="group" aria-label="Choose a testimonial">
            {TESTIMONIALS.map((p, idx) => (
              <button
                key={p.name} type="button"
                className={idx === i ? "is-on" : ""} aria-pressed={idx === i}
                onClick={() => setI(idx)}
              >
                <span className="voices__avatar" aria-hidden="true">{p.name[0]}</span>
                <span><strong>{p.name}</strong><small>{p.role}</small></span>
              </button>
            ))}
          </div>
        </div>

        <figure className="voices__quote" key={t.name} aria-live="polite">
          <blockquote>{t.quote}</blockquote>
          <figcaption>{t.name}, {t.role}</figcaption>
        </figure>
      </div>
    </section>
  );
}
