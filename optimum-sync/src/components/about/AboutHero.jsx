import { Link } from "react-router-dom";
import SyncWaves from "./SyncWaves";
import Forming from "./Forming";
import { hero } from "./aboutData";

// The last two words of the headline are shown in the accent colour.
function splitHeadline(text) {
  const words = text.split(" ");
  const cut = Math.max(1, words.length - 2);
  return { lead: words.slice(0, cut).join(" "), accent: words.slice(cut).join(" ") };
}

export default function AboutHero() {
  const { lead, accent } = splitHeadline(hero.headline);
  return (
    <section className="os-hero os-bg-off-white">
      <div className="mx-auto w-full max-w-6xl px-6 pt-24 md:px-10 md:pt-28">
        <p className="os-eyebrow">About Optimum Sync</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
          <Forming>
            {lead} <span className="os-accent-text">{accent}</span>
          </Forming>
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed">
          {hero.body.map((p) => (
            <p key={p}>
              <Forming>{p}</Forming>
            </p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="os-btn os-btn-primary" to={hero.primaryCta.to}>
            {hero.primaryCta.label}
          </Link>
          <a className="os-btn os-btn-ghost" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-6xl px-6 pb-20 md:mt-16 md:px-10 md:pb-28">
        <SyncWaves steps={hero.waveSteps} />
      </div>
    </section>
  );
}
