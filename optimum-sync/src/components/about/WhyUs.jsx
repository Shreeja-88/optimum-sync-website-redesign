import Forming from "./Forming";
import { whyUs } from "./aboutData";

// id="why-us" is linked from the footer: keep it.
export default function WhyUs() {
  return (
    <section id="why-us" className="os-bg-off-white scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-[-0.02em] [text-wrap:balance] md:text-5xl">
          <Forming>{whyUs.title}</Forming>
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">
          <Forming>{whyUs.intro}</Forming>
        </p>

        {/* One row on desktop: the number of columns follows the number of reasons. */}
        <ul className="os-why-grid" style={{ "--os-cols": whyUs.items.length }}>
          {whyUs.items.map((item) => (
            <li key={item.title} className="os-why-card">
              <div className={`os-why-media${item.image ? "" : " os-why-media--empty"}`}>
                {item.image ? (
                  <img src={item.image} alt={item.imageAlt ?? ""} loading="lazy" />
                ) : (
                  <span aria-hidden="true">Image goes here (see aboutData.js)</span>
                )}
              </div>
              <div className="os-why-body">
                <h3 className="os-why-title">
                  <Forming>{item.title}</Forming>
                </h3>
                <p className="os-why-text">
                  <Forming>{item.text}</Forming>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
