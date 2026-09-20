import { useState } from "react";
import emailjs from "@emailjs/browser";

// ---- EmailJS setup ----
// 1. Sign up free at https://www.emailjs.com/
// 2. Create an Email Service (e.g. Gmail) -> get SERVICE_ID
// 3. Create an Email Template -> get TEMPLATE_ID
// 4. Get your Public Key from Account > API Keys
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const initialForm = { name: "", email: "", subject: "", message: "" };

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
    if (!form.message.trim()) newErrors.message = "Please enter a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <p className="text-text-secondary">
          Have a project in mind or a question about what we do? Send us a
          message and we'll get back to you shortly.
        </p>
        <ul className="mt-6 space-y-2 text-charcoal">
          <li>
            <span className="font-semibold">Email:</span> office@optimumsync.com
          </li>
          <li>
            <span className="font-semibold">Phone:</span> +91 99803 36484
          </li>
          <li>
            <span className="font-semibold">Location:</span>#01, 2nd Floor, NIE Startup and Incubation Center,NIE college South Campus,Mananthavadi Road, Mysuru 570008
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-charcoal">
            Subject (optional)
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-charcoal">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us a bit more..."
            className={inputClasses}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-charcoal px-8 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600">
            Thanks! Your message has been sent — we'll get back to you soon.
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
