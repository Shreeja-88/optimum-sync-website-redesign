import { FAQ } from "../../data/homeContent";
import Forming from "../about/Forming";

export default function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__wrap">
        <h2 id="faq-title"><Forming>Frequently asked questions</Forming></h2>
        <div className="faq__list">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
