import { TICKER } from "../../data/homeContent";

function Row({ hidden }) {
  return (
    <ul className="ticker__row" aria-hidden={hidden || undefined}>
      {TICKER.map((t) => (
        <li key={t}><span className="ticker__mark" />{t}</li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" aria-label="What we do">
      <div className="ticker__track">
        <Row /><Row hidden /><Row hidden />
      </div>
    </div>
  );
}
