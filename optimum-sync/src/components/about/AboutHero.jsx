import { Link } from "react-router-dom";
import SyncWaves from "./SyncWaves";
import Forming from "./Forming";
import { hero } from "./aboutData";

export default function AboutHero() {
  return (
    <section className="os-bg-off-white">
      <div className="mx-auto w-full max-w-6xl px-6 pt-28 md:px-10 md:pt-36">
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.02em] [text-wrap:balance] sm:text-5xl md:text-6xl">
          <Forming>{hero.headline}</Forming>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          <Forming>{hero.intro}</Forming>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="os-btn os-btn-primary" to={hero.primaryCta.to}>
            {hero.primaryCta.label}
          </Link>
          <a className="os-btn os-btn-ghost" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-6xl px-6 pb-20 md:mt-20 md:px-10 md:pb-28">
        <SyncWaves steps={hero.waveSteps} />
      </div>
    </section>
  );
}
