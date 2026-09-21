export const hero = {
  headline: "Technology that helps your business grow.",
  intro:
    "Optimum Sync is an IT services company. We design, build and run custom software, mobile apps and cloud platforms for teams that want to move fast without cutting corners.",
  primaryCta: { label: "Let's talk", to: "/contact" },
  secondaryCta: { label: "Why Optimum Sync", href: "#why-us" },
  waveSteps: ["You bring the idea", "We shape it", "It launches in sync"],
};

export const story = {
  title: "Your idea, built end to end by one team.",
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
  title: "Why choose us.",
  intro: "Clean, production-ready code, delivered at maximum velocity.",
  items: [
    {
      title: "Expert Team",
      text: "Experienced developers and designers working as one team, from first sketch to launch.",
      image: "/why-us/expert-team.jpeg",
      imageAlt: "A team collaborating around a table with laptops",
    },
    {
      title: "Global Reach",
      text: "We connect businesses around the world through dependable digital solutions.",
      image: "/why-us/global-reach.jpeg",
      imageAlt: "A globe showing connected regions",
    },
    {
      title: "Rapid Delivery",
      text: "Short build cycles and regular previews keep your launch on schedule and quality high.",
      image: "/why-us/rapid-delivery.jpeg",
      imageAlt: "A developer writing code on a laptop",
    },
    {
      title: "Secure & Scalable",
      text: "Security built in from day one, on an architecture that grows with your business.",
      image: "/why-us/secure-scalable.jpeg",
      imageAlt: "Hands typing on a laptop with padlock icons overlaid",
    },
    // {
    //   title: "Ongoing Support",
    //   text: "We stay with you after launch, keeping your product secure, fast and improving.",
    //   image: "/why-us/ongoing-support.jpeg",
    // },
  ],
};

export const workflow = {
  title: "How we run projects",
  intro: "Four stages, each with something you can open, click and review.",
  steps: [
    {
      title: "Scope",
      text: "We agree on outcomes, budget and milestones before writing any code.",
    },
    {
      title: "Design",
      text: "UI/UX and design tokens, reviewed with you in clickable prototypes.",
    },
    { title: "Build", text: "Short cycles. Every merge lands on a preview link you can open." },
    { title: "Launch & support", text: "Cloud hosting, monitoring and support after go-live." },
  ],
};

export const cta = {
  title: "Tell us what's out of sync.",
  text: "Describe what you're building or fixing. We'll come back with a plan, a timeline and a price.",
  button: { label: "Let's talk", to: "/contact" },
};
