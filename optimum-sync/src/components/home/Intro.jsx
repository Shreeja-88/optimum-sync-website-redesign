import { INTRO, STATS } from "../../data/homeContent";
import Forming from "../about/Forming";

export default function Intro() {
  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <div>
          <h2 id="intro-title"><Forming>{INTRO.title}</Forming></h2>
          {INTRO.paragraphs.map((t) => <p key={t}>{t}</p>)}
        </div>
        <dl className="intro__stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
