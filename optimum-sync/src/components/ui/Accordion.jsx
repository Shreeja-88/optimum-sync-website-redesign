import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

// FAQ / process steps.
// <Accordion items={[{ q: "How long does it take?", a: "Usually 4 to 8 weeks." }]} />
// allowMultiple: several items open at once. defaultOpen: index to open first (null = all closed).
export default function Accordion({ items, allowMultiple = false, defaultOpen = 0 }) {
  const uid = useId();
  const [open, setOpen] = useState(defaultOpen === null ? [] : [defaultOpen]);

  const toggle = (i) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : allowMultiple ? [...prev, i] : [i]));

  return (
    <div className="divide-y divide-light-gray rounded-xl border border-light-gray bg-white">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={item.q}>
            <h3>
              <button
                id={`${uid}-btn-${i}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${uid}-panel-${i}`}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-charcoal transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
              >
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand" : ""}`} />
              </button>
            </h3>
            <div
              id={`${uid}-panel-${i}`}
              role="region"
              aria-labelledby={`${uid}-btn-${i}`}
              className={`grid transition-[grid-template-rows,visibility] duration-300 ${
                isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-relaxed text-text-secondary">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
