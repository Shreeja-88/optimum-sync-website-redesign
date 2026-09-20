// All Home page content lives here so copy edits never touch the components.
// Text is taken from the current optimumsync.com unless marked TODO.
//
// PHOTOS: put image files in  public/images/home/  (see the list at the bottom).
// Paths below start with "/images/home/" because Vite serves /public at the
// site root. A missing file never breaks the page: a colour gradient shows instead.

export const HERO = {
  title: "Innovative Solutions for a Future-Driven World.",
  text: "We architect intelligent digital experiences that empower forward-thinking brands to thrive in a rapidly evolving connected world.",
};

// `layer` = position in the hero stack (0 = bottom). Slugs match P3's routes.
export const SERVICES = [
  {
    key: "web", layer: 1, title: "Web Development", to: "/services/web-development",
    text: "Responsive, high-performance websites tailored to your unique brand needs.",
    image: "/images/home/service-web.jpg",
    fill: "linear-gradient(135deg, #209fe3, #38bdf8)", edge: "#209fe3", tint: "#e6f7ff",
  },
  {
    key: "app", layer: 2, title: "App Development", to: "/services/mobile-development",
    text: "Intuitive mobile applications designed for seamless user experiences on iOS and Android.",
    image: "/images/home/service-app.jpg",
    fill: "linear-gradient(135deg, #5eead4, #a7f3d0)", edge: "#5eead4", tint: "#e8fbf6",
  },
  {
    key: "marketing", layer: 3, title: "Digital Marketing", to: "/services/digital-marketing",
    text: "Data-driven strategies to boost your online presence and accelerate growth.",
    image: "/images/home/service-marketing.jpg",
    fill: "linear-gradient(135deg, #c7d2fe, #a78bfa)", edge: "#a78bfa", tint: "#eef0ff",
  },
  {
    key: "cloud", layer: 0, title: "Cloud Hosting", to: "/services/cloud-hosting",
    text: "Secure and scalable cloud hosting infrastructure for modern enterprises.",
    image: "/images/home/service-cloud.jpg",
    fill: "linear-gradient(135deg, #93c5fd, #c7d2fe)", edge: "#93c5fd", tint: "#e3efff",
  },
];

export const STATS = [
  { value: "4.5/5", label: "Client ratings" },
  { value: "15+", label: "Projects launched" },
];

// Descriptions copied from the live optimumsync.com.
export const AUDIENCE = [
  { key: "enterprise", title: "Enterprise", icon: "building", to: "/about",
    text: "Robust, scalable architectures designed for complex organizational needs.",
    image: "/images/home/industry-enterprise.jpg", fallback: "linear-gradient(135deg, #209fe3, #1f2937)" },
  { key: "finance", title: "Finance", icon: "shield", to: "/about",
    text: "Secure, compliant, and high-performance financial technology solutions.",
    image: "/images/home/industry-finance.jpg", fallback: "linear-gradient(135deg, #10b981, #1f2937)" },
  { key: "sme", title: "SME Solutions", icon: "briefcase", to: "/about",
    text: "Tailored digital strategies that help small businesses scale rapidly and efficiently.",
    image: "/images/home/industry-sme.jpg", fallback: "linear-gradient(135deg, #a78bfa, #1f2937)" },
  { key: "healthcare", title: "Healthcare", icon: "heart", to: "/about",
    text: "Innovative digital health platforms improving patient care and operational efficiency.",
    image: "/images/home/industry-healthcare.jpg", fallback: "linear-gradient(135deg, #38bdf8, #1f2937)" },
];

// Names and categories match the live site. Links go to /about until P4 has real case-study routes.
// Photos are cropped from the live site's project cards.
export const PROJECTS = [
  { slug: "decolam", name: "Decolam", category: "E-commerce", image: "/images/home/project-decolam.jpg", fallback: "linear-gradient(160deg, #209fe3, #1f2937)" },
  { slug: "golden-lines", name: "Golden Lines", category: "Corporate", image: "/images/home/project-golden-lines.jpg", fallback: "linear-gradient(160deg, #5eead4, #1f2937)" },
  { slug: "meticulis", name: "Meticulis", category: "Consultancy", image: "/images/home/project-meticulis.jpg", fallback: "linear-gradient(160deg, #a78bfa, #1f2937)" },
  { slug: "sri-samhitha", name: "Sri Samhitha", category: "Real Estate", image: "/images/home/project-sri-samhitha.jpg", fallback: "linear-gradient(160deg, #38bdf8, #1f2937)" },
  { slug: "the-roof", name: "The Roof", category: "Construction", image: "/images/home/project-the-roof.jpg", fallback: "linear-gradient(160deg, #fbbf24, #1f2937)" },
  { slug: "style-meets-space", name: "Style Meets Space", category: "Design", image: "/images/home/project-style-meets-space.jpg", fallback: "linear-gradient(160deg, #c7d2fe, #1f2937)" },
];

// Quotes copied from the live optimumsync.com, in the same order.
// Entries with an empty `quote` are hidden. `photo` is optional (a client headshot).
export const TESTIMONIALS = [
  { name: "Vikram", role: "Manager", photo: null,
    quote: "The technical expertise and attention to detail provided by Optimum Sync were top-notch. They are our go-to partner for all things digital." },
  { name: "Rajesh", role: "Manager", photo: null,
    quote: "Optimum Sync did an amazing job with our branding and digital strategy. The team is highly professional and delivered exactly what we needed on time." },
  { name: "Ananya", role: "Founder", photo: null,
    quote: "Working with them was a great experience. They understood our brand vision perfectly and created a stunning website that our customers love." },
];

/* Photos live in public/images/home/  (already added; replace any file with the same name to swap it)
   service-web.jpg  service-app.jpg  service-marketing.jpg  service-cloud.jpg   ~1200x900
   industry-enterprise.jpg  industry-finance.jpg  industry-sme.jpg  industry-healthcare.jpg   ~1800x900
   project-decolam.jpg  project-golden-lines.jpg  project-meticulis.jpg
   project-sri-samhitha.jpg  project-the-roof.jpg  project-style-meets-space.jpg   ~1200x1000  */
