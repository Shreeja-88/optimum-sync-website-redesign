import { CLIENT } from "../../data/homeContent";
import Forming from "../about/Forming";

const ICON = {
  phone: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></>,
  book: <><path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1z" /><path d="M12 6v13" /></>,
};

// Main client with ongoing projects.
export default function Clients() {
  return (
    <section className="section clients" aria-labelledby="clients-title">
      <div className="container">
        <div className="clients__box">
          <div className="clients__intro">
            <small>Our main client · Ongoing projects</small>
            <h2 id="clients-title"><Forming>{CLIENT.name}</Forming></h2>
            <p>{CLIENT.text}</p>
          </div>
          <ul className="clients__grid">
            {CLIENT.projects.map((p) => (
              <li key={p.title}>
                <span className="clients__pill">In progress</span>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICON[p.icon]}</svg>
                <h3>{p.title}</h3>
                <p>{p.kind}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
