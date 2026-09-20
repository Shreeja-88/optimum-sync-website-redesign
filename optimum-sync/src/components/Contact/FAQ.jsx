import { useState } from "react";

const faqs = [
  {
    q: "How quickly will I hear back after submitting the form?",
    a: "We typically respond within 1-2 business days.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes — use the Book a Consultation option to schedule a free intro call.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across a range of industries; reach out and tell us about your project.",
  },
  {
    q: "How does Optimum Sync work?",
    a: "Optimum Sync brings your essential workflows and information together in one place, helping your team stay connected and productive.",
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
