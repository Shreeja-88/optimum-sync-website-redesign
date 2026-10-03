// All Home page content lives here so copy edits never touch the components.
// Photos live in public/images/home/ (Vite serves /public at the site root).
// A missing photo never breaks the page: the gradient fallback shows instead.

export const HERO = {
  title: "Build digital products that move your business forward.",
  text: "We design, develop, and scale websites, mobile apps, custom software, e-commerce platforms, and AI-powered solutions for businesses ready to grow.",
  tags: "Web • Mobile • Software • AI • Cloud",
  photo: "/images/home/hero-team.jpg",
};

export const INTRO = {
  title: "Technology built around your business.",
  paragraphs: [
    "Every business has different challenges. We build technology around the way your business actually works, not the other way around.",
    "From a high-converting website to a complete business platform, our team combines strategy, design, engineering and technology to turn ideas into reliable digital products.",
  ],
};

// `layer` = position in the layer stack. Slugs match P3's routes.
export const SERVICES = [
  // `to` = page opened by "Explore ..." (check these against the routes in src/App.jsx).
  // `sub` = bold one-liner, `includes` = small tags shown on the open card.
  { key: "web", layer: 1, title: "Web & SaaS Development", to: "/services/web-development",
    sub: "Websites & web applications that work for your business",
    text: "Fast, responsive, conversion-focused websites and web applications, from corporate sites and landing pages to complex business platforms.",
    includes: ["Corporate Websites", "SaaS Platforms", "Web Applications", "Business Dashboards", "Landing Pages", "API Integrations"],
    image: "/images/home/service-web.jpg",
    fill: "linear-gradient(135deg, #209fe3, #38bdf8)", edge: "#209fe3", tint: "#e6f7ff" },
  { key: "app", layer: 2, title: "Mobile App Development", to: "/services/mobile-development",
    sub: "Mobile experiences your customers will want to use",
    text: "Intuitive Android and iOS applications designed around your users and your business objectives.",
    includes: ["Android", "iOS", "Cross-Platform Apps", "Real-Time Apps", "Payments", "Push Notifications", "Location & Tracking"],
    image: "/images/home/service-app.jpg",
    fill: "linear-gradient(135deg, #5eead4, #a7f3d0)", edge: "#5eead4", tint: "#e8fbf6" },
  { key: "software", layer: 3, title: "Custom Software", to: "/services/custom-software",
    sub: "Software built around your workflow",
    text: "Replace disconnected tools and manual processes with software designed specifically for how your business operates.",
    includes: ["Business Management", "CRM / Internal Tools", "Automation", "Admin Dashboards", "Workflow Management", "Integrations"],
    image: "/images/home/service-software.jpg",
    fill: "linear-gradient(135deg, #38bdf8, #818cf8)", edge: "#38bdf8", tint: "#e8f4ff" },
  { key: "ecommerce", layer: 4, title: "E-Commerce", to: "/services/e-commerce",
    sub: "Turn your products into a scalable digital business",
    text: "E-commerce experiences that make it easier for customers to discover, purchase and engage with your products.",
    includes: ["Online Stores", "Custom E-Commerce", "Payment Gateways", "Inventory", "Order Management", "Customer Dashboards"],
    image: "/images/home/service-ecommerce.jpg",
    fill: "linear-gradient(135deg, #c7d2fe, #a78bfa)", edge: "#a78bfa", tint: "#eef0ff" },
  { key: "ai", layer: 5, title: "AI & Automation", to: "/services/ai-automation",
    sub: "Put AI to work in your business",
    text: "We integrate AI into practical business workflows to reduce repetitive work, improve decision-making and create smarter digital experiences.",
    includes: ["AI Chatbots", "Business Automation", "AI Assistants", "Document Processing", "Data Analysis", "AI Search"],
    image: "/images/home/service-ai.jpg",
    fill: "linear-gradient(135deg, #a78bfa, #2dd4bf)", edge: "#a78bfa", tint: "#f1ecff" },
  { key: "cloud", layer: 0, title: "Cloud & DevOps", to: "/services/cloud-devops",
    sub: "Reliable infrastructure for growing products",
    text: "Deploy and maintain applications on secure, scalable infrastructure designed for performance and reliability.",
    includes: ["Cloud Deployment", "Hosting", "CI/CD", "Monitoring", "Database Management", "Performance Optimization"],
    image: "/images/home/service-cloud.jpg",
    fill: "linear-gradient(135deg, #93c5fd, #6366f1)", edge: "#93c5fd", tint: "#e3efff" },
];

