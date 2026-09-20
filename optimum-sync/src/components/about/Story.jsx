import Forming from "./Forming";
import { story } from "./aboutData";

export default function Story() {
  return (
    <section className="os-bg-pale-blue os-text-strong">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-10 md:px-10 md:py-28">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] [text-wrap:balance] md:col-span-5 md:text-5xl">
          <Forming>{story.title}</Forming>
        </h2>

        <ul className="os-rules md:col-span-7">
          {story.pillars.map((item) => (
            <li key={item.label} className="py-8">
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="mt-3 text-lg leading-relaxed md:text-xl">
                <Forming>{item.text}</Forming>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
