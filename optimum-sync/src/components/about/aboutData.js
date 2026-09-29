export const hero = {
  headline: "Technology that solves problems.",
  body: [
    "Optimum Sync is a technology company focused on helping businesses build, improve, and scale their digital operations.",
    "We work across web development, mobile applications, custom software, e-commerce, AI, and cloud technologies to create solutions tailored to each client's requirements.",
    "We don't believe in one-size-fits-all software. We build technology around the problem you're trying to solve.",
  ],
  primaryCta: { label: "Let's talk", to: "/contact" },
  secondaryCta: { label: "Why Optimum Sync", href: "#why-us" },
  waveSteps: ["You bring the idea", "We shape it", "It launches in sync"],
};

export const story = {
  // *asterisks* mark the words AccentText should render in the blue gradient + underline
  title: "Your idea, built *end to end* by one team.",
  pillars: [
    {
      label: "Our mission",
      text: "We keep only what adds value and deliver focused, high-impact digital experiences. Our mission is to build intelligent solutions that equip businesses to succeed in a constantly changing world.",
    },
    {
      label: "Our vision",
      text: "To lead the way in digital transformation. We envision a future where technology and human creativity work together seamlessly, unlocking possibilities that once seemed out of reach.",
    },
  ],
};

// The cards sit in one row. 4 reasons fit comfortably; a 5th fits but is tighter
// (its card is included below, commented out: remove the // marks to bring it back).
// `image` is a path under /public. `imageAlt` describes it for screen readers.
export const whyUs = {
  title: "More than a *development team.*",
  intro:
    "We don't just build what is written in a requirement document. We work with you to understand the problem, identify the right solution, and build technology that can evolve with your business.",
  items: [
    {
      title: "Business First",
      text: "We start with your goals and challenges, not technology for technology's sake.",
      image: "/why-us/business.avif",
      imageAlt: "A business team in discussion",
    },
    {
      title: "Built to Scale",
      text: "Solutions are designed with future growth, integrations, and changing requirements in mind.",
      image: "/why-us/scale.jpg",
      imageAlt: "Growth and scalability concept",
    },
    {
      title: "One Technology Partner",
      text: "Strategy, design, development, deployment, and ongoing support under one roof.",
      image: "/why-us/rapid-delivery.jpeg",
      imageAlt: "A developer writing code on a laptop",
    },
    {
      title: "Transparent Collaboration",
      text: "Clear communication, defined milestones, and visibility throughout development.",
      image: "/why-us/collaboration.png",
      imageAlt: "Team members collaborating together",
      imagePosition: "top",
    },
  ],
};

export const workflow = {
  title: "From idea to launch.",
  intro: "A structured process keeps projects predictable, transparent, and focused on business outcomes.",
  steps: [
    { title: "Discover", text: "Understand business, users, objectives and requirements." },
    { title: "Plan", text: "Define scope, architecture, technology stack and roadmap." },
    { title: "Design", text: "Create intuitive UX/UI before development." },
    { title: "Build", text: "Turn approved designs into a functional, scalable product." },
    { title: "Test", text: "Test functionality, performance, responsiveness, security and UX." },
    { title: "Launch & Grow", text: "Deploy and continue support, maintenance and improvements." },
  ],
};

export const cta = {
  title: "Tell us what's out of sync.",
  text: "Describe what you're building or fixing. We'll come back with a plan, a timeline and a price.",
  button: { label: "Let's talk", to: "/contact" },
};
