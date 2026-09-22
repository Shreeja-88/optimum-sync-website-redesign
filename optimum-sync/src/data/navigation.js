import { Cloud, Code2, Smartphone } from "lucide-react";
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
    title: "Web Development",
    blurb:
      "Responsive, high-performance websites tailored to your unique brand needs.",
    icon: Code2,
    details: {
      heading: "Build better digital experiences",
      description:
        "We create modern, responsive and scalable websites that help businesses connect with their customers and grow online.",
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
    title: "Mobile Development",
    blurb: "iOS and Android apps people enjoy using.",
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
    slug: "digital-marketing",
    title: "Digital Marketing",
    blurb:
      "Strategic online marketing to boost your brand visibility.",
    icon: Cloud,
    details: {
      heading: "Grow your digital presence",
      description:
        "We help businesses strengthen their online presence through strategic digital marketing solutions designed to reach the right audience.",
      features: [
        "Strategic digital marketing campaigns",
        "Improved online brand visibility",
        "Audience-focused marketing strategies",
        "Data-driven growth and engagement",
      ],
      technologies: [
        "Google Analytics",
        "Google Ads",
        "Facebook Ads",
        "Brevo",
        "Apollo AI",
        "Canva",
      ],
    },
  },

  {
    slug: "cloud-hosting",
    title: "Cloud Hosting",
    blurb:
      "Scalable and reliable cloud infrastructure for your business.",
    icon: Cloud,
    details: {
      heading: "Scale with reliable cloud infrastructure",
      description:
        "We provide scalable and dependable cloud solutions that help businesses deploy, manage and grow their digital services.",
      features: [
        "Scalable cloud infrastructure",
        "Reliable and secure hosting",
        "High-performance application deployment",
        "Infrastructure designed for business growth",
      ],
      technologies: [
        "Kubernetes",
        "Cloudflare",
        "Docker",
        "Hostinger",
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