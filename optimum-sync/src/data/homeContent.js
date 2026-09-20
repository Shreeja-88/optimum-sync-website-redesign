// All Home page content lives here so copy edits never touch the components.
// Text below is taken from the current optimumsync.com unless marked TODO.

export const HERO = {
  title: "Innovative Solutions for a Future-Driven World.",
  text: "We architect intelligent digital experiences that empower forward-thinking brands to thrive in a rapidly evolving connected world.",
};

// `layer` = position in the hero stack (0 = bottom / foundation).
// TODO: confirm the /services/... routes with P3.
export const SERVICES = [
  {
    key: "web", layer: 1, title: "Web Development", to: "/services/web-development",
    text: "Responsive, high-performance websites tailored to your unique brand needs.",
    fill: "linear-gradient(135deg, #209fe3, #38bdf8)", edge: "#209fe3", tint: "#e6f7ff",
  },
  {
    key: "app", layer: 2, title: "App Development", to: "/services/mobile-development",
    text: "Intuitive mobile applications designed for seamless user experiences on iOS and Android.",
    fill: "linear-gradient(135deg, #5eead4, #a7f3d0)", edge: "#5eead4", tint: "#e8fbf6",
  },
  {
    key: "marketing", layer: 3, title: "Digital Marketing", to: "/services/digital-marketing",
    text: "Data-driven strategies to boost your online presence and accelerate growth.",
    fill: "linear-gradient(135deg, #c7d2fe, #a78bfa)", edge: "#a78bfa", tint: "#eef0ff",
  },
  {
    key: "cloud", layer: 0, title: "Cloud Hosting", to: "/services/cloud-hosting",
    text: "Secure and scalable cloud hosting infrastructure for modern enterprises.",
    fill: "linear-gradient(135deg, #93c5fd, #c7d2fe)", edge: "#93c5fd", tint: "#e3efff",
  },
];

export const TICKER = ["App Development", "IT Consulting", "Software Development", "Cloud Solutions"];

export const STATS = [
  { value: "4.5/5", label: "Client ratings" },
  { value: "15+", label: "Projects launched" },
];

// Only Enterprise text was visible in the recording.
// TODO: replace the other three descriptions with the live-site wording.
export const AUDIENCE = [
  { key: "enterprise", title: "Enterprise", icon: "building", to: "/about", tint: "#e6f7ff", edge: "#93c5fd",
    text: "Robust, scalable architectures designed for complex organizational needs." },
  { key: "finance", title: "Finance", icon: "shield", to: "/about", tint: "#e8fbf6", edge: "#5eead4",
    text: "Secure platforms built for accuracy, trust and compliance." },
  { key: "sme", title: "SME Solutions", icon: "briefcase", to: "/about", tint: "#eef0ff", edge: "#c7d2fe",
    text: "Practical digital tools that help growing businesses move faster." },
  { key: "healthcare", title: "Healthcare", icon: "heart", to: "/about", tint: "#e3efff", edge: "#93c5fd",
    text: "Reliable, privacy-minded software for care teams and patients." },
];

// TODO: set `image` to the existing project screenshots (import from src/assets),
// add the 4th project (its name starts with "S" on the live site).
// Case-study links point to /about for now; update once P4 has real routes.
export const PROJECTS = [
  { slug: "decolam", name: "Decolam", category: "E-commerce", image: null, tint: "linear-gradient(160deg, #e6f7ff, #93c5fd)" },
  { slug: "golden-lines", name: "Golden Lines", category: "Corporate", image: null, tint: "linear-gradient(160deg, #e8fbf6, #5eead4)" },
  { slug: "meticulis", name: "Meticulis", category: "Consultancy", image: null, tint: "linear-gradient(160deg, #eef0ff, #a78bfa)" },
];

// TODO: add Vikram's testimonial from the live site.
export const TESTIMONIALS = [
  { name: "Rajesh", role: "Manager",
    quote: "Optimum Sync did an amazing job with our branding and digital strategy. The team is highly professional and delivered exactly what we needed on time." },
  { name: "Ananya", role: "Founder",
    quote: "Working with them was a great experience. They understood our brand vision perfectly and created a stunning website that our customers love." },
];
