import Forming from "./Forming";
import { workflow } from "./aboutData";

export default function Process() {
  const last = workflow.steps.length - 1;
  return (
    <section className="os-bg-charcoal">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.02em] md:text-5xl">
          <Forming>{workflow.title}</Forming>
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">
          <Forming>{workflow.intro}</Forming>
        </p>

        <ol className="mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
          {workflow.steps.map((step, i) => (
            <li key={step.title} className="relative">
              {i < last && (
                <span
                  aria-hidden="true"
                  className="absolute left-14 top-5 hidden h-px w-[calc(100%-3.5rem+2rem)] bg-white/25 md:block"
                />
              )}
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                  i === last ? "os-node-final" : "border border-white/40 text-white"
                }`}
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold">
                <Forming>{step.title}</Forming>
              </h3>
              <p className="mt-2 leading-relaxed">
                <Forming>{step.text}</Forming>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
