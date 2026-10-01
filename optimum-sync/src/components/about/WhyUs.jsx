import { useInView } from "./useInView";
import Forming from "./Forming";
import AccentText from "./AccentText";
import WhyUsCard from "./WhyUsCard";
import { whyUs } from "./aboutData";

// id="why-us" is linked from the footer: keep it.
export default function WhyUs() {
  // One observer for the whole row: it never moves, so it always sees itself scroll into view.
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <section id="why-us" className="os-hero os-hero--flip os-bg-off-white scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="os-eyebrow">Why Optimum Sync</p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-[-0.02em] [text-wrap:balance] md:text-5xl">
          <Forming>
            <AccentText>{whyUs.title}</AccentText>
          </Forming>
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">
          <Forming>{whyUs.intro}</Forming>
        </p>

        {/* One row on desktop: the number of columns follows the number of reasons. */}
        <ul ref={ref} className="os-why-grid" style={{ "--os-cols": whyUs.items.length }}>
          {whyUs.items.map((item, i) => (
            <WhyUsCard key={item.title} item={item} index={i} inView={inView} />
          ))}
        </ul>
      </div>
    </section>
  );
}
