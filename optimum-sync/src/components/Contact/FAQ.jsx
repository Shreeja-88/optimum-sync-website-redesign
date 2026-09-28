import { useState } from "react";

const faqs = [
  {
    q: "What does Optimum Sync do?",
    a: "We design and develop websites, mobile applications, custom software, e-commerce platforms, AI solutions, and cloud-based systems for businesses.",
  },
  {
    q: "Can you build a product from scratch?",
    a: "Yes. We can take a project from idea and requirements through design, development, testing, deployment and support.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We work with startups, entrepreneurs, growing businesses and established companies.",
  },
  {
    q: "Can you work with our existing software?",
    a: "Yes. We can improve, integrate, maintain or rebuild existing applications depending on requirements.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We can provide maintenance, updates, bug fixes, performance improvements and further development after launch.",
  },
  {
    q: "How do we start a project?",
    a: "Tell us what you're trying to build or improve. We'll discuss your requirements and determine the appropriate next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((item, i) => (
        <div key={item.q} className="py-4">
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between text-left font-semibold text-charcoal"
          >
            {item.q}
            <span className="ml-4 text-text-muted">{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <p className="mt-2 text-text-secondary">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