export const STATS = [
  { value: "15+", label: "Projects delivered" },
  { value: "5+", label: "Markets served" },
  { value: "10+", label: "Technology capabilities" },
  { value: "E2E", label: "Product development" },
];

// `more` and `points` are extra copy for the larger stage. Edit freely.
export const AUDIENCE = [
  { key: "sme", title: "Startups & SMEs", icon: "briefcase", to: "/about",
    text: "Turn your idea into a working product and get to market faster.",
    more: "Whether you are validating a first idea or scaling a small business, we act as your technology team: we help you decide what to build first, design it around your customers and launch without overspending.",
    points: ["Websites, apps and MVPs built to grow with you", "Clear scope, milestones and communication", "One partner from concept to launch"],
    image: "/images/home/industry-sme.jpg", fallback: "linear-gradient(135deg, #a78bfa, #1f2937)" },
  { key: "enterprise", title: "Enterprises", icon: "building", to: "/about",
    text: "Custom platforms, integrations and automation around existing operations.",
    more: "Large organisations rarely need to start over. We work with your existing systems to build custom platforms, connect disconnected tools and automate repetitive work, so teams spend time on decisions instead of data entry.",
    points: ["Custom business platforms and internal tools", "Integrations with the software you already use", "Workflow automation and admin dashboards"],
    image: "/images/home/industry-enterprise.jpg", fallback: "linear-gradient(135deg, #209fe3, #1f2937)" },
  { key: "finance", title: "Finance", icon: "shield", to: "/about",
    text: "Dashboards, reporting and secure tools that make numbers easier to act on.",
    more: "Finance teams need accuracy and clarity. We build reporting dashboards, business management tools and secure web platforms that bring your data together and make it easier to track, review and share.",
    points: ["Reporting and analytics dashboards", "Secure, role-based web applications", "Reliable cloud hosting and monitoring"],
    image: "/images/home/industry-finance.jpg", fallback: "linear-gradient(135deg, #10b981, #1f2937)" },
  { key: "healthcare", title: "Healthcare", icon: "heart", to: "/about",
    text: "Reliable digital tools for clinics and care teams to work smarter.",
    more: "Clinics and care providers need software that is simple to use and dependable. We build appointment, records and communication tools, plus patient-facing websites and apps, designed around how your team actually works.",
    points: ["Patient-friendly websites and mobile apps", "Scheduling and management tools", "Dependable performance and support after launch"],
    image: "/images/home/industry-healthcare.jpg", fallback: "linear-gradient(135deg, #38bdf8, #1f2937)" },
];

