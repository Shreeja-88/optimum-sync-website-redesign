import Forming from "./Forming";

// One card. `inView` comes from the parent, which watches the row as a whole
// (watching each card individually breaks: a card sitting far to the right,
// already pushed off-screen by its own "hidden" transform, can never be seen
// arriving by a scroll-watcher looking at that same card).
export default function WhyUsCard({ item, index, inView }) {
  return (
    <li
      className={`os-why-card os-slide-in${inView ? " is-in" : ""}`}
      style={{ transitionDelay: `${index * 220}ms` }}
    >
      <div className={`os-why-media${item.image ? "" : " os-why-media--empty"}`}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.imageAlt ?? ""}
            loading="lazy"
            style={{ objectPosition: item.imagePosition ?? "center" }}
          />
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
  );
}
