import { Link } from "react-router-dom";
import { HERO } from "../../data/homeContent";
import FloatingLogo from "../about/FloatingLogo";
import Photo from "./Photo";

// Team photo with the same floating 3D logo used on the About page.
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title">{HERO.title}</h1>
          <p className="hero__lead">{HERO.text}</p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">Start a Project →</Link>
            <a href="#projects" className="btn btn--secondary">Explore Our Work →</a>
          </div>
          <p className="hero__tags">{HERO.tags}</p>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <Photo src={HERO.photo} alt="Optimum Sync team celebrating a project win" />
          </div>
          <div className="hero__logo"><FloatingLogo /></div>
        </div>
      </div>
    </section>
  );
}
