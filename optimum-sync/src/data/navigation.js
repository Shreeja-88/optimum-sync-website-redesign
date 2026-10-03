import {
  Globe2,
  Smartphone,
  Code2,
  ShoppingCart,
  Bot,
  Cloud,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "web-development",
    title: "Web & SaaS Development",
    blurb:
      "Responsive, high-performance websites and SaaS solutions tailored to your business needs.",
    icon: Globe2,
    details: {
      heading: "Build better digital experiences",
      description:
        "We create modern, responsive and scalable websites and SaaS solutions that help businesses connect with customers and grow online.",
      features: [
        "Responsive and user-friendly websites",
        "Modern technologies and best practices",
        "Scalable and high-performance development",
        "Solutions tailored to your business needs",
      ],
      technologies: [
        "React",
        "Node.js",
        "WordPress",
        "Python",
        "PHP",
        "Spring Boot",
      ],
    },
  },

  {
    slug: "mobile-development",
    title: "Mobile App Development",
    blurb:
      "Intuitive iOS and Android applications designed for smooth digital experiences.",
    icon: Smartphone,
    details: {
      heading: "Build powerful mobile experiences",
      description:
        "We develop intuitive and reliable mobile applications that provide smooth experiences across modern mobile devices.",
      features: [
        "User-friendly mobile interfaces",
        "iOS and Android application development",
        "Smooth and responsive performance",
        "Scalable solutions for growing businesses",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "MongoDB",
        "Kotlin",
        "Firebase",
        "iOS",
      ],
    },
  },

  {
    slug: "custom-software",
    title: "Custom Software",
    blurb:
      "Purpose-built software solutions designed around your business processes.",
    icon: Code2,
    details: {
      heading: "Software built around your business",
      description:
        "We develop custom software solutions that simplify workflows, solve business-specific challenges and support long-term growth.",
      features: [
        "Business-specific software solutions",
        "Scalable and maintainable architecture",
        "Workflow-focused development",
        "Secure and reliable applications",
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Java",
        "MongoDB",
        "MySQL",
      ],
    },
  },

  {
    slug: "e-commerce",
    title: "E-Commerce",
    blurb:
      "Modern e-commerce experiences designed to help businesses sell online.",
    icon: ShoppingCart,
    details: {
      heading: "Create better online shopping experiences",
      description:
        "We build user-friendly e-commerce solutions that make it easier for businesses to showcase products, manage sales and serve customers online.",
      features: [
        "Modern and responsive storefronts",
        "Secure shopping experiences",
        "Product and order management",
        "Scalable e-commerce solutions",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "WordPress",
        "PHP",
        "MySQL",
      ],
    },
  },

  {
    slug: "ai-automation",
    title: "AI & Automation",
    blurb:
      "Intelligent solutions that automate workflows and improve business efficiency.",
    icon: Bot,
    details: {
      heading: "Make your business smarter with AI",
      description:
        "We integrate AI and automation into business workflows to reduce repetitive work, improve efficiency and create smarter digital experiences.",
      features: [
        "AI-powered business solutions",
        "Workflow and process automation",
        "Intelligent data-driven systems",
        "AI integrations tailored to business needs",
      ],
      technologies: [
        "Python",
        "AI APIs",
        "Machine Learning",
        "OpenAI",
        "Automation",
        "REST APIs",
      ],
    },
  },

  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    blurb:
      "Reliable cloud infrastructure and deployment solutions built for scale.",
    icon: Cloud,
    details: {
      heading: "Scale with reliable cloud infrastructure",
      description:
        "We provide scalable and dependable cloud and DevOps solutions that help businesses deploy, manage and grow their digital services.",
      features: [
        "Scalable cloud infrastructure",
        "Reliable and secure deployment",
        "High-performance application hosting",
        "Infrastructure designed for business growth",
      ],
      technologies: [
        "Kubernetes",
        "Cloudflare",
        "Docker",
        "AWS",
        "MySQL",
        "Redis",
      ],
    },
  },
];

export const companyLinks = [
  { to: "/about", label: "About us" },
  { to: "/about#why-us", label: "Why Optimum Sync" },
  { to: "/about#case-studies", label: "Case studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact#faq", label: "FAQ" },
];

export const contact = {
  email: "office@optimumsync.com",
  phone: "+91 99803 36484",
  address:
    "#01, 2nd floor, NIE StartUp and Incubation Center, NIE College South Campus, Mananthavadi Road, Mysuru 570008",
  mapQuery:
    "NIE StartUp and Incubation Center, Mananthavadi Road, Mysuru 570008",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "NIE StartUp and Incubation Center, Mananthavadi Road, Mysuru 570008"
    ),
};

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/optimum-sync/posts/",
    icon: FaLinkedinIn,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/OptimumSync",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/optimum_sync",
    icon: FaInstagram,
  },
];