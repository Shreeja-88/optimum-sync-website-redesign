import Forming from "./Forming";
import { workflow } from "./aboutData";

export default function Process() {
  const last = workflow.steps.length - 1;
  return (
    <section className="os-bg-charcoal">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="os-eyebrow">How we work</p>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">
          <Forming>
            <span className="os-accent-text">{workflow.title}</span>
          </Forming>
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">
          <Forming>{workflow.intro}</Forming>
        </p>

        {/* 1 column on phones, 3 on tablets (two rows), all 6 in one row on large screens. */}
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-6">
          {workflow.steps.map((step, i) => (
            <li key={step.title} className="relative">
              {i < last && (
                <span
                  aria-hidden="true"
                  className="absolute left-14 top-5 hidden h-px w-[calc(100%-3.5rem+2rem)] bg-white/25 lg:block"
                />
              )}
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                  i === last ? "os-node-final" : "border border-white/40 text-white"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold">
                <Forming>{step.title}</Forming>
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed">
                <Forming>{step.text}</Forming>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
