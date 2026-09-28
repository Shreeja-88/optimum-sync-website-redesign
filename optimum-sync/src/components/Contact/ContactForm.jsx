import { useState } from "react";
import emailjs from "@emailjs/browser";
import EnvelopeIllustration from "./EnvelopeIllustration";


const SERVICE_ID = "service_tzm0ida";
const TEMPLATE_ID = "template_yfpxjes";
const PUBLIC_KEY = "ueaY0EZ_esh5vIFhV";

const SERVICE_OPTIONS = [
  "Website",
  "Mobile App",
  "Custom Software",
  "E-Commerce",
  "AI & Automation",
  "Cloud / DevOps",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under ₹1 Lakh",
  "₹1–5 Lakhs",
  "₹5–10 Lakhs",
  "₹10+ Lakhs",
  "Not sure yet",
];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  budget: "",
  website: "", // honeypot field — real users never fill this in
};

const inputClasses =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-charcoal placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-pale-blue";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.service) newErrors.service = "Please select what you need help with";
    if (!form.message.trim()) newErrors.message = "Please tell us about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check: bots fill every field, including hidden ones.
    // A human never sees or fills this field, so if it has a value, silently
    // pretend success without actually sending anything.
    if (form.website) {
      setStatus("success");
      setForm(initialForm);
      return;
    }

    if (!validate()) return;

    setStatus("sending");
    try {
      // eslint-disable-next-line no-unused-vars
const { website, ...payload } = form;
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
      <div className="hidden md:block">
        <EnvelopeIllustration />
        <p className="mt-6 text-text-secondary">
          Tell us what you're building, and our team will get back to you
          with the right next step.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field — visually hidden, skipped by screen readers and real users */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-charcoal">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClasses}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="company" className="mb-1 block text-sm font-medium text-charcoal">
              Business / Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Company name (optional)"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-charcoal">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClasses}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-charcoal">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number (optional)"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium text-charcoal">
            What do you need help with?
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-charcoal">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="What are you trying to build, improve, automate, or scale?"
            className={inputClasses}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="mb-1 block text-sm font-medium text-charcoal">
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select a range</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-charcoal px-8 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Project Inquiry →"}
        </button>

        <p className="text-xs text-text-muted">
          We'll never share your project details with anyone else.
        </p>

        {status === "success" && (
          <p className="text-sm text-green-600">
            Thanks — your message is in. We'll reply within one business day.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </form>
    </div>
  );
}