// Live client sites. `region` is "Local" or "International".
// TODO: replace the stand-in photos with real screenshots of each site.
export const PROJECTS = [
  { slug: "ambience", name: "Ambience Home Interiors", domain: "ambiencehomeinteriors.com", region: "Local", place: "India", image: "/images/home/project-style-meets-space.jpg", fallback: "linear-gradient(160deg, #c7d2fe, #1f2937)" },
  { slug: "mastertech", name: "MasterTech Service", domain: "mastertechservice.in", region: "Local", place: "India", image: "/images/home/work-mastertech.jpg", fallback: "linear-gradient(160deg, #209fe3, #1f2937)" },
  { slug: "ksdma", name: "Karnataka State Digital Media Association", domain: "karnatakastatedigitalmediaassociation.in", region: "Local", place: "India", image: "/images/home/work-ksdma.jpg", fallback: "linear-gradient(160deg, #a78bfa, #1f2937)" },
  { slug: "therooff", name: "The Rooff", domain: "therooff.com", region: "Local", place: "India", image: "/images/home/project-the-roof.jpg", fallback: "linear-gradient(160deg, #fbbf24, #1f2937)" },
  { slug: "sri-samhitha", name: "Sri Samhitha Enterprises", domain: "srisamhithaenterprises.com", region: "Local", place: "India", image: "/images/home/project-sri-samhitha.jpg", fallback: "linear-gradient(160deg, #38bdf8, #1f2937)" },
  { slug: "nandhi-nest", name: "Nandhi Nest", domain: "nandhinest.in", region: "Local", place: "India", image: "/images/home/project-decolam.jpg", fallback: "linear-gradient(160deg, #5eead4, #1f2937)" },
  { slug: "montfort", name: "Montfort Consulting", domain: "montfortconsulting.ca", region: "International", place: "Canada", image: "/images/home/work-montfort.jpg", fallback: "linear-gradient(160deg, #209fe3, #1f2937)" },
  { slug: "alredha", name: "Alredha", domain: "alredha.com", region: "International", place: "UAE · Riyadh KSA · Bahrain", image: "/images/home/work-alredha.jpg", fallback: "linear-gradient(160deg, #93c5fd, #1f2937)" },
  { slug: "nri-services", name: "NRI Services", domain: "nriservices.co.in", region: "International", place: "USA – India", image: "/images/home/project-meticulis.jpg", fallback: "linear-gradient(160deg, #a78bfa, #1f2937)" },
  { slug: "golden-lines", name: "Golden Lines", domain: "goldenlinesco.com", region: "International", place: "Riyadh, KSA", image: "/images/home/project-golden-lines.jpg", fallback: "linear-gradient(160deg, #5eead4, #1f2937)" },
];

// Main client with ongoing work.
export const CLIENT = {
  name: "Samskriti Foundation",
  text: "We are currently building digital products for Samskriti Foundation, from learning apps to a naturopathy handbook.",
  projects: [
    { title: "Sharada Learning App", kind: "Mobile learning app", icon: "phone" },
    { title: "Samskriti Foundation App", kind: "Mobile app", icon: "phone" },
    { title: "Handbook of Naturopathy", kind: "Digital handbook", icon: "book" },
  ],
};

export const TESTIMONIALS = [
  { name: "Rakesh Srivastava", role: "CEO & Founder, Montfort Consulting", photo: null,
    quote: "Optimum Sync has been a dependable technology partner for our business. Their professionalism, responsiveness, and commitment to quality have made working with their team a seamless experience." },
  { name: "Amruth Raj", role: "CEO & Founder, Ambience Home Interiors", photo: null,
    quote: "Optimum Sync brings a strong combination of professionalism, technical expertise, and customer focus. Their team takes the time to understand our requirements and consistently delivers with attention to detail." },
  { name: "Ajoy", role: "Founder & Owner, HMH (Alredha)", photo: null,
    quote: "Our experience with Optimum Sync has been exceptional. Their team is reliable, proactive, and committed to maintaining a high standard of quality throughout the entire engagement." },
  { name: "Gagandeep", role: "Owner, Nandhi Nest", photo: null,
    quote: "Optimum Sync has been a trusted partner for us. Their responsive team, professional approach, and focus on delivering quality outcomes have made the collaboration a great experience." },
];

export const FAQ = [
  { q: "What does Optimum Sync do?", a: "We design and develop websites, mobile applications, custom software, e-commerce platforms, AI solutions and cloud-based systems for businesses." },
  { q: "Can you build a product from scratch?", a: "Yes. We take a project from idea and requirements through design, development, testing, deployment and support." },
  { q: "Do you work with startups?", a: "Yes. We work with startups, entrepreneurs, growing businesses and established companies." },
  { q: "Can you work with our existing software?", a: "Yes. We can improve, integrate, maintain or rebuild existing applications depending on requirements." },
  { q: "Do you provide ongoing support?", a: "Yes. We provide maintenance, updates, bug fixes, performance improvements and further development after launch." },
  { q: "How do we start a project?", a: "Tell us what you're trying to build or improve. We'll discuss your requirements and agree the next steps." },
];
