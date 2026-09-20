import { Link } from "react-router-dom";
import Forming from "./Forming";
import { cta } from "./aboutData";

export default function AboutCTA() {
  return (
    <section className="os-bg-pale-mint">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-32">
        <div>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] [text-wrap:balance] md:text-6xl">
            <Forming>{cta.title}</Forming>
          </h2>
          <p className="os-text-strong mt-5 max-w-xl text-lg leading-relaxed">
            <Forming>{cta.text}</Forming>
          </p>
        </div>
        <Link className="os-btn os-btn-primary justify-self-start md:justify-self-end" to={cta.button.to}>
          {cta.button.label}
        </Link>
      </div>
    </section>
  );
}
